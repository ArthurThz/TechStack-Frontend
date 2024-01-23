import Image from "next/image";
import React from "react";
import Button from "../Button/Button";
import Link from "next/link";

const Navbar = () => {
  const isAuth = false;
  return (
    <nav
      className="w-[25%] p-6 
      border-r items-center
     border-green-haze-500 bg-woodsmoke-950 h-screen flex justify-between flex-col"
    >
      {/* Logo container */}
      <div className="flex  flex-row items-center gap-3">
        <Image src="/wifi-icon.svg" alt="wifi icon" height={30} width={30} />
        <h1 className="text-white font-bold text-2xl">
          Tech<span className="text-green-haze-500">Stack</span>
        </h1>
      </div>
      {/* Options container */}
      <div className="w-full h-full py-14 flex flex-col items-center p-4 gap-2 justify-between ">
        {isAuth ? (
          <>
            <div className="h-auto flex flex-col items-center gap-3">
              <Link
                href="/"
                className="w-32 h-auto border border-woodsmoke-900 text-white justify-center p-1  rounded-md flex flex-row items-center gap-4 hover:border-green-haze-500 transition-all delay-100 ease-in-out "
              >
                Home
              </Link>
              <Link
                href="/MyPosts"
                className="w-32 h-auto border border-woodsmoke-900 text-white justify-center p-1  rounded-md flex flex-row items-center gap-4 hover:border-green-haze-500 transition-all delay-100 ease-in-out "
              >
                My Posts
              </Link>
              <Link
                href="/UserProfile"
                className="w-32 h-auto border border-woodsmoke-900 text-white justify-center p-1  rounded-md flex flex-row items-center gap-4 hover:border-green-haze-500 transition-all delay-100 ease-in-out "
              >
                Profile
              </Link>
            </div>
            <button className="w-32 h-auto border border-woodsmoke-900 text-white justify-center p-1  rounded-md flex flex-row items-center gap-4 hover:border-green-haze-500 transition-all delay-100 ease-in-out ">
              Exit
            </button>
          </>
        ) : (
          <>
            <div className="h-auto flex flex-col items-center gap-3">
              <Link
                href="/"
                className="w-32 h-auto border border-woodsmoke-900 text-white justify-center p-1  rounded-md flex flex-row items-center gap-4 hover:border-green-haze-500 transition-all delay-100 ease-in-out "
              >
                Home
              </Link>
              <Link
                href="/LogIn"
                className="w-32 h-auto border border-woodsmoke-900 text-white justify-center p-1  rounded-md flex flex-row items-center gap-4 hover:border-green-haze-500 transition-all delay-100 ease-in-out "
              >
                Login
              </Link>
              <Link
                href="/SignUp"
                className="w-32 h-auto border border-woodsmoke-900 text-white justify-center p-1  rounded-md flex flex-row items-center gap-4 hover:border-green-haze-500 transition-all delay-100 ease-in-out "
              >
                Sign Up
              </Link>
            </div>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
