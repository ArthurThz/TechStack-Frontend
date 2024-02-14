"use client";
import Link from "next/link";
import React from "react";
import { useAppSelector } from "@/redux/store";
const HomePage = () => {
  const { isAuth, nome, profissao, sobrenome, token } = useAppSelector(
    (state) => state.authReducer.value
  );

  return (
    <div className="h-full w-full flex flex-col p-3 bg-woodsmoke-950">
      <h1>This is the home page</h1>
      {isAuth && <h2 className="text-white text-3xl">Email: {nome}</h2>}
      <Link href="/Feed">Feed</Link>
    </div>
  );
};

export default HomePage;
