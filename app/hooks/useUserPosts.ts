import { useEffect, useState } from "react";
import { PostProps } from "../types/posts";
import { apiRoute } from "@/services/api";
import { UserProps } from "../types/user";
import { toast } from "sonner";

export const useUserPosts =  ({id} : {id:string}) =>{

    const [user, setUser] = useState<UserProps | null>(null);
    const [posts, setPosts] = useState<PostProps[]>([]);
    const [isLoadingPosts, setIsLoadingPosts] = useState(false);

    const getUserProfile = async () => {
        setIsLoadingPosts(true)
        try{
            const response = await apiRoute.get(`/user/profile/${id}`);
    
            const { userInfo, userPosts } = response.data;
        
            const qtdPosts = userPosts.length;
        
            setUser({ ...userInfo[0], qtdPosts });
            setPosts(userPosts);
        }catch(err){
            return err
        }
        setIsLoadingPosts(false)
    
      
      };
    useEffect(() => {
        getUserProfile()
    },[] );

   
    const handleOnDeletePost = async (id: string) => {
        setIsLoadingPosts(true)
        const response = await apiRoute.delete(`/post/${id}`);
    
        const { status } = response;
    
        if (status != 204) {
          alert("Não foi possivel excluir a publicação, tente novamente!");
          return;
        }
    
        const postsArray = posts.filter((item) => {
          return item.id !== id;
        });
    
        toast.success("Post deletado com sucesso!", {
          position: "bottom-left",
        });
    
        setPosts(postsArray);
        setIsLoadingPosts(false)
      };
    
    return { posts, handleOnDeletePost, isLoadingPosts}
}
