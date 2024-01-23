import React from "react";
import Image from "next/image";
import Button from "../components/Layout/Button/Button";

const LogIn = () => {
  return (
    <div className="h-screen w-full p-24 flex flex-col items-center justify-center bg-cover bg-woodsmoke-950 bg-green-wallpaper">
      <div className="h-full w-[50%] glassmorphism flex flex-col items-center p-11 gap-5 ">
        <div className="h-auto w-full flex flex-row justify-center items-center gap-3">
          <Image src=" wifi-icon.svg" alt="icon" width={60} height={40} />
          <h1 className="text-white text-2xl">
            Tech<span className="text-green-haze-500">Stack</span>
          </h1>
        </div>
        <div className="w-full h-auto items-center flex flex-col gap-3">
          <input
            type="text"
            name="cpf"
            className="input w-[80%]"
            placeholder="CPF"
          />
          <input
            type="password"
            name="cpf"
            className="input w-[80%]"
            placeholder="Senha"
          />
        </div>
        <div className="w-full h-auto flex flex-row justify-center">
          <Button label="Confirmar" variant="primary" classname="w-[60%]" />
        </div>
      </div>
    </div>
  );
};

export default LogIn;
