"use client";
import Button from "@/app/components/Layout/Button/Button";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { apiRoute } from "@/services/api";
import type { FieldValues } from "react-hook-form";

import { useState } from "react";
import { AiOutlineLoading } from "react-icons/ai";
import { toast } from "sonner";
import PostInput from "@/app/components/Post/form/post-input";
import PostTextArea from "@/app/components/Post/form/post-textarea";
import EditPostForm from "@/app/components/forms/EditPostForm";
const Post = ({ params }: { params: { postId: string } }) => {
  return (
    <div className="w-full h-screen  flex flex-col items-center p-10 bg-zinc-900 gap-4">
      <h1 className="text-green-haze-500 text-2xl font-medium">
        Editar Publicação
      </h1>
      <EditPostForm id={params.postId} />
    </div>
  );
};

export default Post;
