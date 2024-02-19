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

const Navbar = () => {
  const router = useRouter();

  const { isAuth } = useAppSelector((state) => state.authReducer.value);

  const dispatch = useDispatch<AppDispatch>();

  const handleLogOut = () => {
    dispatch(logOut());
    router.push("/");
  };

  return (
    <nav
      className=" w-full border border-green-haze-500 bottom-0 fixed h-14 md:w-[20%] md:py-3 md:px-2
      md:border-r md:items-center
     md:border-green-haze-500 md:bg-woodsmoke-950 md:h-screen md:flex  md:flex-col"
    >
      {/* Logo container */}
      <div className=" hidden md:flex  md:flex-row md:items-center md:gap-3">
        <Image src="/wifi-icon.svg" alt="wifi icon" height={30} width={30} />
        <h1 className="text-white font-bold text-2xl">
          Tech<span className="text-green-haze-500">Stack</span>
        </h1>
      </div>
      {/* Options container */}
      <div className="w-full h-full py-14 font-medium flex flex-col items-center  gap-3 justify-start ">
        {isAuth ? (
          <>
            <NavItem href="/">
              <FaHome />
              Home
            </NavItem>

            <NavItem href="/">
              <FaSquarePlus />
              New Post
            </NavItem>

            <NavItem href="/UserProfile">
              <FaUser />
              Profile
            </NavItem>

            <button
              onClick={handleLogOut}
              className="w-32 h-auto border border-woodsmoke-900 text-white justify-center p-1  rounded-md flex flex-row items-center gap-4 hover:border-green-haze-500 transition-all delay-100 ease-in-out "
            >
              Exit
            </button>
          </>
        ) : (
          <>
            <div className="h-auto flex flex-col items-center gap-3">
              <NavItem href="/">
                <FaHome />
                Home
              </NavItem>
              <NavItem href="/LogIn">
                <FaWifi />
                Login
              </NavItem>
              <NavItem href="/SignUp">
                <FaUserPlus />
                Sign Up
              </NavItem>
            </div>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
