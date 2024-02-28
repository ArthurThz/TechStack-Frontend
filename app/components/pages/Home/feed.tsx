"use client";
import React from "react";
import { PostProps } from "../../../types/posts";

import { useState, useEffect } from "react";
import { useAppSelector } from "@/redux/store";
import { apiRoute } from "@/services/api";
import { AiOutlineLoading } from "react-icons/ai";
import PostItem from "../../Posts/post-item";

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
    setPosts(data);
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
          {posts.map((post) => {
            return <PostItem post={post} key={post.id} type="feed" />;
          })}
        </div>
      )}
    </div>
  );
};

export default Feed;
