import { useState } from "react";
import { useAuthContext } from '../hooks/useAuthContext';

export const useRegister = ()=>{
    const [isLoading, setIsLoading] = useState(null);
    const [error, setError] = useState(null);
    const {dispatch} = useAuthContext();

    const signup = async (email, password, position)=>{
        setIsLoading(true);
        setError(null);

        //MUST REPLACE proxy in package.json
        const response = await fetch('./api/user/signup', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email, password, position})
        })
        const json = await response.json();

        if(!response.ok){
            setIsLoading(false);
            setError(json.error);
        }

        if(response.ok){
            localStorage.setItem('user', JSON.stringify(json));
            dispatch({type: 'LOGIN', payload: json});
            setIsLoading(false);
        }
    }

    return {signup, isLoading, error};
}