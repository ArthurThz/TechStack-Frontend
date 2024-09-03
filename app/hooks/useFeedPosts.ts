import { useEffect, useState } from "react";
import { PostProps } from "../types/posts";
import { apiRoute } from "@/services/api";

export const usePosts =  () =>{


    const [posts, setPosts] = useState<PostProps[] | null>([]);
    const [error, setError] = useState<string | null >(null);
    const [isLoadingFeed, setisLoadingFeed] = useState(false);
    const fetchPosts = async () =>{
        try{
            setisLoadingFeed(true)
            const response = await apiRoute.get("/posts/general")
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
        fetchPosts()
    }, []);
   
    
    return {posts, error, isLoadingFeed}
}
