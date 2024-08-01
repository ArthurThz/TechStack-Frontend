"use client";
import { useAppSelector } from "@/redux/store";
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  const { isAuth } = useAppSelector((state) => state.authReducer.value);
  return (
    <div
      className={`w-full h-auto py-2 bg-zinc-900 z-10 px-2 gap-2 flex items-center fixed top-0 lg:bg-transparent lg:px-4 lg:z-20  `}
    >
      <Link
        className="w-auto flex items-center gap-2"
        href={isAuth ? "/Feed" : "/"}
      >
        <div className="w-[25px] lg:w-[40px]">
          <Image
            alt="tech stack logo"
            width={300}
            height={300}
            src="./wifi-icon.svg"
          />
        </div>

        <h1 className="text-white text-lg font-bold lg:text-2xl">
          Teck<span className="text-green-haze-500">Stack</span>
        </h1>
      </Link>
    </div>
  );
};

export default Logo;
