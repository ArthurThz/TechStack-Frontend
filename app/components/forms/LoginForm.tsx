"use client";

import { AppDispatch } from "@/redux/store";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { FaArrowRight, FaEye, FaEyeSlash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import Input from "../Layout/Input/Input";
import { MdEmail } from "react-icons/md";
import Link from "next/link";
import PasswordInput from "../Layout/Input/PasswordInput";
import ConfirmButton from "../Layout/Button/ConfirmButton";
import { apiRoute } from "@/services/api";
import { logIn } from "@/redux/features/auth-slice";

const LoginForm = () => {
  // Router
  const router = useRouter();
  // Hook Form
  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm();

  // Redux Dispatch
  const dispatch = useDispatch<AppDispatch>();

  // Login funtion
  const onSubmit = async (data: FieldValues) => {
    const response = await axios.post("/api/login", data);
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

  return (
    <form
      className="w-full md:w-[70%]  justify-center h-auto py-10 flex flex-col px-5 items-center gap-4 lg:max-w-[400px] "
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
        name="password"
        control={control}
        hidePasswordIcon={<FaEyeSlash />}
        showPasswordIcon={<FaEye />}
        placeholder="Senha"
      />

      <ConfirmButton disabled={isSubmitting}>
        Entrar
        <FaArrowRight />
      </ConfirmButton>

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
