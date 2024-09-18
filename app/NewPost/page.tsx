"use client";
import HeroSection from "../components/pages/NewPost/hero";
import HeroItem from "../components/pages/NewPost/hero-item";
import Link from "next/link";
import { FaPlusCircle } from "react-icons/fa";

const NewPost = () => {
  return (
    <div className="w-full h-ful">
      <HeroSection>
        <HeroItem
          alt="imagem do astronauta"
          imagePath="/pilot.svg"
          text="Crie publicações para alcançar o máximo de pessoas e contribuir para o crescimento da nossa comunidade!"
        />
        <HeroItem
          alt="imagem do astronauta"
          imagePath="/rocket.svg"
          text="Crie publicações para alcançar o máximo de pessoas e contribuir para o crescimento da nossa comunidade!"
        />
        <Link
          href="/Posts/NewPost"
          className="bg-green-haze-700 w-auto flex flex-row gap-5 items-center py-4 px-5 rounded-md transition-all text-white hover:bg-green-haze-900"
        >
          Criar Publicação
          <FaPlusCircle />
        </Link>
      </HeroSection>
    </div>
  );
};

export default NewPost;
