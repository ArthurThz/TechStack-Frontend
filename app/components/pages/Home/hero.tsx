import Image from "next/image";
import Link from "next/link";
import React from "react";

const HeroSection = () => {
  return (
    <div className="h-full py-10 md:py-0  md:min-h-screen w-full mt-24 md:mt-0 flex flex-col-reverse md:flex-row items-center ring-2 justify-around gap-10 md:gap-0 bg-zinc-900 ">
      <div className=" flex h-full flex-col md:max-w-[40%] w-auto px-5 gap-2 items-center justify-center ">
        <h1 className=" text-4xl md:text-5xl text-white font-bold mb-8">
          Crie <span className="text-green-haze-500">publicações</span> sobre os
          mais variados campos da{" "}
          <span className="text-green-haze-500">tecnologia</span>, veja posts e
          seja visto!
        </h1>
        <p className="text-green-haze-400 text-sm md:text-md text-justify whitespace-pre-line">
          Publique artigos, dicas ou expêriencias que você deseja compartilhar,
          aqui você poderá encontrar pessoas que estão trilhando o caminho para
          o sucesso. A melhor maneira de solificar o seu conhecimento é
          compartilhar com outras pessoas.
        </p>

        <div className="flex flex-row justify-start items-center py-3 w-full gap-8">
          <Link
            href="/LogIn"
            className="rounded-full text-sm md:text-md px-6 py-2 bg-green-haze-600 text-white shadow-md shadow-green-haze-800 hover:bg-green-haze-500 hover:shadow-lg hover:shadow-green-haze-500 transition-all"
          >
            Criar Publicação
          </Link>
          <Link
            href="/SignUp"
            className="rounded-full px-6 py-2 text-sm md:text-md ring-2 ring-green-haze-600 text-white hover:bg-zinc-700 hover:shadow-lg hover:shadow-zinc-500"
          >
            Fazer Cadastro
          </Link>
        </div>
      </div>
      <div className=" md:hidden flex w-auto h-auto items-center justify-center">
        <Image src="/hero-image.svg" alt="banner" width={250} height={400} />
      </div>
      <div className="hidden w-auto md:h-auto md:flex items-center justify-center">
        <Image src="/hero-image.svg" alt="banner" width={500} height={400} />
      </div>
    </div>
  );
};

export default HeroSection;
