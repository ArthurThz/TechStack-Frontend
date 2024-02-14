"use client";
import React from "react";
import Posts from "../components/pages/MyPosts/Posts/Posts";
import { apiRoute } from "@/services/api";
import { useEffect } from "react";
import { useAppSelector } from "@/redux/store";
const MyPosts = () => {
  const { id } = useAppSelector((state) => state.authReducer.value);

  useEffect(() => {
    handleUserPosts(id);
    console.log(id);
  }, [id]);

  const handleUserPosts = async (id: string) => {
    const response = await apiRoute.get(`/posts/user/${id}`);

    console.log(response);
  };
  return (
    <div className="w-full h-screen bg-woodsmoke-950 flex flex-col items-center py-5">
      <h1 className=" p-4 font-bold text-3xl text-green-haze-500">My posts</h1>
      {/* Posts */}
      <div className="h-full w-full overflow-y-auto flex flex-col items-center gap-5">
        <Posts />
      </div>
    </div>
  );
};

export default MyPosts;
