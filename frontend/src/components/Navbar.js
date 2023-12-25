import { Link } from 'react-router-dom'
import { useAuthContext } from '../hooks/useAuthContext'
import { useLogout } from '../hooks/useLogout';

const Navbar = () => {
    const {user} = useAuthContext();
    const {logout} = useLogout();

    const handleClickLogout = ()=>{
        logout();
    }

    return ( 
        <header>
            {!user &&
                <div className="header-content">
                    <Link to='/login'>Log-In</Link>
                    <Link to='/signup'>Create a new account</Link>
                </div>
            }
            {user &&
                <button onClick={handleClickLogout}>Log out</button> 
            }
        </header>
    );
}
 
export default Navbar;