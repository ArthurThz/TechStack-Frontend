"use client";
import React, { useState } from "react";
import { AppDispatch, useAppSelector } from "@/redux/store";
import { logOut } from "@/redux/features/auth-slice";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import NavItem from "./Navitem";
import { FaDoorOpen, FaHome } from "react-icons/fa";
import { FaSquarePlus } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { IoLogOut } from "react-icons/io5";
import LogOutButton from "./LogoutButton";

const Navbar = () => {
  const router = useRouter();
  const { isAuth } = useAppSelector((state) => state.authReducer.value);

  const dispatch = useDispatch<AppDispatch>();

  const handleLogOut = () => {
    dispatch(logOut());
    router.push("/");
  };
  // lg:w-[15%] lg:left-0 lg:h-full lg:flex-col lg:justify-start lg:items-start lg:pt-40 lg:bg-transparent lg:ring-0 lg:border-r-green-haze-500 lg:border-r lg:rounded-none lg:z-10
  return (
    <>
      {isAuth && (
        <nav className="w-full rounded-tr-lg rounded-tl-lg ring-2 ring-green-haze-500/50 h-auto z-20 fixed bottom-0 bg-zinc-900 py-2 px-4 flex items-center justify-center gap-6 md:gap-10 lg:flex-col lg:static lg:h-full lg:bg-transparent lg:w-[15%] lg:ring-0 lg:border-r-green-haze-500 lg:border-r lg:rounded-none lg:pt-40 lg:justify-start lg:px-4">
          <NavItem
            href="/Feed"
            label="Home"
            icon={
              <FaHome className="text-[15px] md:text-[18px] lg:text-[24px]" />
            }
          />
          <NavItem
            href="/NewPost"
            label="Publicar"
            icon={
              <FaSquarePlus className="text-[15px] md:text-[18px] lg:text-[24px]" />
            }
          />
          <NavItem
            href="/UserProfile"
            label="Perfil"
            icon={
              <FaUser className="text-[15px] md:text-[18px] lg:text-[24px]" />
            }
          />

          <LogOutButton
            onClick={() => handleLogOut()}
            icon={
              <FaDoorOpen className="text-[15px] md:text-[18px] lg:text-[24px]" />
            }
            label="Sair"
          />
        </nav>
      )}
    </>
  );
};

export default Navbar;
