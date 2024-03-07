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

      router.push("/");
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className="h-screen w-full py-10 px-4  flex flex-col items-center md:justify-center md:px-10  bg-cover bg-zinc-900 ">
      <div className="w-full max-h-[60%] md:max-h-[80%] ring-2 h-full flex flex-row px-2 items-center justify-center">
        <div className="hidden md:block w-1/2 h-full">
          <Image
            src="/gray-wallpaper.jpg"
            width={100}
            height={100}
            alt="code banner"
          />
        </div>
        <div className="w-full py-4 md:w-1/2 h-full flex flex-col items-center gap-4 border border-green-haze-500 rounded-md shadow-md shadow-green-haze-400">
          <div className="w-full h-auto px-5 py-2  flex flex-row gap-2 items-center mb-10">
            <Image
              src="/wifi-icon.svg"
              width={30}
              height={30}
              alt="wifi icon"
            />
            <h1 className="text-white font-bold ">
              Tech<span className="text-green-haze-500">Stack</span>
            </h1>
          </div>
          <h2 className="text-white text-2xl tracking-widest font-bold">
            Login
          </h2>
          <form className="w-full h-full flex flex-col items-center gap-4">
            <input
              type="text"
              className="bg-transparent h-10 w-[60%] border-b-[1px] border-b-green-haze-500 outline-none text-white font-md px-2 focus:ring-2 focus:ring-green-haze-500 focus:border-none focus:rounded-md"
              placeholder="E-mail"
              {...register("email")}
            />
            <input
              type="password"
              className="bg-transparent h-10 w-[60%] border-b-[1px] border-b-green-haze-500 outline-none text-white font-md px-2 focus:ring-2 focus:ring-green-haze-500 focus:border-none focus:rounded-md"
              placeholder="Senha"
              {...register("password")}
            />

            <button className="px-10 rounded-md shadow-lg shadow-green-haze-900 py-2 bg-green-haze-700 text-white font-medium hover:bg-green-haze-500 transition-all">
              Entrar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
