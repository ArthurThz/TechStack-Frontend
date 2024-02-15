"use client";
import React, { useState } from "react";
import Posts from "../components/pages/MyPosts/Posts/post-item";
import { apiRoute } from "@/services/api";
import { useEffect } from "react";
import { useAppSelector } from "@/redux/store";
import PostsWrapper from "../components/pages/MyPosts/Posts/post-item";
import PostItem from "../components/pages/MyPosts/Posts/post-item";
import { PostProps } from "../components/types/posts";
const MyPosts = () => {
  const { id } = useAppSelector((state) => state.authReducer.value);
  const [userPosts, setUserPosts] = useState([]);

  let posts = userPosts;

  useEffect(() => {
    handleUserPosts(id);
  }, [id]);

  const handleUserPosts = async (id: string) => {
    try {
      const response = await apiRoute.get(`/posts/user/${id}`);

      const { data } = response;

      setUserPosts(data);
    } catch (err) {
      console.error(err);
    }
  };

  const onPostDeleted = async (id: string) => {
    const deletedPosts = userPosts.filter((post: PostProps) => {
      return post.id !== id;
    });

    const response = await apiRoute.delete(`/post/${id}`);

    if (response.status !== 204) {
      alert("Não foi possivel excluir o post!");
      return;
    }

    setUserPosts(deletedPosts);
  };
  return (
    <div className="w-full h-screen bg-woodsmoke-950 flex flex-col items-center py-5">
      <h1 className=" p-4 font-bold text-3xl text-green-haze-500">My posts</h1>
      {/* Posts */}
      <div className="h-full w-full overflow-y-auto flex flex-col items-center gap-5">
        {posts.map((post: PostProps) => {
          return (
            <div key={post.id}>
              <PostItem post={post} onPostDelete={onPostDeleted} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MyPosts;
