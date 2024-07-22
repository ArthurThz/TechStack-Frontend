"use client";
import { useAppSelector } from "@/redux/store";
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  const { isAuth } = useAppSelector((state) => state.authReducer.value);
  return (
    <div className="w-full h-auto py-2 bg-zinc-900 z-10 px-2 gap-2 flex items-center fixed top-0 lg:hidden">
      <Link className="w-auto flex gap-2" href={isAuth ? "/Feed" : "/"}>
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
      </Link>
    </div>
  );
};

export default Logo;
