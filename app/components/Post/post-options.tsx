"use client";
import { FaPencil, FaTrash } from "react-icons/fa6";
import { PostOptionsProps } from "./types";
import { useRouter } from "next/navigation";

const PostOptions = ({ onNoteDeleted, postId }: PostOptionsProps) => {
  const router = useRouter();

  const redirectToEditPost = () => {
    router.push(`Posts/${postId}`);
  };
  return (
    <div className="w-full h-auto p-4 flex flex-row gap-4 items-center justify-end md:justify-end text-green-haze-500 ">
      <FaTrash
        className="hover:scale-125 hover:cursor-pointer transition-all hover:text-red-600"
        onClick={() => (onNoteDeleted ? onNoteDeleted(postId) : null)}
      />

      <FaPencil
        className="hover:scale-125 transition-all hover:cursor-pointer"
        onClick={() => redirectToEditPost()}
      />
    </div>
  );
};

export default PostOptions;
