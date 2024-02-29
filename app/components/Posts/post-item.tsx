import React from "react";
import { FaTrash } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import { PostProps } from "../../types/posts";
import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";
import type { FieldValues } from "react-hook-form";
import { useForm } from "react-hook-form";
import { apiRoute } from "@/services/api";
import { useRouter } from "next/navigation";

type PostItemProps = {
  post: PostProps;
  type: "user" | "feed";
  onNoteDeleted?: (id: string) => void;
};

const PostItem = ({ post, onNoteDeleted, type }: PostItemProps) => {
  const router = useRouter();
  const {
    register,
    formState: { isSubmitting },
    handleSubmit,
  } = useForm({
    defaultValues: {
      title: post.title,
      content: post.content,
    },
  });

  const onSubmit = async (data: FieldValues) => {
    const response = await apiRoute.put(`/post/${post.id}`, data);

    router.push("/UserProfile");
  };

  return (
    <Dialog.Root>
      <div className="w-full relative h-auto px-4 py-10 flex flex-col gap-5 items-center border border-green-haze-500 rounded-md">
        <div className="w-full items-start px-4 flex md:flex-row gap-8 md:items-center text-green-haze-500 font-medium">
          <Image
            alt="profile pic"
            src="/profile-pic2.jpg"
            width={60}
            height={40}
            unoptimized
            className="rounded-full"
          />
          <div className="flex flex-col gap-2 items-start">
            <p className="text-green-haze-300 text-lg">{post.creatorname}</p>
            <p className="text-green-haze-500/80 text-sm">{post.role}</p>
          </div>
        </div>
        <h1 className="text-green-haze-500 font-medium text-2xl mt-5">
          {post.title}
        </h1>
        <div className="h-[1px] w-[80%] border border-zinc-400/10" />
        <div className="w-full h-full  text-sm md:text-lg px-2 md:px-4 text-white md:text-md font-light text-justify ">
          {post.content}
        </div>

        <div className="h-[1px] w-full border mt-4 border-zinc-400/10" />
        <div className="flex flex-row justify-between items-center w-full px-4">
          <span className="text-green-haze-500 font-medium text-md">
            {post.date}
          </span>
          {type === "user" && (
            <div className="w-auto h-auto p-4 flex flex-row gap-4 items-center justify-start md:justify-end text-green-haze-500 ">
              <FaTrash
                className="hover:scale-125 hover:cursor-pointer transition-all hover:text-red-600"
                onClick={() => (onNoteDeleted ? onNoteDeleted(post.id) : null)}
              />
              <Dialog.Trigger>
                <FaPencil className="hover:scale-125 transition-all hover:cursor-pointer" />
              </Dialog.Trigger>

              <Dialog.Portal>
                <Dialog.Overlay className="z-20 inset-0 fixed bg-black-/90 ring-2 w-full h-full" />
                <Dialog.Content className="z-20 inset-0 md:inset-auto rounded-sm overflow-hidden absolute md:left-1/2 md:top-1/2 md:-translate-x-[19rem] md:-translate-y-1/2 md:max-w-[60%] w-full md:h-[90vh] bg-zinc-900 ring-2 ring-green-haze-500 md:rounded-md flex flex-col outline-none">
                  <h2 className="text-green-haze-500 font-medium text-2xl m-auto py-5">
                    Editar Publicação
                  </h2>

                  <div className="w-full px-4 py-6 h-full flex flex-col items-center justify-center">
                    <form
                      onSubmit={handleSubmit(onSubmit)}
                      className="w-full flex flex-col items-center gap-5"
                    >
                      <input
                        type="text"
                        className="outline-none px-10 md:p-2 py-3 border-b text-zinc-100 border-green-haze-500 bg-transparent w-full"
                        placeholder="Título"
                        {...register("title")}
                      />
                      <textarea
                        className="resize-none h-[300px] w-full  px-10 py-3 md:p-2 bg-transparent outline-none text-zinc-100"
                        placeholder="Seu Texto Aqui ..."
                        contentEditable={true}
                        {...register("content")}
                      />
                      <div className="w-full flex flex-row justify-end items-center gap-5 py-4 px-2">
                        <button
                          type="submit"
                          className="px-4 py-2 bg-green-haze-500 ring-1 ring-green-haze-500 rounded-md"
                        >
                          Confirmar
                        </button>
                        <Dialog.Close>
                          <button className="px-4 py-2 bg-red-500 ring-1 ring-green-haze-500 rounded-md">
                            Cancelar
                          </button>
                        </Dialog.Close>
                      </div>
                    </form>
                  </div>
                </Dialog.Content>
              </Dialog.Portal>
            </div>
          )}
        </div>
      </div>
    </Dialog.Root>
  );
};

export default PostItem;
