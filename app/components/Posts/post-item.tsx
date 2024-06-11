import React, { useEffect } from "react";
import { FaTrash } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import { PostProps } from "../../types/posts";
import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";
import type { FieldValues } from "react-hook-form";
import { useForm } from "react-hook-form";
import { apiRoute } from "@/services/api";
import { useRouter } from "next/navigation";
type PostItemProps = {
  post: PostProps;
  type: "user" | "feed";
  onNoteDeleted?: (id: string) => void;
};

const PostItem = ({ post, onNoteDeleted, type }: PostItemProps) => {
  const router = useRouter();

  const redirectToEditPost = (postId: string) => {};

  return (
    <div className="w-full relative h-auto px-4 py-10 flex flex-col gap-5 items-center border border-green-haze-500 rounded-md">
      <div className="w-full items-start px-4 flex md:flex-row gap-8 md:items-center text-green-haze-500 font-medium">
        <Image
          alt="profile pic"
          src={`${post.profilepic}`}
          width={60}
          height={40}
          unoptimized
          className="rounded-full ring-2 ring-green-haze-500"
        />
        <div className="flex flex-col gap-2 items-start">
          <p className="text-green-haze-300 text-lg">{post.creatorname}</p>
          <p className="text-green-haze-500/80 text-sm">{post.role}</p>
        </div>
      </div>
      <h1 className="text-green-haze-500 font-medium text-2xl mt-5">
        {post.title}
      </h1>
      <div className="h-[1px] w-[80%] border border-zinc-400/10" />
      <div className="w-full h-full  text-sm md:text-lg px-2 md:px-4 text-white md:text-md font-light text-justify ">
        {post.content}
      </div>

      <div className="h-[1px] w-full border mt-4 border-zinc-400/10" />
      <div className="flex flex-row justify-between items-center w-full px-4">
        <span className="text-green-haze-500 font-medium text-md">
          {post.date}
        </span>
        {type === "user" && (
          <div className="w-auto h-auto p-4 flex flex-row gap-4 items-center justify-start md:justify-end text-green-haze-500 ">
            <FaTrash
              className="hover:scale-125 hover:cursor-pointer transition-all hover:text-red-600"
              onClick={() => (onNoteDeleted ? onNoteDeleted(post.id) : null)}
            />

            <FaPencil className="hover:scale-125 transition-all hover:cursor-pointer" />
          </div>
        )}
      </div>
    </div>
  );
};

export default PostItem;
