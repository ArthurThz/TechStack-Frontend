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
    <div className="h-screen w-full p-24 flex flex-col items-center justify-center bg-cover bg-woodsmoke-950 bg-green-wallpaper">
      <div className="h-full w-[50%] glassmorphism flex flex-col items-center p-11 gap-5 ">
        <div className="h-auto w-full flex flex-row justify-center items-center gap-3">
          <Image src=" wifi-icon.svg" alt="icon" width={60} height={40} />
          <h1 className="text-white text-2xl">
            Tech<span className="text-green-haze-500">Stack</span>
          </h1>
        </div>
        <div className="w-full ">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="h-auto items-center flex flex-col gap-3"
          >
            <input
              type="text"
              {...register("email")}
              className="input w-[80%]"
              placeholder="E-mail"
            />
            <input
              type="password"
              {...register("password")}
              className="input w-[80%]"
              placeholder="Senha"
              autoComplete="off"
            />
            <div className="w-full h-auto flex flex-row justify-center">
              <Button
                type="submit"
                label="Confirmar"
                variant="primary"
                classname="w-[60%]"
                disabled={isSubmitting}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
