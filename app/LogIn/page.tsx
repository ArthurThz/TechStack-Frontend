"use client";
import React, { useState } from "react";

import Image from "next/image";
import Button from "../components/Layout/Button/Button";
import { logIn } from "@/redux/features/auth-slice";
import { apiRoute } from "@/services/api";

import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";

const MOCKED_USER_LOGIN = {
  email: "arthur@mail.com",
  senha: "123123",
};

type UserData = {
  email: string;
  senha: string;
};

const LogIn = () => {
  const [userCpf, setUserCpf] = useState("");
  const [isLogged, setIsLogged] = useState(false);

  const dispatch = useDispatch<AppDispatch>();

  const onClickLogin = async ({ email, senha }: UserData) => {
    const login = await apiRoute.post("/users/login", MOCKED_USER_LOGIN);

    console.log(login);

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
          <form className="h-auto items-center flex flex-col gap-3">
            <input
              type="text"
              name="cpf"
              onChange={(e) => setUserCpf(e.target.value)}
              className="input w-[80%]"
              placeholder="CPF"
            />
            <input
              type="password"
              name="cpf"
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
