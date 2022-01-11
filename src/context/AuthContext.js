import { createContext,useReducer } from "react"
const INITIAL_STATE={
    user:null,
    isFetching:false,
    error:false,
    dispatch
}

export const AuthContext=createContext(INITIAL_STATE)
export const AuthContextProvider=({children})=>{
    const [state,dispatch]=useReducer(AuthContext,INITIAL_STATE);
    return (
        <AuthContextProvider value={{user:state.user, isFetching:state.isFetching,error:state.error,dispatch}}>
            {children}
        </AuthContextProvider>
    )
}