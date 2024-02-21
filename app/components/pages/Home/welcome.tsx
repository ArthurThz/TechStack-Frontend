import { FaUserAstronaut } from "react-icons/fa";
import { GiKnockedOutStars } from "react-icons/gi";
import { IoRocketSharp } from "react-icons/io5";
import WelcomeCard from "./welcome-card";
import Link from "next/link";

const Welcome = () => {
  const CARDS_CONTENT = [
    {
      icon: <GiKnockedOutStars size={45} />,
      content:
        "Navegue pela constelação de possibilidades que existe na técnologia, publique e leia artigos, compartilhe o seu conhecimento!",
    },
    {
      icon: <IoRocketSharp size={45} />,
      content:
        "O céu é o limite para o conhecimento, compartilhe experiências, dúvidas e objetivos. Trilhe o seu próprio caminho!",
    },
    {
      icon: <FaUserAstronaut size={45} />,
      content:
        "Você é o piloto nessa jornada, não tenha medo de publicar, todo conteúdo é válido e tenha sempre em mente, todos tiveram que começar do inicio.",
    },
  ];
  return (
    <div className="w-full h-screen  justify-center flex py-5 flex-col items-center gap-5 overflow-y-auto">
      <h1 className="text-4xl text-green-haze-500 font-semibold mt-3">
        Seja Bem Vindo!
      </h1>
      <div className="flex flex-col w-[80%] h-auto items-center text-center justify-center py-8">
        <h2 className="text-xl text-white">
          TechStack é um blog que aborda diversos assunto da área de técnologia,{" "}
          <Link
            href="/SignUp"
            className="text-green-haze-500 cursor-pointer hover:underline"
          >
            crie sua conta
          </Link>{" "}
          ou{" "}
          <Link
            href="LogIn"
            className="text-green-haze-500 cursor-pointer hover:underline"
          >
            faça login
          </Link>{" "}
          para ver todos os posts!
        </h2>
      </div>
      <div className="w-full h-full flex flex-row gap-10 items-center justify-center">
        {CARDS_CONTENT.map((item, index) => (
          <WelcomeCard key={index} content={item.content} icon={item.icon} />
        ))}
      </div>
    </div>
  );
};

export default Welcome;
