import React, { useEffect } from "react";

import { useRouter } from "next/navigation";
import { PostItemProps } from "./types";
import PostHeader from "../Post/header";
import PostBody from "../Post/body";
import PostOptions from "../Post/post-options";

const PostItem = ({
  post,
  onNoteDeleted,
  showOptions = false,
}: PostItemProps) => {
  const router = useRouter();

  return (
    <div className="w-full relative h-auto px-4 py-10 flex flex-col gap-5 items-center border border-green-haze-500 rounded-md">
      <PostHeader
        imgPath={post.profilepic}
        name={post.creatorname}
        role={post.role}
      />
      <PostBody content={post.content} date={post.date} title={post.title}>
        {showOptions && (
          <PostOptions
            onNoteDeleted={() =>
              onNoteDeleted ? onNoteDeleted(post.id) : null
            }
            postId={post.id}
          />
        )}
      </PostBody>
    </div>
  );
};

export default PostItem;
