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
        <nav className="w-full rounded-tr-lg rounded-tl-lg ring-2 ring-green-haze-500/50 h-auto z-20 fixed bottom-0 bg-zinc-900 py-2 px-4 flex items-center justify-center gap-6 md:gap-10 lg:w-[12%] lg:h-full lg:flex-col lg:items-center lg:bg-transparent lg:ring-0 lg:border-r-green-haze-500 lg:border-r lg:rounded-none lg:z-10">
          <NavItem
            href="/Feed"
            label="Home"
            icon={<FaHome className="w-[15px] md:w-[18px] lg:[26px]" />}
          />
          <NavItem
            href="/NewPost"
            label="Publicar"
            icon={<FaSquarePlus className="w-[15px] md:w-[18px] lg:[26px]" />}
          />
          <NavItem
            href="/UserProfile"
            label="Perfil"
            icon={<FaUser className="w-[15px] md:w-[18px] lg:[26px]" />}
          />

          <LogOutButton
            onClick={() => handleLogOut()}
            icon={<FaDoorOpen className="w-[15px] md:w-[18px] lg:[26px]" />}
            label="Sair"
          />
        </nav>
      )}
    </>
  );
};

export default Navbar;
