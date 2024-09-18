import { useEffect, useState } from "react";
import { UserProps } from "../types/user";
import { apiRoute } from "@/services/api";
import { PostProps } from "../types/posts";
import { toast } from "sonner";
import { ErrorProps } from "../components/Error/Error";

 type UserProfileHeaderProps = { id: string, token:string }

  export const useUserProfileHeader = ({ id, token }: UserProfileHeaderProps) => {
    
  const [user, setUser] = useState<UserProps | null>(null);

  const [posts, setPosts] = useState<PostProps[]>([])

  const [isLoadingProfile, setIsLoadingProfile] = useState(false);

  const [userProfileError, setUserProfileError] = useState<ErrorProps>();

  

  const fetchUserProfileData = async () => {

    try {
      setIsLoadingProfile(true);
      
      
      const response = await apiRoute.get(`/user/profile/${id}`,{
        headers:{
          Authorization: `Bearer ${token}`,
        }
      });
      
      if (response.data) {
        const { userInfo, userPosts } = response.data;
        
        const qtdPosts = userPosts.length;

        setUser({ ...userInfo[0], qtdPosts });
        setPosts(userPosts)
      } else {
        setUserProfileError({
          code:500,
          title:"Houve um erro ao carregar os seus dados",
          message:"Parece que seus dados não foram carregados corretamente, por favor tente novamente!"
        });
      }
    } catch (err: any) {
      console.error(err.message)
      return
      
    } finally {
      setIsLoadingProfile(false);
    }
  };
  const handleOnDeletePost = async (id: string) => {
    setIsLoadingProfile(true)
    
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
    setIsLoadingProfile(false)
  };

  useEffect(() => {
    if(!token){
      setUserProfileError(
        {
        code:401,
        message:"Parece que você não tem permissão para acessar esta área, faça login para continuar",
        title:"Não autorizado!"
      }
    )
      return
    }
  
    fetchUserProfileData();
  }, [id]);

  return { handleOnDeletePost, user, userProfileError, posts , isLoadingProfile};
};