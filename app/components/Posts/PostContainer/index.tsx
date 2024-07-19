import { ReactNode } from "react";
import { IPostContainer } from "./types";
import PostItem from "../PostItem";

const PostsContainer = ({ posts, type }: IPostContainer) => {
  return (
    <div className="w-full h-full mt-4 mb-16 flex flex-col items-center gap-4 px-2 md:px-6 py-10 overflow-y-auto bg-zinc-900 ">
      {posts.map((post) => (
        <PostItem post={post} key={post.id} type={type} />
      ))}
    </div>
  );
};

export default PostsContainer;
