import { useState } from "react";
import { useRegister } from "../hooks/useRegister";
import { Link } from 'react-router-dom';

const Register = () => {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [position, setPosition] = useState('-');

    const {signup, error, isLoading} = useRegister();

    const handleLoginSubmit = async (i) =>{
        i.preventDefault();
        const fullname = name + ' ' + surname;
        await signup(email, password, fullname, position);
    }

    return ( 
        <div className='flex justify-center items-center h-screen 
        bg-gradient-to-r from-blue-700 via-orange-600 to-yellow-500'>
            <form className="w-96 p-6 shadow-lg 
                bg-gradient-to-r from-yellow-500 via-orange-600 to-blue-700 
                rounded-md flex-col space-y-5" onSubmit={handleLoginSubmit}>
                <h1 className='text-2xl font-bold dark:text-white'>Log-In</h1>
                <hr />

                <div className='mb-4 bg-transparent'>
                <label className="block text-gray-700 text-sm font-bold mb-2">Enter Your Name</label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="name"
                type="text" onChange={(e)=>setName(e.target.value)} value={name} 
                />
                </div>

                <div className='mb-4 bg-transparent'>
                <label className="block text-gray-700 text-sm font-bold mb-2">Enter Your Surname</label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="surname"
                type="text" onChange={(e)=>setSurname(e.target.value)} value={surname} 
                />
                </div>

                <div className='mb-4 bg-transparent'>
                <label className="block text-gray-700 text-sm font-bold mb-2">Enter Your Email</label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" placeholder="email"
                type="email" onChange={(e)=>setEmail(e.target.value)} value={email} 
                />
                </div>

                <div className='mb-4 bg-transparent'>
                <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" placeholder="******************"
                type="password" onChange={(e)=>setPassword(e.target.value)} value={password} 
                />
                </div>

                <div className='mb-4 bg-transparent'>
                <label className="block text-gray-700 text-sm font-bold mb-2">Select your position</label>
                <select className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                onChange={(e)=>setPosition(e.target.value)} value={position} >
                    <option value="-">-</option>
                    <option value="CIO">CIO</option>
                    <option value="CEO">CEO</option>
                    <option value="Captain">Captain</option>
                    <option value="Office Manager">Office Managaer</option>
                </select>
                </div>

                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" disabled={isLoading}>Sign-Up</button>
                <h1>Already have an account? <Link to='/login' className='text-blue-100 hover:text-blue-300'>Sign In</Link></h1>
                {error && <div className="error">{error}</div>}
            </form>
        </div>
    );
}
export default Register;