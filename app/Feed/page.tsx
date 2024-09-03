"use client";
import React from "react";
import FeedPostContainer from "../components/Post/Feed/FeedPostContainer";
import { usePosts } from "../hooks/useFeedPosts";
import Loader from "../components/Layout/Loader";
import Error from "../components/Error/Error";
const Feed = () => {
  const { posts, error } = usePosts();

  if (!posts) {
    return <Loader />;
  }

  if (error) return <Error errorMessage={error} />;
  return (
    <div className="w-full flex flex-col items-center bg-zinc-900">
      <FeedPostContainer posts={posts} />
    </div>
  );
};

export default Feed;
