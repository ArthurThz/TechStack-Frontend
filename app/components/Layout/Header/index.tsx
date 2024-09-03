"use client";
import { useAppSelector } from "@/redux/store";
import Navbar from "../Navbar/Navbar";
import Image from "next/image";
import Link from "next/link";
import { TbLogin2 } from "react-icons/tb";
const Header = () => {
  const { isAuth } = useAppSelector((state) => state.authReducer.value);

  return (
    <>
      {isAuth ? (
        <>
          <Navbar />
        </>
      ) : (
        <header className="absolute px-4 md:px-10 py-5 h-auto w-full top-0 z-20 right-0 left-0 flex flex-row items-center justify-between bg-transparent">
          <Link
            href="/"
            className="flex gap-4 flex-row items-center px-1 mb-auto md:px-5 justify-center"
          >
            <Image
              src="/wifi-icon.svg"
              width={30}
              height={30}
              alt="wifi icon"
            />
            <h1 className="text-white  text-xl md:text-2xl font-bold">
              Tech<span className="text-green-haze-500">Stack</span>
            </h1>
          </Link>
          <div></div>
        </header>
      )}
    </>
  );
};

export default Header;
