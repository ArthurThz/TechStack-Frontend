import { apiRoute } from "@/services/api";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { toast } from "sonner";
import Loader from "../Layout/Loader";
import PostInput from "../Layout/Input/PostInput";
import PostTextArea from "../Layout/Input/PostTextArea";
import ConfirmButton from "../Layout/Button/ConfirmButton";
import Button from "../Layout/Button/Button";
import { useAppSelector } from "@/redux/store";

const NewPostForm = () => {
  const { id } = useAppSelector((state) => state.authReducer.value);

  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const { control, handleSubmit } = useForm();

  const onSubmit = async (postData: FieldValues) => {
    setIsLoading(true);
    const newPost = {
      ...postData,
      id,
    };
    const response = await apiRoute.post(`/post`, newPost);
    const { status, data } = response;
    setIsLoading(false);
    if (status !== 201) {
      toast.error("Algo deu errado, tente novamente");
      console.log(status);
      console.log(data);
      return;
    }
    toast.success("Publicação criada com sucesso!");
  };

  if (isLoading) return <Loader />;

  return (
    <form
      className="w-full h-auto flex flex-col items-end gap-5 lg:w-[60%] lg:justify-center lg:ml-44"
      onSubmit={handleSubmit(onSubmit)}
    >
      <PostInput control={control} label="Titulo" name="title" />
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

export default NewPostForm;
