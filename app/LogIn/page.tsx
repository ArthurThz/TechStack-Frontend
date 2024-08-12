"use client";
import React, { ReactNode, useState } from "react";

import Image from "next/image";
import { logIn } from "@/redux/features/auth-slice";
import { apiRoute } from "@/services/api";
import { FieldValues, useForm } from "react-hook-form";

import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { useRouter } from "next/navigation";
import { MdEmail } from "react-icons/md";
import { FaArrowRight, FaEye, FaEyeSlash } from "react-icons/fa";
import Link from "next/link";
import Input from "../components/Layout/Input";
import { cookies } from "next/headers";
import axios from "axios";
import FormHero from "../components/forms/FormHero";
import LoginForm from "../components/forms/LoginForm";
const LogIn = () => {
  return (
    <div className="min-h-screen w-full py-10 px-4 justify-center  flex flex-col items-center md:justify-center md:px-10  bg-zinc-900 ">
      <div className="w-[90%] h-auto ring-2 ring-green-haze-500/30 shadow-lg shadow-green-haze-400/30 rounded-md flex flex-col items-center justify-center lg:w-[50%] lg:mt-10">
        <FormHero imageAltText="login icon" imagePath="/hands-on-keyboard.svg">
          <h1 className="text-white text-lg iphonexr:text-xl px-4 font-medium mt-6 text-center  md:text-xl md:px-8 lg:text-2xl">
            Compartilhe suas{" "}
            <span className="text-green-haze-500 font-bold">ideias</span> ou
            <span className="text-green-haze-500 font-bold"> experiências</span>
            , expanda a comunidade!
          </h1>
          <span className="text-white font-extralight text-xs sm:text-sm">
            Faça login para continuar
          </span>
        </FormHero>
        <LoginForm />
      </div>
    </div>
  );
};

export default LogIn;
