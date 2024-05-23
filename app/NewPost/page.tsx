"use client";
import Image from "next/image";
import * as Dialog from "@radix-ui/react-dialog";
import { FiPlusCircle } from "react-icons/fi";
import { useForm } from "react-hook-form";
import type { FieldValues } from "react-hook-form";
import { apiRoute } from "@/services/api";
import { useAppSelector } from "@/redux/store";
import { toast } from "sonner";

const NewPost = () => {
  const { id } = useAppSelector((state) => state.authReducer.value);
  const {
    register,
    formState: { isSubmitting },
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = async (data: FieldValues) => {
    const newPost = {
      ...data,
      id,
    };

    const response = await apiRoute.post("/post", newPost);

    if (response.status !== 201) {
      toast.error("Algo deu errado, tente novamente!", {
        position: "bottom-left",
      });
      return;
    }

    toast.success("Publicação criada!", {
      position: "bottom-left",
    });
    reset();
  };
  return (
    <Dialog.Root>
      <div className="h-full w-full flex flex-col gap-10 items-center p-20 bg-zinc-900 relative">
        <h1 className="text-3xl md:text-4xl text-white font-sans font-medium tracking-wide">
          Criar novo post
        </h1>
        <div className="w-full gap-10 flex flex-col items-center">
          <div className="items-center gap-3 justify-center text-center flex flex-col md:flex-row w-full group">
            <Image alt="pilot icon" width={80} height={80} src="/pilot.svg" />
            <h2 className="text-xl text-green-haze-500  group-hover:text-green-haze-200 font-medium font-sans">
              Seja você o piloto da sua aventura no mundo da tecnologia!
            </h2>
          </div>

          <div className="items-center gap-3 justify-center flex flex-col md:flex-row w-full group">
            <Image alt="pilot icon" width={80} height={80} src="/rocket.svg" />
            <h2 className="text-xl text-green-haze-500 text-center group-hover:text-green-haze-200 font-medium font-sans">
              Crie publicações para alcançar o máximo de pessoas e contribuir
              para o crescimento da nossa comunidade!
            </h2>
          </div>
        </div>
        <Dialog.Trigger className="bg-green-haze-700 w-auto flex flex-row gap-5 items-center py-4 px-5 rounded-md transition-all text-white hover:bg-green-haze-900">
          <FiPlusCircle size={20} />
          Novo Post
        </Dialog.Trigger>
      </div>

      <Dialog.Portal>
        <Dialog.Overlay className="z-20 inset-0 fixed bg-black-/90 ring-2 w-full h-full" />
        <Dialog.Content className="z-20 inset-0 md:inset-auto rounded-sm overflow-hidden absolute md:left-1/2 md:top-1/2 md:-translate-x-[19rem] md:-translate-y-1/2 md:max-w-[60%] w-full md:h-[90vh] bg-zinc-900 ring-2 ring-green-haze-500 md:rounded-md flex flex-col outline-none">
          <h2 className="text-green-haze-500 font-medium text-2xl m-auto py-2">
            Nova Publicação
          </h2>
          <Dialog.Close className="absolute rounded-sm outline-none right-0 top-0  text-green-haze-500 font-bold px-6 py-4">
            X
          </Dialog.Close>

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
                {...register("content")}
              />
              <button
                type="submit"
                className="bottom-0 text-white bg-green-haze-500 w-full py-4 absolute hover:text-green-haze-900 transition-all text-lg hover:bg-green-haze-400 font-medium disabled:bg-woodsmoke-900"
                disabled={isSubmitting}
              >
                Publicar
              </button>
            </form>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default NewPost;
