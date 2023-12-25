import { useEffect, useState } from "react";
import {useAuthContext} from '../hooks/useAuthContext';
// Table
import {AgGridReact} from 'ag-grid-react';
import 'ag-grid-community/styles//ag-grid.css';
import 'ag-grid-community/styles//ag-theme-quartz.css';

const Main = () => {
    // const [columnDefs, setColumnDefs] = useState([
    //     {field: 'Checkbox'},
    //     {field: 'Name\nSatus'},
    //     {field: 'e-Mail'},
    //     {field: 'Last login'},
    //     {field: 'Status'}
    // ]);

    // const [rowData, setRowData] = useState([
    //     {Checkbox: '-', Name: 'Dude'}
    // ]);

    useEffect(()=>{

    }, []);

    return ( 
        <div className="main">
            {/* <AgGridReact
                columnDefs={columnDefs}
            /> */}
            <div className="main-content">
                <div className="actions">
                    <button>Block</button>
                    <button>Unblock</button>
                    <button>Delete</button>
                </div>
                {/* {user.map(( user) => {
                    <tr key={_id}>
                        <td>{item._id}</td>
                    </tr>    
                })} */}
                
            </div>
        </div>
    );
}
 
export default Main;