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
        <nav className="w-full rounded-tr-lg rounded-tl-lg ring-2 ring-green-haze-500/50 h-auto z-20 fixed bottom-0 bg-zinc-900 py-2 px-4 flex items-center justify-center gap-6 md:gap-10 lg:static  lg:w-[100px] lg:flex-col lg:justify-start">
          <NavItem href="/Feed" label="Home" icon={<FaHome size={15} />} />
          <NavItem
            href="/NewPost"
            label="Publicar"
            icon={<FaSquarePlus size={15} />}
          />
          <NavItem
            href="/UserProfile"
            label="Perfil"
            icon={<FaUser size={15} />}
          />

          <LogOutButton
            onClick={() => handleLogOut()}
            icon={<FaDoorOpen size={15} />}
            label="Sair"
          />
        </nav>
      )}
    </>
  );
};

export default Navbar;
