"use client";
import React, { useState } from "react";

import Image from "next/image";
import Button from "../components/Layout/Button/Button";
import { logIn } from "@/redux/features/auth-slice";
import { apiRoute } from "@/services/api";
import { FieldValue, FieldValues, useForm } from "react-hook-form";

import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { useRouter } from "next/navigation";
import { MdArrowRight } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";

const LogIn = () => {
  const router = useRouter();
  // Hook Form
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm();

  // Redux Dispatch
  const dispatch = useDispatch<AppDispatch>();

  const onSubmit = async (data: FieldValues) => {
    try {
      const response = await apiRoute.post("/users/login", data);

      if (response.status !== 201) {
        alert("Houve um erro verifique os dados e tente novamente");
        return;
      }

      const userData = response.data;

      dispatch(logIn(userData));

      router.push("/Feed");
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className="min-h-screen w-full py-10 px-4  flex flex-col items-center md:justify-center md:px-10  bg-cover bg-zinc-900 ">
      <div className="w-full h-auto bg-zinc-950/20 md:max-h-[90%] md:h-full md:w-[80%] flex flex-row px-2  items-center justify-center rounded-md ring-1 ring-green-haze-500 shadow-lg shadow-green-haze-500 mt-10 md:mt-5 py-10 md:py-5">
        <div className="hidden md:block w-1/2 h-full bg-login bg-no-repeat bg-center" />
        <div className="w-full border-l border-green-haze-500/10 py-4 md:w-1/2 h-full flex flex-col items-center  gap-4 justify-center  ">
          <Image
            className="md:hidden"
            src="/login-icon.svg"
            height={80}
            width={200}
            alt="login icon"
          />
          <h2 className="text-white text-2xl tracking-widest font-medium mt-5">
            Bem vindo de volta!
          </h2>
          <form
            className="w-full md:w-[70%] justify-center h-full flex flex-col px-10 items-center gap-4 "
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex flex-col items-start gap-2 w-full">
              <label
                htmlFor="email"
                className="text-sm font-medium text-white tracking-widest"
              >
                Email
              </label>
              <input
                type="text"
                className="bg-transparent h-10 w-full ring-2 rounded-md ring-zinc-400/50  outline-none text-white font-md px-2  focus:ring-green-haze-500 focus:shadow-md focus:shadow-green-haze-400 "
                {...register("email")}
              />
            </div>
            <div className="flex flex-col items-start gap-2 w-full">
              <label
                htmlFor="password"
                className="text-sm font-medium text-white tracking-widest"
              >
                Senha
              </label>

              <input
                type="password"
                className="bg-transparent h-10 w-full ring-2 rounded-md ring-zinc-400/50  outline-none text-white font-md px-2  focus:ring-green-haze-500 focus:shadow-md focus:shadow-green-haze-400 "
                {...register("password")}
              />
            </div>

            <button className="px-10 w-full flex flex-row gap-4 items-center justify-center rounded-md shadow-lg shadow-green-haze-900 py-2 bg-green-haze-700 text-white font-medium hover:bg-green-haze-500 transition-all">
              Entrar
              <FaArrowRight />
            </button>
            <span className="text-white font-medium text-sm mt-5">
              Ainda não tem uma conta?{" "}
              <Link
                href="/SignUp"
                className="text-green-haze-500 font-medium text-md underline"
              >
                cadastre-se
              </Link>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
