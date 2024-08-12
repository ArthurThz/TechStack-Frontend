import {createSlice, PayloadAction} from '@reduxjs/toolkit'

type initialState= {
    value:AuthState,
}

type AuthState = {
    isAuth:boolean,
    id:string,
    
    token:string,
    
}

type UserData = {
    token:string,
    user:{
        id:string,
    
        }
}
const initialState = {
    value:{
        isAuth:true,
        id:"f57cbc59-7b68-4cac-879c-1514ccbdbbc8",             
        token:"",
        
    } as AuthState
} as initialState

export const auth = createSlice({
    name:"auth",
    initialState,
    reducers:{
        logOut: () => initialState,
        logIn: (state, action : PayloadAction<UserData>) => {
            
            const { id }  = action.payload.user
            const  token  = action.payload.token

            return {
                value:{
                    isAuth:true,
                    token:token,
                    id,
                 
                }
            }
        }
    }
})

export const {logIn, logOut} = auth.actions
export default auth.reducer