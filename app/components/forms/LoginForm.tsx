"use client";

import { AppDispatch } from "@/redux/store";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { FaArrowRight, FaEye, FaEyeSlash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import Input from "../Layout/Input";
import { MdEmail } from "react-icons/md";
import Link from "next/link";

const LoginForm = () => {
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
    const response = await axios.post("/api/login", { hello: "OI" });
    console.log(response);
    // try {
    //   const response = await apiRoute.post("/users/login", data);
    //   if (response.status !== 201) {
    //     alert("Houve um erro verifique os dados e tente novamente");
    //     return;
    //   }
    //   const userData = response.data;
    //   dispatch(logIn(userData));
    //   router.push("/Feed");
    // } catch (err) {
    //   console.error(err);
    // }
  };
  // Password Input Handlers
  const defaultPasswordType = {
    type: "password",
    icon: <FaEyeSlash />,
  };
  const [ispasswordVisible, setIsPasswordVisible] =
    useState(defaultPasswordType);

  const changePasswordVisibility = () => {
    ispasswordVisible.type === "password"
      ? setIsPasswordVisible({
          type: "text",
          icon: <FaEye />,
        })
      : setIsPasswordVisible(defaultPasswordType);
  };
  return (
    <form
      className="w-full md:w-[70%]  justify-center h-auto py-10 flex flex-col px-5 items-center gap-4 lg:w-[50%] "
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input
        label="Email"
        type="text"
        icon={<MdEmail />}
        {...register("email")}
      />
      <div className="flex flex-col items-start gap-2 w-full">
        <div className="w-full flex items-center h-auto relative">
          <input
            className="w-full px-3 py-2 text-sm border-none outline-none focus-within:outline-2 focus-within:outline-green-haze-500  rounded-md bg-zinc-800 h-[40px] placeholder:text-md placeholder:text-zinc-100 text-zinc-100"
            placeholder="Senha"
            type={ispasswordVisible.type}
            {...register("password")}
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
  );
};

export default LoginForm;
