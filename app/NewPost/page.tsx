import Image from "next/image";
import { FiPlusCircle } from "react-icons/fi";

const NewPost = () => {
  return (
    <div className="h-full w-full flex flex-col gap-10 items-center p-20 bg-woodsmoke-950">
      <h1 className="text-4xl text-white font-sans font-medium tracking-wide">
        Criar novo post
      </h1>
      <div className="w-full gap-10 flex flex-col items-center">
        <div className="items-center gap-3 justify-center flex flex-row w-full group">
          <Image alt="pilot icon" width={80} height={80} src="/pilot.svg" />
          <h2 className="text-xl text-green-haze-500  group-hover:text-green-haze-200 font-medium font-sans">
            Seja você o piloto da sua aventura no mundo da tecnologia!
          </h2>
        </div>

        <div className="items-center gap-3 justify-center flex flex-row w-full group">
          <Image alt="pilot icon" width={80} height={80} src="/rocket.svg" />
          <h2 className="text-xl text-green-haze-500 text-center group-hover:text-green-haze-200 font-medium font-sans">
            Crie publicações para alcançar o máximo de pessoas e contribuir para
            o crescimento da nossa comunidade!
          </h2>
        </div>
      </div>
      <button className="bg-green-haze-700 w-auto flex flex-row gap-5 items-center py-4 px-5 rounded-md transition-all text-white hover:bg-green-haze-900">
        <FiPlusCircle size={20} />
        Novo Post
      </button>
    </div>
  );
};

export default NewPost;
