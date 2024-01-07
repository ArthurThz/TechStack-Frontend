import React from "react";
import { IPosts } from "./types";

const MyPosts = ({ posts }: IPosts) => {
  return (
    <div className="w-full h-screen py-8 px-4 flex flex-col items-center gap-5 ">
      <h1 className="text-3xl font-bold text-green-haze-500 ">My Posts</h1>
      {/* Posts Container */}
      <div className="h-full w-full flex flex-col overflow-y-auto"></div>
    </div>
  );
};

export default MyPosts;
