"use client";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { apiRoute } from "../../services/api";

import type { FieldValues } from "react-hook-form";

import Button from "../components/Layout/Button/Button";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

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
    console.log(data);
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
    <div className="w-full min-h-screen flex flex-col items-center justify-center p-10 bg-woodsmoke-950 overflow-y-auto">
      <h1 className="text-green-haze-500 font-bold text-3xl mb-4">Sign Up</h1>
      <div className="w-[90%] h-auto p-5 border border-green-haze-500 flex flex-col gap-3 items-center rounded-lg">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full h-auto p-2 flex flex-col items-center gap-4"
        >
          {/* grid wrapper */}
          <div className="w-full grid items-center grid-cols-2 grid-rows-3 gap-4">
            {/* input and error message container */}
            <div className=" w-full flex flex-col gap-2">
              <input
                type="text"
                placeholder="Nome *"
                {...register("nome", {
                  required: "Campo obrigatório, por favor preencha!",
                })}
                className="input"
              />
              {errors.nome && (
                <p className="text-red-600">{`${errors.nome.message}`}</p>
              )}
            </div>

            <div className=" w-full flex flex-col gap-2">
              <input
                type="text"
                placeholder="Sobrenome *"
                {...register("sobrenome", {
                  required: "Campo obrigatório, por favor preencha!",
                })}
                className="input"
              />
              {errors.sobrenome && (
                <p className="text-red-600">{`${errors.sobrenome.message}`}</p>
              )}
            </div>

            <div className=" w-full flex flex-col gap-2">
              <input
                type="text"
                placeholder="CPF *"
                {...register("cpf", {
                  required: "Campo obrigatório, por favor preencha!",
                  minLength: {
                    value: 11,
                    message: "Por favor insira um CPF válido",
                  },
                })}
                className="input"
              />
              {errors.cpf && (
                <p className="text-red-600">{`${errors.cpf.message}`}</p>
              )}
            </div>

            <div className=" w-full flex flex-col gap-2">
              <input
                type="email"
                placeholder="Email *"
                {...register("email", {
                  required: "Campo obrigatório, por favor preencha!",
                })}
                className="input"
              />
              {errors.email && (
                <p className="text-red-600">{`${errors.email.message}`}</p>
              )}
            </div>

            <div className=" w-full flex flex-col gap-2">
              <input
                type="text"
                placeholder="Telefone *"
                {...register("telefone", {
                  required: "Campo obrigatório, por favor preencha!",
                })}
                className="input"
              />
              {errors.telefone && (
                <p className="text-red-600">{`${errors.telefone.message}`}</p>
              )}
            </div>

            <div className=" w-full flex flex-col gap-2">
              <input
                type="text"
                placeholder="Profissão *"
                {...register("profissao", {
                  required: "Campo obrigatório, por favor preencha!",
                })}
                className="input"
              />
              {errors.profissao && (
                <p className="text-red-600">{`${errors.profissao.message}`}</p>
              )}
            </div>

            <div className=" w-full flex flex-col gap-2">
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
                className="input"
              />
              {errors.senha && (
                <p className="text-red-600">{`${errors.senha.message}`}</p>
              )}
            </div>

            <div className=" w-full flex flex-col gap-2">
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
                className="input"
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
  );
};

export default SignUp;
