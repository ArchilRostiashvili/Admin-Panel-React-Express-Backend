import { AuthenticationContext } from '../context/authenticationContext';
import { useContext } from 'react';

export const useAuthContext = () =>{
    const context = useContext(AuthenticationContext);

    if(!context){
        throw Error ('useAuthContext must be used inside an AuthContextProvider');
    }

    return context;
}