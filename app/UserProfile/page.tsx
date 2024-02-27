"use client";

import React, { useState } from "react";

import { useEffect } from "react";
import { apiRoute } from "@/services/api";

import Image from "next/image";
import Link from "next/link";
import PostItem from "../components/Posts/post-item";
import { useAppSelector } from "@/redux/store";
import { PostProps } from "../types/posts";
import PostContainer from "../components/Posts/post-container";
import { AiOutlineLoading } from "react-icons/ai";
import UserHeader from "../components/pages/Profile/user-header";
import EmptyPosts from "../components/pages/Profile/empty-posts";

type UserProps = {
  nome: string;
  sobrenome: string;
  profissao: string;
  qtdPosts: string;
};

const UserProfile = () => {
  // states

  const [user, setUser] = useState<UserProps>({
    nome: "",
    sobrenome: "",
    profissao: "",
    qtdPosts: "",
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

    console.log(userPosts);
    setUser({ ...userInfo[0], qtdPosts });
    setPosts(userPosts.reverse());

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

    setPosts(postsArray);
  };
  return (
    <div className="w-full h-full flex flex-col items-center px-2 md:px-6 py-10 overflow-y-auto bg-woodsmoke-950">
      {isLoading ? (
        <>
          <div className="h-screen w-full flex items-center justify-center">
            <AiOutlineLoading
              size={40}
              className=" text-green-haze-500 animate-spin"
            />
          </div>
        </>
      ) : (
        <div className="flex flex-col w-full gap-10 items-center py-10 oveflow-y-auto">
          <UserHeader user={user} />

          {posts.length > 0 ? (
            posts.map((post) => {
              return (
                <PostItem
                  key={post.id}
                  post={post}
                  type="user"
                  onNoteDeleted={handleOnDeletePost}
                />
              );
            })
          ) : (
            <EmptyPosts />
          )}
        </div>
      )}
    </div>
  );
};

export default UserProfile;
