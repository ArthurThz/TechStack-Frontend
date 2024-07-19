import React, { useEffect } from "react";
import { FaTrash } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import { PostProps } from "../../../types/posts";
import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";
import type { FieldValues } from "react-hook-form";
import { useForm } from "react-hook-form";
import { apiRoute } from "@/services/api";
import { useRouter } from "next/navigation";
import { PostItemProps } from "./types";

const PostItem = ({ post, onNoteDeleted, type }: PostItemProps) => {
  const router = useRouter();

  const redirectToEditPost = (postId: string) => {
    router.push(`Posts/${postId}`);
  };

  return (
    <div className="w-full relative h-auto px-4 py-10 flex flex-col gap-5 items-center border border-green-haze-500 rounded-md">
      <div className="w-full items-start  px-4 flex md:flex-row gap-8 md:items-center text-green-haze-500 font-medium">
        <div className="w-[70px] iphonexr:w-[80px]">
          <Image
            alt="profile pic"
            src={`${post.profilepic}`}
            width={80}
            height={80}
            unoptimized
            className="rounded-full ring-2 shadow-lg shadow-green-haze-400/30 ring-green-haze-500"
          />
        </div>
        <div className="flex flex-col  items-start">
          <p className="text-green-haze-500 text-xl">{post.creatorname}</p>
          <p className="text-white text-sm font-thin">{post.role}</p>
        </div>
      </div>
      <h1 className="text-green-haze-400 font-medium text-xl iphonexr:text-2xl mt-5">
        {post.title}
      </h1>
      <div className="h-auto py-5  w-full border border-x-transparent border-y-zinc-400/10">
        <div className="w-full h-full text-xs iphonexr:text-sm md:text-lg px-1 md:px-4 text-white md:text-md font-light text-justify ">
          {post.content}
        </div>
      </div>
      <div className="flex flex-row justify-between items-center w-full px-4">
        <span className="text-green-haze-500 font-medium text-xs iphonexr:text-sm">
          {post.date}
        </span>
        {type === "user" && (
          <div className="w-auto h-auto p-4 flex flex-row gap-4 items-center justify-start md:justify-end text-green-haze-500 ">
            <FaTrash
              className="hover:scale-125 hover:cursor-pointer transition-all hover:text-red-600"
              onClick={() => (onNoteDeleted ? onNoteDeleted(post.id) : null)}
            />

            <FaPencil
              className="hover:scale-125 transition-all hover:cursor-pointer"
              onClick={() => redirectToEditPost(post.id)}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default PostItem;
