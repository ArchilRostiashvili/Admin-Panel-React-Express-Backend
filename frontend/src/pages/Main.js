import React, { useEffect, useState } from "react";
import { useAuthContext } from '../hooks/useAuthContext';
import UsersDetails from '../components/UsersDetails';

const Main = () => {
    const { user, dispatch } = useAuthContext();
    const [users, setUsers] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:4000/api/user', {
                    method: 'GET',
                    headers: { 'Authorization': `Bearer ${user.token}` }
                });
                const data = await response.json();
                const foundUser = data.find(u => u.email === user.email);
                if (!foundUser || foundUser.blocked === true) {
                    dispatch({ type: 'LOGOUT' });
                    localStorage.removeItem('user');
                }
                setUsers(data);
            } catch (error) {
                console.error('Error fetching user data', error);
            }
        };
        fetchData();
    }, [user, dispatch]); // Include 'dispatch' in the dependency array

    return (
        <div className='flex justify-center pt-20 h-screen 
        bg-gradient-to-r from-blue-700 via-orange-600 to-yellow-500'>
            {users && <UsersDetails users={users} />}
        </div>
    );
}

export default Main;



