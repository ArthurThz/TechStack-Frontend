"use client";
import { useAppSelector } from "@/redux/store";
import Welcome from "../components/pages/Home/welcome";
import Feed from "../components/pages/Home/feed";

const HomePage = () => {
  const { isAuth, nome, profissao, sobrenome, token } = useAppSelector(
    (state) => state.authReducer.value
  );

  return (
    <div className="h-full w-full flex flex-col p-3 bg-woodsmoke-950">
      {!isAuth ? <Welcome /> : <Feed />}
    </div>
  );
};

export default HomePage;
