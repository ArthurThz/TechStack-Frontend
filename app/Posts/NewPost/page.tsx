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
const NewPost = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const { register, handleSubmit } = useForm();

  const onSubmit = async (postData: FieldValues) => {
    setIsLoading(true);
    console.log(postData);

    setIsLoading(false);
    toast.success("Publicação Criada!");
  };

  if (isLoading)
    return (
      <div className="h-screen w-full flex items-center justify-center">
        <AiOutlineLoading
          size={40}
          className=" text-green-haze-500 animate-spin"
        />
      </div>
    );

  return (
    <div className="w-full h-screen  flex flex-col items-center p-10 bg-zinc-900 gap-4">
      <h1 className="text-green-haze-500 text-2xl font-medium">
        Nova Publicação
      </h1>
      <form
        className="w-full h-auto flex flex-col items-center gap-5 lg:w-[60%] lg:justify-center"
        onSubmit={handleSubmit(onSubmit)}
      >
        <PostInput label="Título" {...register("title")} />
        <PostTextArea label="Conteúdo" {...register("content")} />
        <div className="w-full h-auto  flex gap-4 justify-end py-2">
          <Button label="confirmar" variant="primary" type="submit" />
          <Button
            label="cancelar"
            variant="secondary"
            onclick={() => router.push("/NewPost")}
          />
        </div>
      </form>
    </div>
  );
};

export default NewPost;
