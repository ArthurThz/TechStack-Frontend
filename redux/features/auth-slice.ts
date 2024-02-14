import {createSlice, PayloadAction} from '@reduxjs/toolkit'

type initialState= {
    value:AuthState,
}

type AuthState = {
    isAuth:boolean,
    id:string,
    nome:string,
    sobrenome:string,
    profissao:string,
    token:string,
    
}

type UserData = {
    token:string,
    user:{
        id:string,
        nome:string,
        sobrenome:string,
        profissao:string,
    
        }
}
const initialState = {
    value:{
        isAuth:false,
        id:"",
        nome:"",
        sobrenome:"",
        profissao:"",       
        token:"",
        
    } as AuthState
} as initialState

export const auth = createSlice({
    name:"auth",
    initialState,
    reducers:{
        logOut: () => initialState,
        logIn: (state, action : PayloadAction<UserData>) => {
            
            const { nome,sobrenome,profissao,id}  = action.payload.user
            const  token  = action.payload.token

            return {
                value:{
                    isAuth:true,
                    token:token,
                    id,
                    nome,
                    sobrenome,
                    profissao,
                    
                }
            }
        }
    }
})

export const {logIn, logOut} = auth.actions
export default auth.reducer