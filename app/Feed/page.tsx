"use client";
import React from "react";
import FeedPostContainer from "../components/Post/Feed/FeedPostContainer";
import { usePosts } from "../hooks/usePosts";
import Loader from "../components/Layout/Loader";
const Feed = () => {
  const posts = usePosts();

  if (!posts) {
    return <Loader />;
  }
  return (
    <div className="flex flex-col items-center bg-zinc-900">
      <FeedPostContainer posts={posts} />
    </div>
  );
};

export default Feed;
