import { useEffect, useState } from "react";
import { PostProps } from "../types/posts";
import { apiRoute } from "@/services/api";

export const usePosts =  () =>{


    const [posts, setPosts] = useState<PostProps[] | null>([]);
    const [error, setError] = useState<string | null >(null);
    const fetchPosts = async () =>{
        try{
            const response = await apiRoute.get("/posts/geral")
            if(response.data) {
                setPosts(response.data)
            } else {
                throw new Error("Dados da API inválidos!")                
            }
        }catch(err :  any){
            setError(err.message)
        }
    }
    useEffect(() => {
        fetchPosts()
    }, []);
   
    
    return {posts, error}
}
