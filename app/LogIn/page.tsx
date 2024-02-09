"use client";
import React, { useState } from "react";

import Image from "next/image";
import Button from "../components/Layout/Button/Button";
import { logIn } from "@/redux/features/auth-slice";
import { apiRoute } from "@/services/api";
import { FieldValue, FieldValues, useForm } from "react-hook-form";

import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";

const MOCKED_USER_LOGIN = {
  email: "arthur@mail.com",
  senha: "123123123",
};

type UserData = {
  email: string;
  senha: string;
};

const LogIn = () => {
  const [userCpf, setUserCpf] = useState("");
  const [isLogged, setIsLogged] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { disabled },
  } = useForm();
  const dispatch = useDispatch<AppDispatch>();

  const onClickLogin = async (data: FieldValues) => {
    console.log(data);
    try {
      const response = await apiRoute.post("/users/login", data);

      if (response.status !== 201) {
        alert("Houve um erro verifique os dados e tente novamente");
        return;
      }

      console.log(response);
    } catch (err) {
      alert("ERROR");
    }

    // dispatch(logIn(userCpf));

    // console.log(userCpf);
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
            onSubmit={handleSubmit(onClickLogin)}
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
          </form>
        </div>
        <div className="w-full h-auto flex flex-row justify-center">
          <Button
            onclick={() => onClickLogin(MOCKED_USER_LOGIN)}
            label="Confirmar"
            variant="primary"
            classname="w-[60%]"
          />
        </div>
      </div>
    </div>
  );
};

export default LogIn;
