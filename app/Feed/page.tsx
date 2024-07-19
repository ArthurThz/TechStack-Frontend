"use client";
import React from "react";
import { PostProps } from "../types/posts";
import { useState, useEffect } from "react";
import { useAppSelector } from "@/redux/store";
import { apiRoute } from "@/services/api";
import { AiOutlineLoading } from "react-icons/ai";
import PostItem from "../components/Posts/PostItem";
import Logo from "../components/Layout/Logo/indext";
import PostsContainer from "../components/Posts/PostContainer";
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
      <PostsContainer posts={posts} type="feed" />
    </div>
  );
};

export default Feed;
