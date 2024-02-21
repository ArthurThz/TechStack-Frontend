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
import { FaCommentAlt } from "react-icons/fa";
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
    <nav
      className="w-full px-2 flex py-1  bg-woodsmoke-950 bottom-0 items-center justify-center fixed h-auto md:w-[20%] md:py-8
      md:border-r md:items-center md:static 
     md:border-r-green-haze-500 md:h-screen md:flex  md:flex-col"
    >
      {/* Logo container */}
      <div className=" hidden md:flex  md:flex-row md:items-center md:gap-3">
        <Image src="/wifi-icon.svg" alt="wifi icon" height={30} width={30} />
        <h1 className="text-white font-bold text-2xl">
          Tech<span className="text-green-haze-500">Stack</span>
        </h1>
      </div>
      {/* Options container */}
      <div className="w-auto min-w-[60%] flex flex-row items-center justify-between md:flex-col md:items-center md:py-16 md:h-full md:justify-start md:gap-5">
        {isAuth ? (
          <>
            <NavItem href="/">
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
              className="w-auto text-lg font-sans font-medium flex flex-row items-center px-4 py-2 justify-start gap-3 text-green-haze-400 hover:text-red-700 hover:bg-green-haze-500 rounded-md transition-all [&>span]:hidden md:[&>span]:block md:justify-start md:w-full"
            >
              <IoExit size={23} />
              <span>Exit</span>
            </button>
          </>
        ) : (
          <>
            <NavItem href="/">
              <FaHome />
              <span> Home</span>
            </NavItem>
            <NavItem href="/LogIn">
              <FaWifi />
              <span>Login</span>
            </NavItem>
            <NavItem href="/SignUp">
              <FaUserPlus />
              <span>Cadastro</span>
            </NavItem>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
