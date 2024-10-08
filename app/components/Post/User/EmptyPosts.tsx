import Link from "next/link";
import React from "react";

const EmptyPosts = () => {
  return (
    <div className="w-full md:w-auto flex flex-col gap-5 items-center p-10">
      <h1 className="text-white text-2xl text-center">
        Você ainda não possui nenhuma postagem!
      </h1>
      <Link
        className="border border-green-haze-500 px-4 py-3 font-medium rounded-md text-lg text-green-haze-500 transition-all shadow-sm shadow-green-haze-500/50 hover:bg-woodsmoke-950/10 hover:shadow-green-haze-500  hover:text-green-haze-400"
        href="/Posts/NewPost"
      >
        Criar Novo Post!
      </Link>
    </div>
  );
};

export default EmptyPosts;
