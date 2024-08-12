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
const Post = ({ params }: { params: { postId: string } }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  const getPost = async () => {
    const response = await apiRoute.get(`/posts/${params.postId}`);
    return response.data[0];
  };

  const { register, handleSubmit } = useForm({
    defaultValues: async () => {
      const response = getPost();
      setIsLoading(false);
      return response;
    },
  });

  const onSubmit = async (postData: FieldValues) => {
    setIsLoading(true);
    const response = await apiRoute.put(`/post/${params.postId}`, postData);

    const { status, data } = response;

    setIsLoading(false);

    if (status !== 200) {
      toast.error("Algo deu errado, tente novamente");
      console.log(status);
      console.log(data);
      return;
    }

    toast.success("Informações atualizadas com sucesso!");
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
        Editar Publicação
      </h1>
      <form
        className="w-full h-auto flex flex-col items-center gap-5 lg:w-[60%] lg:justify-center lg:ml-44"
        onSubmit={handleSubmit(onSubmit)}
      >
        <PostInput label="Título" {...register("title")} />
        <PostTextArea label="Conteúdo" {...register("content")} />
        <div className="w-full h-auto  flex gap-4 justify-end py-2">
          <Button label="confirmar" variant="primary" type="submit" />
          <Button
            label="cancelar"
            variant="secondary"
            onclick={() => router.push("/UserProfile")}
          />
        </div>
      </form>
    </div>
  );
};

export default Post;
