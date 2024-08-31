"use client";
import Button from "@/app/components/Layout/Button/Button";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { apiRoute } from "@/services/api";
import type { FieldValues } from "react-hook-form";

import { useState } from "react";
import { toast } from "sonner";
import PostTextArea from "@/app/components/Layout/Input/PostTextArea";
import PostInput from "@/app/components/Layout/Input/LabeledInput";
import Loader from "@/app/components/Layout/Loader";
import NewPostForm from "@/app/components/forms/NewPostForm";

const NewPost = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const { control, handleSubmit } = useForm();

  const onSubmit = async (postData: FieldValues) => {
    setIsLoading(true);
    console.log(postData);

    setIsLoading(false);
    toast.success("Publicação Criada!");
  };

  if (isLoading) return <Loader />;

  return (
    <div className="w-full h-screen  flex flex-col items-center p-10 bg-zinc-900 gap-4">
      <h1 className="text-green-haze-500 text-2xl font-medium">
        Nova Publicação
      </h1>
      <NewPostForm />
    </div>
  );
};

export default NewPost;
