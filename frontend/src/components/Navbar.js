import { Link } from 'react-router-dom';
import { useAuthContext } from '../hooks/useAuthContext'
import { useLogout } from '../hooks/useLogout';

const Navbar = () => {
    const {user} = useAuthContext();
    const {logout} = useLogout();

    const handleClickLogout = ()=>{
        logout();
    }

    return ( 
        <header className='absolute bg-blue-400 w-full flex justify-end min-h-12 items-center'>
            {!user &&
                <div className='pr-10'>
                    <Link className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded' to='/login'>Log-In</Link>
                </div>
            }
            {user &&
                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded' onClick={handleClickLogout}>Log out</button> 
            }
        </header>
    );
}
 
export default Navbar;