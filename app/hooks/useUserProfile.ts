import { useEffect, useState } from "react";
import { UserProps } from "../types/user";
import { apiRoute } from "@/services/api";
import { PostProps } from "../types/posts";
import { toast } from "sonner";

export const useUserProfileHeader = ({ id }: { id: string }) => {
  const [user, setUser] = useState<UserProps | null>(null);
  const [posts, setPosts] = useState<PostProps[]>([])

  const [isLoadingProfile, setIsLoadingProfile] = useState(false);

  const [userProfileError, setUserProfileError] = useState<string | null>(null);

  const fetchUserProfileData = async () => {

    try {
      setIsLoadingProfile(true);
      setUserProfileError(null);
      
      const response = await apiRoute.get(`/user/profile/${id}`);
      
      if (response.data) {
        const { userInfo, userPosts } = response.data;
        
        const qtdPosts = userPosts.length;

        setUser({ ...userInfo[0], qtdPosts });
        setPosts(userPosts)
      } else {
        throw new Error("Dados inválidos da API.");
      }
    } catch (err: any) {
      setUserProfileError(err.message );
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
    fetchUserProfileData();
  }, [id]);

  return { handleOnDeletePost, user, userProfileError, posts , isLoadingProfile};
};