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
    id:string,
}
const initialState = {
    value:{
        isAuth:false,
        id:"",             
        token:"",
        
    } as AuthState
} as initialState

export const auth = createSlice({
    name:"auth",
    initialState,
    reducers:{
        logOut: () => initialState,
        logIn: (state, action : PayloadAction<UserData>) => {
            
            const id  = action.payload.id
            const  token  = action.payload.token

            return {
                value:{
                    isAuth:true,
                    token:token,
                    id:id,
                 
                }
            }
        }
    }
})

export const {logIn, logOut} = auth.actions
export default auth.reducer