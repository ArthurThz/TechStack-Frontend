import React from "react";
import { FaTrash } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import { PostProps } from "../../types/posts";

const PostItem = ({
  content,
  id,
  creatorname,
  creatorid,
  title,
  date,
}: PostProps) => {
  return (
    <div className="w-full h-auto px-4 py-6 flex flex-col gap-5 items-center border border-green-haze-500 rounded-md">
      <h1 className="text-green-haze-500 font-medium text-2xl">{title}</h1>
      <div className="h-[1px] w-[80%] border border-zinc-400/10" />
      <div className="w-full h-full  px-4 text-white text-md font-light text-justify ">
        {content}
      </div>

      <div className="h-[1px] w-full border mt-4 border-zinc-400/10" />
      <div className="flex flex-row justify-between items-center w-full  px-4">
        <span className="text-lg text-green-haze-500 font-medium">{date}</span>
        <div className="w-full h-auto p-4 flex flex-row gap-4 items-center justify-end text-green-haze-500 ">
          <FaTrash className="hover:scale-125 hover:cursor-pointer transition-all hover:text-red-600" />
          <FaPencil className="hover:scale-125 transition-all hover:cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default PostItem;
