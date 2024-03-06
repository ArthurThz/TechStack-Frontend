"use client";
import { useAppSelector } from "@/redux/store";
import Welcome from "../components/pages/Home/welcome";
import Feed from "../components/pages/Home/feed";
import Header from "../components/pages/Home/header";
import HeroSection from "../components/pages/Home/hero";

const HomePage = () => {
  const { isAuth, nome, profissao, sobrenome, token } = useAppSelector(
    (state) => state.authReducer.value
  );

  return (
    <div className="h-full w-full flex flex-col bg-zinc-900">
      <Header />
      <HeroSection />
    </div>
  );
};

export default HomePage;
