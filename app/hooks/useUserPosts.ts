import { useEffect, useState } from "react";
import { PostProps } from "../types/posts";
import { apiRoute } from "@/services/api";
import { UserProps } from "../types/user";

export const useUserPosts =  ({id} : {id:string}) =>{

    const [user, setUser] = useState<UserProps>();
    const [posts, setPosts] = useState<PostProps[]>([]);
    const getUserProfile = async () => {

        try{
            const response = await apiRoute.get(`/user/profile/${id}`);
    
            const { userInfo, userPosts } = response.data;
        
            const qtdPosts = userPosts.length;
        
            setUser({ ...userInfo[0], qtdPosts });
            setPosts(userPosts);
        }catch(err){
            return err
        }
        
    
      
      };
    useEffect(() => {
        getUserProfile()
    }, );
   
    
    return {user, posts, setPosts}
}
