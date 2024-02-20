"use client";

import React, { useState } from "react";

import { useEffect } from "react";
import { apiRoute } from "@/services/api";

import Image from "next/image";
import Link from "next/link";
import PostItem from "../components/pages/Profile/post-item";
import { useAppSelector } from "@/redux/store";
import { PostProps } from "../components/types/posts";
import PostContainer from "../components/pages/Profile/post-container";
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

  const { id } = useAppSelector((state) => state.authReducer.value);

  useEffect(() => {
    getUserProfile(id);
  }, [id]);

  const getUserProfile = async (id: string) => {
    const response = await apiRoute.get(`/user/profile/${id}`);

    const { userInfo, userPosts } = response.data;

    const qtdPosts = userPosts.length;

    setUser({ ...userInfo[0], qtdPosts });
    setPosts(userPosts);

    setIsLoading(false);
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
        <div className="flex flex-col w-full gap-10 items-center">
          <UserHeader user={user} />

          <PostContainer posts={posts} />
        </div>
      )}
    </div>
  );
};

export default UserProfile;
