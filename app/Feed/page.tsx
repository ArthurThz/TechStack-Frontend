"use client";
import React, { useEffect } from "react";
import FeedPostContainer from "../components/Post/Feed/FeedPostContainer";
import { usePosts } from "../hooks/useFeedPosts";
import Loader from "../components/Layout/Loader";
import Error from "../components/Error/Error";
import { useAppSelector } from "@/redux/store";
const Feed = () => {
  const { token } = useAppSelector((state) => state.authReducer.value);
  const { posts, error, isLoadingFeed } = usePosts({ token });

  if (error)
    return (
      <Error code={error.code} title={error.title} message={error.message} />
    );

  if (isLoadingFeed) return <Loader />;
  return (
    <div className="w-full flex flex-col items-center bg-zinc-900">
      {posts && <FeedPostContainer posts={posts} />}
    </div>
  );
};

export default Feed;
