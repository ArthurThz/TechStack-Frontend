import { useEffect, useState } from "react";
import { PostProps } from "../types/posts";
import { apiRoute } from "@/services/api";
import { headers } from "next/headers";
import { ErrorProps } from "../components/Error/Error";

export const usePosts =  ({token}:{token:string}) =>{


    const [posts, setPosts] = useState<PostProps[] | null>([]);
    const [error, setError] = useState<ErrorProps>();
    const [isLoadingFeed, setisLoadingFeed] = useState(false);

   
    const fetchPosts = async () =>{
        try{
            setisLoadingFeed(true)
            const response = await apiRoute.get("/posts/general",{
                headers:{
                    Authorization:`Bearer ${token}`
                }
            })
            if(response.data) {
                setPosts(response.data)
            } else {
                throw new Error("Dados da API inválidos!")                
            }
        }catch(err :  any){
            setError(err.message)
        }finally{
            setisLoadingFeed(false)
        }
    }
    useEffect(() => {
        if(!token) {
            setError({
                code:401,
                title:"Não autorizado!",
                message:"Parece que você não tem permissão para acessar esta área, faça login para continuar"
            })
            return
        }
        fetchPosts()
    }, []);
   
    
    return {posts, error, isLoadingFeed}
}
