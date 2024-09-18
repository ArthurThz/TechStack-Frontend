"use client";
import { error } from "console";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export type ErrorProps = {
  title: string;
  message?: string;
  code?: number;
};

const Error = ({ code, message, title }: ErrorProps) => {
  if (!code) {
    code = 0;
    message = "Tente novamente mais tarde!";
    title = "Opa, parece que algo deu errado!";
  }
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center px-4  gap-4">
      <Image
        className="lg:w-[500px]"
        alt="Error SVG image"
        src="error-image.svg"
        width={350}
        height={300}
      />
      <h1 className="text-3xl text-red-600 font-bold">{title}</h1>
      <h2 className="text-2xl text-white font-medium text-center">{message}</h2>

      <Link
        href="/"
        className="font-bold text-green-haze-500 underline text-lg"
      >
        Voltar ao inicio
      </Link>
    </div>
  );
};

export default Error;
