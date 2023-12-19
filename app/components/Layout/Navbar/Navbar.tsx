import Image from "next/image";
import React from "react";
import Button from "../Button/Button";

const Navbar = () => {
  return (
    <nav className="w-full p-6 bg-woodsmoke-950 h-[20%] flex flex-row justify-between">
      {/* Icon and Title container */}
      <div className="w-auto flex flex-row gap-4 items-center justify-center ">
        <Image src="./wifi-icon.svg" width={40} height={40} alt="wifi icon" />
        <h1 className="text-xl text-white font-medium">
          Tech<span className="text-green-haze-500">Stack</span>
        </h1>
      </div>
      {/* Sign-up and Login button */}
      <div className="flex flex-row gap-2 justify-center">
        <Button label="Cadastrar" variant="secondary" />
        <Button label="Login" />
      </div>
    </nav>
  );
};

export default Navbar;
