"use client";
import { useAppSelector } from "@/redux/store";
import Welcome from "../components/pages/Home/welcome";

import Header from "../components/pages/Home/header";
import HeroSection from "../components/pages/Home/hero";
import Logo from "../components/Layout/Logo";

const HomePage = () => {
  return (
    <div className="h-full w-full flex flex-col bg-zinc-900">
      <HeroSection />
    </div>
  );
};

export default HomePage;
