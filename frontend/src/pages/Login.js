import { useState } from "react";
import { useLogin } from "../hooks/useLogin";

const Login = () => {
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const {login, error, isLoading} = useLogin();

    const handleLoginSubmit = async (i) =>{
        i.preventDefault();
        await login(email, password);
    }

    return ( 
        <div>
            <form className="login-form" onSubmit={handleLoginSubmit}>
                <h2>Log-In</h2>
                <label>Enter Your Email</label>
                <input 
                type="email" onChange={(e)=>setEmail(e.target.value)} value={email} 
                />
                <label>Enter Your Password</label>
                <input 
                type="password" onChange={(e)=>setPassword(e.target.value)} value={password} 
                />
                <button>Log-In</button>
            </form>
        </div>
    );
}
export default Login;
