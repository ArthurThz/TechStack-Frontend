"use client";
import React from "react";
import FeedPostContainer from "../components/Post/Feed/FeedPostContainer";
import { usePosts } from "../hooks/useFeedPosts";
import Loader from "../components/Layout/Loader";
import Error from "../components/Error/Error";
const Feed = () => {
  const { posts, error, isLoadingFeed } = usePosts();

  if (error) return <Error errorMessage={error} />;

  if (isLoadingFeed) return <Loader />;
  return (
    <div className="w-full flex flex-col items-center bg-zinc-900">
      {posts && <FeedPostContainer posts={posts} />}
    </div>
  );
};

export default Feed;
