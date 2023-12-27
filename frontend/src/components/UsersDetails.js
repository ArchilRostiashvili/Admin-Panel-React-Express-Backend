import React, { useMemo } from "react";
import { useTable, useRowSelect } from "react-table";

import { blockUsers, unblockUsers, deleteUsers } from "./component-functions/admin-buttons-logic";

import { format } from "date-fns";

import { useAuthContext } from '../hooks/useAuthContext';

const UsersDetails = ({ users }) => {
  const { user } = useAuthContext();

  const COLUMNS = useMemo(
    () => [
      {
        Header: ({ getToggleAllRowsSelectedProps }) => (
          <div>
            <input type="checkbox" {...getToggleAllRowsSelectedProps()} />
          </div>
        ),
        accessor: "check",
        Cell: ({ row }) => <input type="checkbox" {...row.getToggleRowSelectedProps()} />,
      },
      {
        Header: "Name",
        accessor: "fullname",
      },
      {
        Header: "Position",
        accessor: "position",
      },
      {
        Header: "e-Mail",
        accessor: "email",
      },
      {
        Header: "Last login",
        accessor: "lastlogin",
        Cell: ({ cell }) => format(new Date(cell.value), "yyyy-MM-dd HH:mm:ss"),
      },
      {
        Header: "Status",
        accessor: "blocked",
        Cell: ({ cell }) => (cell.value ? "Blocked" : "Active"),
      },
    ],
    []
  );

  const columns = useMemo(() => COLUMNS, [COLUMNS]);
  const data = useMemo(() => users, [users]);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    selectedFlatRows,
  } = useTable(
    {
      columns,
      data,
    },
    useRowSelect
  );

  // array of all selected users
  const selectedUsers = selectedFlatRows.map((row) => row.original);

  
  return (
    <div className='flex-col space-y-5'>
      <div className="space-x-5">
        <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" onClick={() => blockUsers(selectedUsers, user)}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
          </svg>
        </button>
        <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" onClick={() => unblockUsers(selectedUsers, user)}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5V6.75a4.5 4.5 0 1 1 9 0v3.75M3.75 21.75h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H3.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
          </svg>
        </button>
        <button className="bg-transparent hover:bg-red-600 text-white font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded bg-red-600" onClick={() => deleteUsers(selectedUsers, user)}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
          </svg>
        </button>
      </div>

      <table {...getTableProps()} style={{ borderCollapse: "collapse", width: "100%" }}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column, columnIndex) => (
                <th
                  {...column.getHeaderProps()}
                  style={{
                    borderBottom: "2px solid #ddd",
                    borderRight: columnIndex < headerGroup.headers.length - 1 ? "1px solid #ddd" : "none",
                    padding: "8px",
                  }}
                >
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell, cellIndex) => (
                  <td
                    {...cell.getCellProps()}
                    style={{
                      borderBottom: "1px solid #ddd",
                      borderRight: cellIndex < row.cells.length - 1 ? "1px solid #ddd" : "none",
                      padding: "8px",
                    }}
                  >
                    {cell.render("Cell")}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default UsersDetails;







