"use client";
import { useEffect, useState } from "react";

import { useForm } from "react-hook-form";
import { useAppSelector } from "@/redux/store";
import { apiRoute } from "@/services/api";
import { IEditUser } from "../types/user";
import { AiOutlineLoading } from "react-icons/ai";
import Link from "next/link";
import type { FieldValues } from "react-hook-form";
import { toast } from "sonner";
import EditProfileForm from "../components/forms/EditProfileForm";

const EditProfile = () => {
  const { id, isAuth } = useAppSelector((state) => state.authReducer.value);
  const [userData, setUserData] = useState<IEditUser>();
  const [isLoading, setIsLoading] = useState(true);

  const getUserData = async (id: string) => {
    const response = await apiRoute.get(`/user/${id}`);
    return response.data[0];
  };
  const {
    register,
    handleSubmit,

    formState: { isSubmitting, errors },
  } = useForm({
    defaultValues: async () => {
      const response = getUserData(id);
      setIsLoading(false);

      return response;
    },
  });

  const onSubmit = async (userdata: FieldValues) => {
    setIsLoading(true);
    const response = await apiRoute.put(`user/${id}`, userdata);

    setIsLoading(false);

    const { status, data } = response;

    if (status !== 200) {
      toast.error("Algo deu errado, tente novamente");
      console.log(status);
      console.log(data);
      return;
    }

    toast.success("Informações atualizadas com sucesso!");
  };

  return (
    <div className="bg-zinc-900 w-full py-10 px-5 h-screen flex flex-col items-center">
      <EditProfileForm id={id} />
      {/* {isLoading ? (
        <>
          <div className="h-screen w-full flex items-center justify-center">
            <AiOutlineLoading
              size={40}
              className=" text-green-haze-500 animate-spin"
            />
          </div>
        </>
      ) : (
        <>
          <h1 className="text-white text-xl font-medium">Editar Informações</h1>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className=" mt-2 w-full md:w-[50%] gap-4 h-auto px-10 py-5 flex flex-col items-center ring-1 ring-green-haze-500 shadow-md shadow-green-haze-400 rounded-md justify-center"
          >
            <div className="flex flex-col font-medium gap-2 w-full">
              <label htmlFor="nome" className="text-lg text-green-haze-500">
                Nome
              </label>
              <input
                type="text"
                className="bg-transparent h-10 w-full ring-2 rounded-md ring-zinc-400/50  outline-none text-white font-md px-2  focus:ring-green-haze-500 focus:shadow-md focus:shadow-green-haze-400"
                {...register("nome", {
                  required: "O campo deve ser preenchido",
                })}
              />
              {errors.nome && (
                <p className="text-red-600">{`${errors.nome.message}`}</p>
              )}
            </div>

            <div className="flex flex-col font-medium gap-2 w-full">
              <label htmlFor="nome" className="text-lg text-green-haze-500">
                Email
              </label>
              <input
                type="text"
                className="bg-transparent h-10 w-full ring-2 rounded-md ring-zinc-400/50  outline-none text-white font-md px-2  focus:ring-green-haze-500 focus:shadow-md focus:shadow-green-haze-400"
                {...register("email")}
              />
            </div>
            <div className="flex flex-col font-medium gap-2 w-full">
              <label htmlFor="nome" className="text-lg text-green-haze-500">
                Profissão
              </label>
              <input
                type="text"
                className="bg-transparent h-10 w-full ring-2 rounded-md ring-zinc-400/50  outline-none text-white font-md px-2  focus:ring-green-haze-500 focus:shadow-md focus:shadow-green-haze-400"
                {...register("profissao")}
              />
            </div>

            <div className="flex flex-col font-medium gap-2 w-full">
              <label htmlFor="nome" className="text-lg text-green-haze-500">
                Senha
              </label>
              <input
                type="password"
                className="bg-transparent h-10 w-full ring-2 rounded-md ring-zinc-400/50  outline-none text-white font-md px-2  focus:ring-green-haze-500 focus:shadow-md focus:shadow-green-haze-400"
                {...register("senha")}
              />
            </div>
            <div className="flex flex-col font-medium gap-2 w-full">
              <label htmlFor="nome" className="text-lg text-green-haze-500">
                Github
              </label>
              <input
                type="text"
                className="bg-transparent h-10 w-full ring-2 rounded-md ring-zinc-400/50  outline-none text-white font-md px-2  focus:ring-green-haze-500 focus:shadow-md focus:shadow-green-haze-400"
                {...register("github")}
              />
            </div>
            <div className="w-full justify-end gap-2 flex flex-row">
              <button
                type="submit"
                className="w-[100px] h-[40px] ring-1 hover:bg-green-haze-600 hover:text-white text-md font-medium text-green-haze-500 rounded-sm ring-green-haze-500 shadow-sm shadow-green-haze-400 transition-all  "
              >
                Confirmar
              </button>
              <Link
                href="/UserProfile"
                className="w-[100px] h-[40px] flex items-center justify-center ring-1 hover:bg-red-400 hover:text-white text-md font-medium text-green-haze-500 rounded-sm ring-green-haze-500 shadow-sm shadow-green-haze-400 transition-all  "
              >
                Cancelar
              </Link>
            </div>
          </form>
        </>
      )} */}
    </div>
  );
};

export default EditProfile;
