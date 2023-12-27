import { createContext, useReducer, useEffect } from "react";

export const AuthenticationContext = createContext();

export const AuthenticationReducer = (state, action) => {
    switch (action.type){
        case 'LOGIN':
            return {user: action.payload}
        case 'LOGOUT':
            return {user: null}
        default:
            return state
    }
};

export const AuthenticationContextProvider = ({children})=>{
    const [state, dispatch] = useReducer(AuthenticationReducer, {
        user: null
    });

    useEffect(()=>{
        const user = JSON.parse(localStorage.getItem('user'));

        if(user){
            dispatch({type: 'LOGIN', payload: user})
        };
    }, []);

    return(
        <AuthenticationContext.Provider value={{...state, dispatch}}>
            {children}
        </AuthenticationContext.Provider>
    )
}