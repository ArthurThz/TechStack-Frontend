import Image from "next/image";
import { HeroItemProps } from "./types";

const HeroItem = ({ imagePath, text, alt }: HeroItemProps) => {
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <div className="w-[100px] h-auto">
        <Image alt={alt} src={imagePath} width={200} height={100} />
      </div>
      <h2 className="text-zinc-300 text-lg text-center hover:text-green-haze-300">
        {text}
      </h2>
    </div>
  );
};

export default HeroItem;
