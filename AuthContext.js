import { createContext, useContext, useReducer } from "react";
import { AuthReducer, initialState } from "./AuthReducer";

const AuthStateContext = createContext()
const AuthDispatchContext = createContext()

export const useAuthState = ()=>{
    const context = useContext(AuthStateContext)
    if (context === undefined){
        throw new Error('useAuthState must be used within a AuthProvider')
    } return context
}

export const useAuthDispatch = () =>{
    const context = createContext(AuthDispatchContext)
    if (context === undefined) {
        throw new Error('useAuthDispatch must be used within a AuthProvider')
    } return context
}

export const AuthProvider = ({children})=>{
    const [user, dispatch] = useReducer(AuthReducer, initialState)
    return (
        <AuthStateContext.Provider value={user}>
            <AuthDispatchContext.Provider value={dispatch}></AuthDispatchContext.Provider>
        </AuthStateContext.Provider>
    )
}