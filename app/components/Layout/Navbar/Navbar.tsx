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
      className="w-[20%] py-3 px-2
      border-r items-center
     border-green-haze-500 bg-woodsmoke-950 h-screen flex  flex-col"
    >
      {/* Logo container */}
      <div className="flex  flex-row items-center gap-3">
        <Image src="/wifi-icon.svg" alt="wifi icon" height={30} width={30} />
        <h1 className="text-white font-bold text-2xl">
          Tech<span className="text-green-haze-500">Stack</span>
        </h1>
      </div>
      {/* Options container */}
      <div className="w-full h-full py-14 flex flex-col items-center  gap-3 justify-start ">
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

            <NavItem href="/MyPosts">
              <FaCommentAlt />
              My Posts
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
