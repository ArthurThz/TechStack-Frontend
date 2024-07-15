"use client";
import React, { ReactNode, useState } from "react";

import Image from "next/image";
import Button from "../components/Layout/Button/Button";
import { logIn } from "@/redux/features/auth-slice";
import { apiRoute } from "@/services/api";
import { FieldValue, FieldValues, useForm } from "react-hook-form";

import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { useRouter } from "next/navigation";
import { MdArrowRight, MdEmail } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import Input from "../components/Layout/Input";
import {
  LiaEye,
  LiaEyeSlash,
  LiaEyeSlashSolid,
  LiaIconsSolid,
} from "react-icons/lia";

const LogIn = () => {
  // Router
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

  // Login funtion
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
  // Password input state
  const defaultPasswordType = {
    type: "password",
    icon: <LiaEyeSlash />,
  };
  const [ispasswordVisible, setIsPasswordVisible] =
    useState(defaultPasswordType);

  const changePasswordVisibility = () => {
    ispasswordVisible.type === "password"
      ? setIsPasswordVisible({
          type: "text",
          icon: <LiaEye />,
        })
      : setIsPasswordVisible(defaultPasswordType);
  };
  return (
    <div className="min-h-screen w-full py-10 px-4 justify-center  flex flex-col items-center md:justify-center md:px-10  bg-cover bg-zinc-900 ">
      <div className="w-[90%] h-[70%] ring-2 ring-green-haze-500/30 shadow-lg shadow-green-haze-400/30 rounded-md ">
        <div className="hidden lg:block w-1/2 h-full bg-login bg-no-repeat bg-center" />
        <div className="w-full border-l border-green-haze-500/10 py-4 h-full flex flex-col items-center  gap-2 justify-center">
          <div className="hidden p-1 text-center md:flex md:flex-col-reverse">
            <Image
              className=""
              src="/login-icon.svg"
              height={90}
              width={280}
              alt="login icon"
            />
          </div>
          <h1 className="text-white text-lg font-medium mt-6 text-center ">
            Compartilhe suas{" "}
            <span className="text-green-haze-500 font-bold">ideias</span> ou
            <span className="text-green-haze-500 font-bold"> experiências</span>
            , expanda a comunidade!
          </h1>
          <span className="text-white font-extralight text-sm">
            Faça login para continuar
          </span>
          <form
            className="w-full md:w-[70%] justify-center h-full flex flex-col px-5 items-center gap-4 "
            onSubmit={handleSubmit(onSubmit)}
          >
            <Input label="Email" type="text" icon={<MdEmail />} />
            <div className="flex flex-col items-start gap-2 w-full">
              <div className="w-full flex items-center h-auto relative">
                <input
                  className="w-full px-3 py-2 text-sm border-none outline-none focus-within:outline-2 focus-within:outline-green-haze-500  rounded-md bg-zinc-800 h-[40px] placeholder:text-md placeholder:text-zinc-100 text-zinc-100"
                  placeholder="Senha"
                  type={ispasswordVisible.type}
                />

                <div
                  className="h-full w-auto flex items-center justify-center absolute right-2 text-zinc-100/70 hover:cursor-pointer"
                  onClick={() => changePasswordVisibility()}
                >
                  {ispasswordVisible.icon}
                </div>
              </div>
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
