import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <motion.div className="h-full overflow-hidden py-10 md:py-0 md:min-h-screen w-full mt-24 md:mt-0 flex flex-col-reverse md:flex-row items-center justify-around gap-10 md:gap-0 bg-zinc-900">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className=" flex h-full flex-col md:max-w-[40%] w-auto px-6 iphonexr:px-5 gap-2 items-center justify-center"
      >
        <h1 className=" text-2xl iphonexr:text-4xl md:text-5xl text-white font-bold mb-8">
          Crie <span className="text-green-haze-500">publicações</span> sobre os
          mais variados campos da{" "}
          <span className="text-green-haze-500">tecnologia</span>, veja posts e
          seja visto!
        </h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2, delay: 0.2 }}
          className="text-green-haze-500 px-2 text-sm md:text-md text-justify whitespace-pre-line"
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
            Criar Publicação
          </Link>
          <Link
            href="/SignUp"
            className="rounded-full px-4 py-2 text-sm md:text-md md:px-6 ring-2 ring-green-haze-600 text-white hover:bg-zinc-700 hover:shadow-lg hover:shadow-zinc-500"
          >
            Fazer Cadastro
          </Link>
        </motion.div>
      </motion.div>
      {/* mobile image */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
        className="w-[250px] galaxy:w-[290px] iphonexr:w-[400px] h-auto"
      >
        <Image
          src="/hero-image.svg"
          alt="banner"
          sizes="100vw"
          width={400}
          height={200}
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroSection;
