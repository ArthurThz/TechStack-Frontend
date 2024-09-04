import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <motion.div className="h-screen w-full flex flex-col items-center justify-center bg-zinc-900 lg:flex-row-reverse lg:items-center lg:justify-center gap-6 lg:gap-40">
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
        className="flex justify-center w-[250px] galaxy:w-[290px] iphonexr:w-[340px] md:w-[480px] h-auto"
      >
        <Image
          src="/hero-image.svg"
          alt="banner"
          sizes="100vw"
          width={600}
          height={200}
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex h-auto flex-col w-full px-6 iphonexr:px-5 gap-4 md:px-10 items-center justify-center lg:w-[50%]"
      >
        <h1 className=" text-2xl iphonexr:text-4xl md:text-5xl text-white font-bold mb-4 lg:text-6xl">
          Crie <span className="text-green-haze-500">publicações</span> sobre os
          mais variados campos da{" "}
          <span className="text-green-haze-500">tecnologia</span>, veja posts e
          seja visto!
        </h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2, delay: 0.2 }}
          className="text-green-haze-500 px-2 text-sm md:text-lg text-justify whitespace-pre-line lg:pr-4"
        >
          Publique artigos, dicas ou expêriencias que você deseja compartilhar,
          aqui você poderá encontrar pessoas que estão trilhando o caminho para
          o sucesso. A melhor maneira de solificar o seu conhecimento é
          compartilhar com outras pessoas.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.4 }}
          className="flex flex-row justify-start items-center py-3 w-full gap-8"
        >
          <Link
            href="/LogIn"
            className="rounded-full px-4 text-sm md:text-md md:px-6 py-2 bg-green-haze-600 text-white shadow-md shadow-green-haze-800 hover:bg-green-haze-500 hover:shadow-lg hover:shadow-green-haze-500 transition-all"
          >
            Acessar Plataforma
          </Link>
          <Link
            href="/SignUp"
            className="rounded-full px-4 py-2 text-sm md:text-md md:px-6 ring-2 ring-green-haze-600 text-white hover:bg-zinc-700 hover:shadow-lg hover:shadow-zinc-500"
          >
            Fazer Cadastro
          </Link>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default HeroSection;
