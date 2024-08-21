import { useEffect, useState } from "react";
import { PostProps } from "../types/posts";
import { apiRoute } from "@/services/api";

export const usePosts =  () =>{


    const [posts, setPosts] = useState<PostProps[]>([]);
    const fetchPosts = async () =>{
        try{
            const response = await apiRoute.get("/posts/general")
            setPosts(response.data)
        }catch(err){
            return err
        }
    }
    useEffect(() => {
        fetchPosts()
    }, []);
   
    
    return posts
}
