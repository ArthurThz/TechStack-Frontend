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
import PasswordInput from "../Layout/Input/PasswordInput";

const LoginForm = () => {
  // Router
  const router = useRouter();
  // Hook Form
  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm();

  // Redux Dispatch
  const dispatch = useDispatch<AppDispatch>();

  // Login funtion
  const onSubmit = async (data: FieldValues) => {
    console.log(data);
    // const response = await axios.post("/api/login", { hello: "OI" });
    // console.log(response);
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

  return (
    <form
      className="w-full md:w-[70%]  justify-center h-auto py-10 flex flex-col px-5 items-center gap-4 lg:w-[50%] "
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input
        name="email"
        placeholder="Email"
        type="text"
        icon={<MdEmail />}
        control={control}
      />
      <PasswordInput
        name="passoword"
        control={control}
        hidePasswordIcon={<FaEyeSlash />}
        showPasswordIcon={<FaEye />}
        placeholder="Senha"
      />

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
