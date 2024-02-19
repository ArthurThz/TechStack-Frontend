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

  const handleTeste = () => console.log(posts);
  return (
    <div className="w-full h-full flex flex-col items-center px-6 py-10 overflow-y-auto bg-woodsmoke-950">
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
        <>
          {/* HEADERS */}
          <div className="w-full flex flex-row h-auto  items-center justify-center gap-12 py-5 px-4">
            <div className="rounded-full flex items-center justify-center w-44 h-44 bg-green-haze-500 ring-2 ring-green-haze-500">
              <Image
                className="w-full h-full rounded-full object-cover"
                alt="profile pic"
                width={30}
                height={30}
                src="/profile-pic2.jpg"
                unoptimized
              />
            </div>
            <div className="flex flex-row w-auto h-full px-2 justify-center">
              <div className="w-auto flex flex-col items-center gap-4 text-white">
                {user && (
                  <>
                    <h1 className="font-medium text-2xl ">{`${user.nome} ${user.sobrenome}`}</h1>
                    <span>{user.profissao}</span>
                    <span>{`${user.qtdPosts} Posts`}</span>
                  </>
                )}

                <Link
                  className="border border-green-haze-500 px-4 py-2 rounded-md hover:bg-green-haze-500 transition-all"
                  href="/"
                >
                  Editar Perfil
                </Link>
                <button onClick={handleTeste}>teste</button>
              </div>
            </div>
          </div>
          {/* POSTS */}
          <div className="w-full h-full flex flex-col gap-4 px-6 py-10">
            <PostContainer posts={posts} />
          </div>
        </>
      )}
    </div>
  );
};

export default UserProfile;
