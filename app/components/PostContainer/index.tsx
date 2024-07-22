"use client";
import { IPostContainer } from "./types";
import PostItem from "../PostItem";

const PostsContainer = ({
  posts,
  showOptions = false,
  onNoteDeleted,
}: IPostContainer) => {
  return (
    <div className="w-full h-full mt-4 mb-16 flex flex-col items-center gap-4 px-2 md:px-6 py-10 overflow-y-auto bg-zinc-900 ">
      {posts.map((post) => (
        <PostItem
          post={post}
          key={post.id}
          showOptions={showOptions}
          onNoteDeleted={() => (onNoteDeleted ? onNoteDeleted(post.id) : null)}
        />
      ))}
    </div>
  );
};

export default PostsContainer;
