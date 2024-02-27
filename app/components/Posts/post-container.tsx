import PostItem from "./post-item";
import { PostProps } from "../../types/posts";
import EmptyPosts from "../pages/Profile/empty-posts";
import { useState } from "react";

type IPostProps = {
  posts: PostProps[];
  type: "feed" | "user";
};

const PostContainer = ({ posts, type }: IPostProps) => {
  const handleOnDeletePost = (id: string) => {
    posts.filter((item) => {
      return item.id !== id;
    });
  };
  return (
    <div className="w-full h-auto flex  flex-col py-5 md:px-6 gap-4 items-center rounded-md transition-all">
      {posts.map((post: PostProps) => {
        const { content, creatorid, creatorname, date, id, title, role } = post;

        return (
          <PostItem
            creatorid={creatorid}
            creatorname={creatorname}
            id={id}
            content={content}
            title={title}
            date={date}
            key={id}
            type={type}
            role={role}
          />
        );
      })}
    </div>
  );
};

export default PostContainer;
