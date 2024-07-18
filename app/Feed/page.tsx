"use client";
import React from "react";
import { PostProps } from "../types/posts";
import { useState, useEffect } from "react";
import { useAppSelector } from "@/redux/store";
import { apiRoute } from "@/services/api";
import { AiOutlineLoading } from "react-icons/ai";
import PostItem from "../components/Posts/post-item";
import Header from "../components/pages/Home/header";
import Logo from "../components/Layout/Logo/indext";
const Feed = () => {
  const { isAuth } = useAppSelector((state) => state.authReducer.value);

  useEffect(() => {
    if (!isAuth) {
      return;
    }

    fetchPosts();
  }, [isAuth]);
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState<PostProps[]>([]);

  const fetchPosts = async () => {
    const response = await apiRoute.get("/posts/general");

    const { data } = response;
    setPosts(data.reverse());
    setIsLoading(false);
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
    <div className="flex flex-col items-center bg-zinc-900">
      <Logo />

      <div className="w-full h-full mt-4 mb-6 flex flex-col items-center gap-4 px-2 md:px-6 py-10 overflow-y-auto bg-zinc-900">
        {posts.map((post) => {
          return <PostItem post={post} key={post.id} type="feed" />;
        })}
      </div>
    </div>
  );
};

export default Feed;
