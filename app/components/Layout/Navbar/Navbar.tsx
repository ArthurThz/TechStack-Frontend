"use client";
import Image from "next/image";
import React, { useState } from "react";
import { AppDispatch, useAppSelector } from "@/redux/store";
import { logOut } from "@/redux/features/auth-slice";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import NavItem from "./Navitem";
import { FaHome } from "react-icons/fa";
import { FaSquarePlus } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa";
import { FaWifi } from "react-icons/fa";
import { IoExit } from "react-icons/io5";

const Navbar = () => {
  const router = useRouter();
  const [shouldShowNavbar, setShouldShowNavbar] = useState(false);
  const { isAuth } = useAppSelector((state) => state.authReducer.value);

  const dispatch = useDispatch<AppDispatch>();

  const handleLogOut = () => {
    dispatch(logOut());
    router.push("/");
  };

  return (
    <>
      {isAuth && (
        <nav
          className="w-full bg-woodsmoke-950/90  px-2 flex py-1 z-10 md:bg-zinc-800 bottom-0 items-center justify-center fixed h-auto lg:w-[20%] lg:py-8
      lg:border-r lg:items-center lg:static 
     lg:border-r-green-haze-500 lg:h-screen lg:flex  lg:flex-col"
        >
          {/* Logo container */}
          <div className=" hidden lg:flex  lg:flex-row lg:items-center lg:gap-3">
            <Image
              src="/wifi-icon.svg"
              alt="wifi icon"
              height={30}
              width={30}
            />
            <h1 className="text-white font-bold text-2xl">
              Tech<span className="text-green-haze-500">Stack</span>
            </h1>
          </div>
          {/* Options container */}
          <div className="w-[80%] min-w-[60%] flex flex-row items-center justify-between lg:flex-col lg:items-center lg:py-16 lg:h-full lg:justify-start lg:gap-5">
            {isAuth && (
              <>
                <NavItem href="/Feed">
                  <FaHome />
                  <span>Home</span>
                </NavItem>

                <NavItem href="/NewPost">
                  <FaSquarePlus />
                  <span>Novo Post</span>
                </NavItem>

                <NavItem href="/UserProfile">
                  <FaUser />
                  <span>Perfil</span>
                </NavItem>

                <button
                  onClick={handleLogOut}
                  className="w-auto text-lg font-sans font-medium flex flex-row items-center px-4 py-2 justify-start gap-3 text-green-haze-400 hover:text-white hover:bg-green-haze-500 rounded-md transition-all [&>span]:hidden md:[&>span]:block md:justify-start md:w-full"
                >
                  <IoExit size={23} />
                  <span>Sair</span>
                </button>
              </>
            )}
          </div>
        </nav>
      )}
    </>
  );
};

export default Navbar;
