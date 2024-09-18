"use client";

import HeroSection from "../components/pages/Home/hero";
import { useEffect } from "react";
import Cookies from "js-cookie";
import jwt, { JwtPayload } from "jsonwebtoken";
import { headers } from "next/headers";
import { AppDispatch, useAppSelector } from "@/redux/store";
import { useDispatch } from "react-redux";
import { logIn } from "@/redux/features/auth-slice";
import { useRouter } from "next/navigation";

const HomePage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  useEffect(() => {
    const verifyIfUserIsLogged = () => {
      const token = Cookies.get("auth-token");

      if (!token) return;

      const decodedToken = jwt.decode(token) as JwtPayload;

      const authUser = {
        id: decodedToken.id,
        token: token,
      };
      dispatch(logIn(authUser));
      router.push("/Feed");
    };

    verifyIfUserIsLogged();
  }, []);
  return (
    <div>
      <HeroSection />
    </div>
  );
};

export default HomePage;
