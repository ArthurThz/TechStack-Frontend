"use client";
import React from "react";

import Input from "../components/Layout/Input/Input";
import Button from "../components/Layout/Button/Button";
// to to -> put inputs inside form tag
const SignUp = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-between p-10 bg-woodsmoke-950 overflow-y-auto">
      <h1 className="text-green-haze-500 font-bold text-3xl mb-4">Sign Up</h1>
      <div className="w-[50%] h-auto p-5 border border-green-haze-500 flex flex-col gap-3 items-center rounded-lg">
        <Input type="text" name="username" label="Nome" />
        <Input type="text" name="userlastname" label="Sobrenome" />
        <Input type="text" name="cpf" label="CPF" />
        <Input type="mail" name="mail" label="Email" />
        <Input type="phone" name="phone" label="Telefone" />
        <Input type="text" name="role" label="Profissão" />
        <Button onclick={() => ""} label="confirmar" variant="primary" />
      </div>
    </div>
  );
};

export default SignUp;
