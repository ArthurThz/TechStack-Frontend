import { cookies } from "next/headers";

type cookiesProps = {
    name:string,
    value:string
}


export const createCookie = ({ name, value }: cookiesProps) => {
    cookies().set(
        {
            name,
            value,
            
        }
        
    )
}

export const deleteCookie = ({name} : {name:string}) =>{
    cookies().delete({name})
}

export const checkIfUserIsLoggedIn = () => {

}