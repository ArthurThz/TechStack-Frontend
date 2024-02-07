"use client";
import Link from "next/link";
import React from "react";
import { useAppSelector } from "@/redux/store";
const HomePage = () => {
  const userCPF = useAppSelector((state) => state.authReducer.value.cpf);
  return (
    <div className="h-full w-full flex flex-col p-3 bg-woodsmoke-950">
      <h1>This is the home page</h1>
      {userCPF && <h2 className="text-white text-3xl">CPF: {userCPF}</h2>}
      <Link href="/Feed">Feed</Link>
    </div>
  );
};

export default HomePage;
