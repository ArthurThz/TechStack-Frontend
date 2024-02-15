import { PostsParamsProps } from "@/app/components/types/posts";
import Image from "next/image";
import React from "react";

type PostProps = {
  post: {
    id: string;
    creatorid: string;
    creatorname: string;
    title: string;
    content: string;
    date: string;
  };

  onPostDelete: (id: string) => void;
};

const PostItem = ({ post, onPostDelete }: PostProps) => {
  const { content, creatorid, creatorname, date, id, title } = post;
  return (
    <div className="flex flex-col items-center w-full h-auto p-20 gap-8">
      <div>
        {/* Posts */}
        <div className="w-full h-auto p-6 flex gap-5 flex-col items-center text-white border border-green-haze-500 rounded-xl">
          <h1 className="text-2xl">{title}</h1>
          <p>{content}</p>
        </div>
        {/* User info  / Post option Container*/}
        <div className="w-full flex flex-row items-center justify-between">
          {/* User Info */}
          <div className="w-auto flex flex-row items-center gap-5">
            <div className="w-12 h-12 rounded-full bg-green-haze-500"></div>
            <p className="text-white">
              {creatorname} - {date}
            </p>
          </div>
          {/* Options */}
          <div className="flex flex-row items-center gap-3">
            <button className="transition-all ease-out delay-100 hover:scale-125">
              <Image
                src="/pencil.svg"
                alt="trash icon"
                width={20}
                height={20}
              />
            </button>
            <button
              onClick={() => {
                onPostDelete(id);
              }}
              className="transition-all ease-out delay-100 hover:scale-125"
            >
              <Image src="/trash.svg" alt="trash icon" width={20} height={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
