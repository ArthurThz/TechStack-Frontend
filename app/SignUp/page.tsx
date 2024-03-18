"use client";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { apiRoute } from "../../services/api";

import type { FieldValues } from "react-hook-form";

import Button from "../components/Layout/Button/Button";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import Image from "next/image";

const SignUp = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    getValues,
  } = useForm();

  const onSubmit = async (data: FieldValues) => {
    const response = await apiRoute.post("/users/register", data);

    if (response.status !== 201) {
      toast.error("Não foi possivel fazer o cadastro!");
      return;
    }

    toast.success("Usuário criado com sucesso!");
    reset();
    router.push("/LogIn");
  };
  return (
    <div className="w-full min-h-screen flex flex-col items-center px-8 bg-zinc-900 overflow-y-auto">
      <div className="h-full w-full mt-24 flex flex-col md:flex-row items-center md:justify-center gap-20">
        <Image
          className="hidden md:block "
          src="/signup-icon.svg"
          width={500}
          height={40}
          alt="icon"
        />
        <div className="flex flex-col items-center">
          <h1 className="text-green-haze-500 font-bold text-3xl mb-4">
            Cadastre-se
          </h1>
          <h3 className="text-white text-md py-5 font-medium">
            Venha fazer parte do nosso time!
          </h3>
          <div className="w-full md:w-auto md:px-10 h-auto p-5 ring-1 bg-zinc-950/30 ring-green-haze-500 flex flex-col gap-3 items-center rounded-lg shadow-md shadow-green-haze-500">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="w-full h-auto p-2 flex flex-col items-center gap-4"
            >
              {/* grid wrapper */}
              <div className="w-full flex flex-col items-center gap-4">
                {/* input and error message container */}
                <div className=" w-full max-w-[300px] flex flex-col gap-2">
                  <input
                    type="text"
                    placeholder="Nome *"
                    {...register("nome", {
                      required: "Campo obrigatório, por favor preencha!",
                    })}
                    className="bg-transparent h-10 w-full ring-1 rounded-md ring-zinc-400/50  outline-none text-white font-md px-2  focus:ring-green-haze-500 focus:shadow-md focus:shadow-green-haze-400"
                  />
                  {errors.nome && (
                    <p className="text-red-600">{`${errors.nome.message}`}</p>
                  )}
                </div>

                <div className=" w-full max-w-[300px] flex flex-col gap-2">
                  <input
                    type="email"
                    placeholder="Email *"
                    {...register("email", {
                      required: "Campo obrigatório, por favor preencha!",
                    })}
                    className="bg-transparent h-10 w-full ring-1 rounded-md ring-zinc-400/50  outline-none text-white font-md px-2  focus:ring-green-haze-500 focus:shadow-md focus:shadow-green-haze-400"
                  />
                  {errors.email && (
                    <p className="text-red-600">{`${errors.email.message}`}</p>
                  )}
                </div>

                <div className=" w-full max-w-[300px] flex flex-col gap-2">
                  <input
                    type="text"
                    placeholder="Profissão *"
                    {...register("profissao", {
                      required: "Campo obrigatório, por favor preencha!",
                    })}
                    className="bg-transparent h-10 w-full ring-1 rounded-md ring-zinc-400/50  outline-none text-white font-md px-2  focus:ring-green-haze-500 focus:shadow-md focus:shadow-green-haze-400"
                  />
                  {errors.profissao && (
                    <p className="text-red-600">{`${errors.profissao.message}`}</p>
                  )}
                </div>

                <div className=" w-full max-w-[300px] flex flex-col gap-2">
                  <input
                    type="password"
                    autoComplete="off"
                    placeholder="Senha *"
                    {...register("senha", {
                      required: "Campo obrigatório, por favor preencha!",
                      minLength: {
                        value: 8,
                        message: "Sua senha deve conter ao menos 8 caracteres!",
                      },
                    })}
                    className="bg-transparent h-10 w-full ring-1 rounded-md ring-zinc-400/50  outline-none text-white font-md px-2  focus:ring-green-haze-500 focus:shadow-md focus:shadow-green-haze-400"
                  />
                  {errors.senha && (
                    <p className="text-red-600">{`${errors.senha.message}`}</p>
                  )}
                </div>

                <div className=" w-full max-w-[300px] flex flex-col gap-2">
                  <input
                    type="password"
                    autoComplete="off"
                    placeholder="Repetir Senha *"
                    {...register("repetirSenha", {
                      required: "Campo obrigatório, por favor preencha!",
                      validate: (password) =>
                        password === getValues("senha") ||
                        "As senhas devem ser iguais",
                    })}
                    className="bg-transparent h-10 w-full ring-1 rounded-md ring-zinc-400/50  outline-none text-white font-md px-2  focus:ring-green-haze-500 focus:shadow-md focus:shadow-green-haze-400"
                  />
                  {errors.repetirSenha && (
                    <p className="text-red-600">{`${errors.repetirSenha.message}`}</p>
                  )}
                </div>
              </div>

              <Button
                disabled={isSubmitting}
                type="submit"
                label="confirmar"
                variant="primary"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
