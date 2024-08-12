import { apiRoute } from "@/services/api";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { AiOutlineLoading } from "react-icons/ai";
import { toast } from "sonner";
import PostInput from "../Post/form/post-input";

import Button from "../Layout/Button/Button";
import PostTextArea from "../Layout/Input/PostTextArea";
import ConfirmButton from "../Layout/Button/ConfirmButton";

type editPostProps = {
  id: string;
};

const EditPostForm = ({ id }: editPostProps) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const getPost = async () => {
    const response = await apiRoute.get(`/posts/${id}`);
    return response.data[0];
  };

  const { control, register, handleSubmit } = useForm({
    defaultValues: async () => {
      const response = getPost();
      setIsLoading(false);
      return response;
    },
  });

  const onSubmit = async (postData: FieldValues) => {
    setIsLoading(true);
    const response = await apiRoute.put(`/post/${id}`, postData);

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
    <form
      className="w-full h-auto flex flex-col items-end gap-5 lg:w-[60%] lg:justify-center lg:ml-44"
      onSubmit={handleSubmit(onSubmit)}
    >
      <PostInput label="Título" {...register("title")} />
      {/* <PostTextArea label="Conteúdo" {...register("content")} /> */}
      <PostTextArea control={control} label="Conteúdo" name="content" />
      <div className="w-full h-auto  flex gap-4 justify-end py-2">
        <ConfirmButton customClassName="max-w-[200px]">Confirmar</ConfirmButton>
        <Button
          label="cancelar"
          variant="secondary"
          onclick={() => router.push("/UserProfile")}
        />
      </div>
    </form>
  );
};

export default EditPostForm;
