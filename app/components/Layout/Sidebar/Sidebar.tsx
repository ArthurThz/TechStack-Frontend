import Image from "next/image";
import React from "react";

const Sidebar = () => {
  return (
    <div className="flex flex-col h-screen w-auto border-r items-center justify-between p-4 border-green-haze-500 min-w-72">
      {/* Logo */}
      <div className="flex flex-row p-4 justify-center items-center gap-4">
        <Image src="/wifi-icon.svg" alt="wifi icon" width={50} height={50} />
        <h1 className="font-medium text-white text-2xl">
          Tech<span className="text-green-haze-500">Stack</span>
        </h1>
      </div>
      {/* Buttons Container */}
      <div className="h-[80%] w-auto flex flex-col items-center justify-between   p-2">
        <div className="w-full flex flex-col gap-4 items-center">
          {/* Home / Login Button */}
          <button className="w-40 flex flex-row items-center justify-center gap-6 text-sm text-white border border-woodsmoke-800 transition ease-in-out delay-[.4ms] rounded-md h-11  hover:border-green-haze-500">
            <Image src="/home.png" alt="home icon" width={22} height={22} />
            Home
          </button>
          {/* My Posts Button */}
          <button className="w-40 flex flex-row items-center justify-center gap-6 text-sm text-white border border-woodsmoke-800 transition ease-in-out delay-[.4ms] rounded-md h-11  hover:border-green-haze-500">
            <Image src="/pencil.png" alt="pencil icon" width={22} height={22} />
            My Posts
          </button>
          {/* Profile Button */}
          <button className="w-40 flex flex-row items-center justify-center gap-6 text-sm text-white border border-woodsmoke-800 transition ease-in-out delay-[.4ms] rounded-md h-11  hover:border-green-haze-500">
            <Image src="/user.png" alt="user icon" width={22} height={22} />
            Profile
          </button>
        </div>
        {/* Exit / Sign-up Button */}
        <button className="w-40  flex flex-row items-center justify-center gap-6 text-sm text-white border border-woodsmoke-800 transition ease-in-out delay-[.4ms] rounded-md h-11  hover:border-green-haze-500">
          <Image src="/leave.png" alt="exit" width={22} height={22} />
          Exit
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
