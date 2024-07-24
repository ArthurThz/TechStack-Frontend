"use client";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { apiRoute, gitHubApi } from "../../services/api";

import type { FieldValues } from "react-hook-form";

import Button from "../components/Layout/Button/Button";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import Image from "next/image";
import Input from "../components/Layout/Input";
import {
  FaArrowRight,
  FaGithub,
  FaLaptopCode,
  FaLock,
  FaTools,
  FaUser,
} from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import Link from "next/link";

const SignUp = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    getValues,
  } = useForm();

  const onSubmit = async (userdata: FieldValues) => {
    const githubInfo = await gitHubApi.get(`${userdata.github}`);

    const linkProfilePic = githubInfo.data.avatar_url;
    const profilePic = { profilepic: linkProfilePic };

    const user = { ...userdata, ...profilePic };

    const response = await apiRoute.post("/users/register", user);

    if (response.status !== 201) {
      toast.error(response.data.message);
      return;
    }

    toast.success("Usuário criado com sucesso!");
    reset();
    router.push("/LogIn");
  };
  return (
    <div className="w-full  min-h-screen ring-2 flex flex-col items-center justify-center  bg-zinc-900 overflow-y-auto">
      <div className="w-[85%] lg:w-[50%] md:px-10 md:py-10 h-auto p-5 ring-2  ring-green-haze-500/30 flex flex-col gap-2 items-center rounded-lg shadow-lg shadow-green-haze-400/30">
        <Image
          className="w-[200px] iphonexr:w-[250px] md:w-[300px] lg:w-[360px] h-auto "
          src="/signup-icon.svg"
          width={500}
          height={40}
          alt="icon"
        />
        <h1 className="text-white font-medium text-lg  mb-2 text-center md:text-xl lg:text-2xl">
          <span className="text-green-haze-500 font-bold">Cadastre-se</span> e
          começe a publicar!
        </h1>
        <span className="text-zinc-100 font-light text-xs mt-[-10px] md:text-sm">
          Venha fazer parte da nossa comunidade!
        </span>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full h-auto p-2 flex flex-col items-center gap-4 mt-1 md:w-[70%] lg:w-[50%] md:mt-3"
        >
          {/* grid wrapper */}
          <Input label="Nome" type="text" icon={<FaUser />} />
          <Input label="Email" type="text" icon={<IoMail />} />
          <Input label="Profissao" type="text" icon={<FaLaptopCode />} />
          <Input label="Github" type="text" icon={<FaGithub />} />
          <Input label="Senha" type="text" icon={<FaLock />} />

          <button className="px-10 w-full flex flex-row gap-4 items-center justify-center rounded-md shadow-lg shadow-green-haze-900 py-2 bg-green-haze-700 text-white font-medium hover:bg-green-haze-500 transition-all">
            Confirmar
          </button>
          <span className="text-white font-medium text-sm mt-5">
            Já possui uma conta?{" "}
            <Link
              href="/LogIn"
              className="text-green-haze-500 font-medium text-md underline"
            >
              Login
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
