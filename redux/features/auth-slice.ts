import {createSlice, PayloadAction} from '@reduxjs/toolkit'

type initialState= {
    value:AuthState,
}

type AuthState = {
    isAuth:boolean,
    cpf:string,
    uuid:string,
    
}
const initialState = {
    value:{
        isAuth:false,
        cpf:"",
        uuid:"",
    } as AuthState
} as initialState

export const auth = createSlice({
    name:"auth",
    initialState,
    reducers:{
        logOut: () => initialState,
        logIn: (state, action : PayloadAction<string>) => {
            return {
                value:{
                    isAuth:true,
                    cpf: action.payload,
                    uuid:"asd0a9dad0a9sda0sd9asd8asda"
                }
            }
        }
    }
})

export const {logIn, logOut} = auth.actions

export default auth.reducer