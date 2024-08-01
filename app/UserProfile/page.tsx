"use client";

import React, { useState } from "react";

import { useEffect } from "react";
import { apiRoute } from "@/services/api";

import PostItem from "../components/PostItem";
import { useAppSelector } from "@/redux/store";
import { PostProps } from "../types/posts";
import { AiOutlineLoading } from "react-icons/ai";
import UserHeader from "../components/pages/Profile/user-header";
import EmptyPosts from "../components/pages/Profile/empty-posts";
import { toast } from "sonner";
import PostsContainer from "../components/PostContainer";
import Logo from "../components/Layout/Logo";

type UserProps = {
  nome: string;
  qtdPosts: string;
  profissao: string;
  profilepic: string;
};

const UserProfile = () => {
  // states

  const [user, setUser] = useState<UserProps>({
    nome: "",
    qtdPosts: "",
    profissao: "",
    profilepic: "",
  });
  const [posts, setPosts] = useState<PostProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const { id, isAuth } = useAppSelector((state) => state.authReducer.value);

  useEffect(() => {
    if (!isAuth) {
      return;
    }
    getUserProfile(id);
  }, [id, isAuth]);

  const getUserProfile = async (id: string) => {
    const response = await apiRoute.get(`/user/profile/${id}`);

    const { userInfo, userPosts } = response.data;

    const qtdPosts = userPosts.length;

    setUser({ ...userInfo[0], qtdPosts });
    setPosts(userPosts);

    setIsLoading(false);
  };

  const handleOnDeletePost = async (id: string) => {
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
  };

  if (isLoading) {
    return (
      <>
        <div className="h-screen w-full flex items-center justify-center">
          <AiOutlineLoading
            size={40}
            className=" text-green-haze-500 animate-spin"
          />
        </div>
      </>
    );
  }
  return (
    <div className="w-full h-full flex flex-col items-center px-2 md:px-6 py-10 overflow-y-auto bg-zinc-900">
      <div className="flex flex-col w-full gap-10 items-center py-10 oveflow-y-auto">
        <UserHeader user={user} />

        {posts.length > 0 ? (
          <PostsContainer
            posts={posts}
            showOptions
            onNoteDeleted={handleOnDeletePost}
          />
        ) : (
          <EmptyPosts />
        )}
      </div>
    </div>
  );
};

export default UserProfile;
