import Image from "next/image";

const Logo = () => {
  return (
    <div className="w-full h-auto py-2 bg-zinc-900 z-10 px-2 gap-2 flex items-center fixed top-0">
      <div className="w-[25px]">
        <Image
          alt="tech stack logo"
          width={300}
          height={300}
          src="./wifi-icon.svg"
        />
      </div>

      <h1 className="text-white text-lg font-bold">
        Teck<span className="text-green-haze-500">Stack</span>
      </h1>
    </div>
  );
};

export default Logo;
