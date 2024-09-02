import { useEffect, useState } from "react";
import { UserProps } from "../types/user";
import { apiRoute } from "@/services/api";

export const useUserProfileHeader = ({ id }: { id: string }) => {
  const [user, setUser] = useState<UserProps | null>(null);

  const [isLoadingProfileHeader, setIsLoadingProfileHeader] = useState(false);

  const [error, setError] = useState<string | null>(null);

  const fetchUserProfileHeaderData = async () => {

    try {
      setIsLoadingProfileHeader(true);
      setError(null);
      
      const response = await apiRoute.get(`/user/profile/${id}`);
      
      if (response.data) {
        const { userInfo, userPosts } = response.data;
        
        const qtdPosts = userPosts.length;

        setUser({ ...userInfo[0], qtdPosts });
      } else {
        throw new Error("Dados inválidos da API.");
      }
    } catch (err: any) {
      setError(err.message || "Ocorreu um erro ao carregar os dados do perfil.");
      
    } finally {
      setIsLoadingProfileHeader(false);
    }
  };

  useEffect(() => {
    fetchUserProfileHeaderData();
  }, [id]);

  return { isLoadingProfileHeader, user, error };
};