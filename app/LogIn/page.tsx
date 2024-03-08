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

      router.push("/");
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className="h-screen w-full py-10 px-4  flex flex-col items-center md:justify-center md:px-10  bg-cover bg-zinc-900 ">
      <div className="w-full h-full md:max-h-[80%] flex flex-row px-2 items-center justify-center">
        <div className="hidden md:block w-1/2 h-full">
          <Image
            src="/gray-wallpaper.jpg"
            width={100}
            height={100}
            alt="code banner"
          />
        </div>
        <div className="w-full py-4 md:w-1/2 h-full flex flex-col items-center gap-4 rounded-md shadow-lg shadow-green-haze-500 ring-1 ring-green-haze-500">
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
          <Image
            src="/login-icon.svg"
            height={80}
            width={200}
            alt="login icon"
          />
          <h2 className="text-white text-2xl tracking-widest font-medium">
            Bem vindo de volta!
          </h2>
          <form className="w-full h-full flex flex-col px-10 items-center gap-4">
            <div className="flex flex-col items-start gap-2 w-full">
              <label
                htmlFor="email"
                className="text-sm font-medium text-green-haze-500"
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
                className="text-sm font-medium text-green-haze-500"
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
                className="text-green-haze-500 font-medium text-md"
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
