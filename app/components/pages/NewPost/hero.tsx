import { HeroSectionProps } from "./types";

const HeroSection = ({ children }: HeroSectionProps) => {
  return (
    <div className="w-full h-full bg-zinc-900 flex flex-col items-center  py-20 px-10 gap-8">
      <h1 className="text-3xl text-white font-bold">Nova Publicação</h1>
      {children}
    </div>
  );
};

export default HeroSection;
