import { useState } from "react";
import { useLogin } from "../hooks/useLogin";
import { Link } from 'react-router-dom';

const Login = () => {
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const {login, error, isLoading} = useLogin();

    const handleLoginSubmit = async (i) =>{
        i.preventDefault();
        await login(email, password);
    }

    return ( 
        <div className='flex justify-center items-center h-screen 
        bg-gradient-to-r from-blue-700 via-orange-600 to-yellow-500'>
                <form onSubmit={handleLoginSubmit} className="w-96 p-6 shadow-lg 
                bg-gradient-to-r from-yellow-500 via-orange-600 to-blue-700 
                rounded-md flex-col space-y-5 ease-out">
                    <h1 className='text-2xl font-bold dark:text-white'>Log-In</h1>
                    <hr />
                    <div className='mb-4 bg-transparent'>
                        <label className="block text-gray-700 text-sm font-bold mb-2">Enter Your Email</label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" placeholder="email"
                        type="email" onChange={(e)=>setEmail(e.target.value)} value={email} 
                        />
                    </div>
                        
                    <div className="mb-4 bg-transparent">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Enter Your Password</label>
                        <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" placeholder="******************" 
                        type="password" onChange={(e)=>setPassword(e.target.value)} value={password} 
                        />
                    </div>
                    <button disabled={isLoading}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >Sign-In</button>
                    <h1>Don't have an account? <Link to='/signup' className='text-blue-100 hover:text-blue-300'>Sign Up</Link></h1>
                    {error && <div className="error">{error}</div>}
                </form> 
        </div>
    );
}
export default Login;
