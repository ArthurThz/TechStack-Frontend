import Link from "next/link";
import React, { ReactNode } from "react";

type NavItemProps = {
  href: string;

  icon?: ReactNode;
  label: string;
};

const NavItem = ({ label, icon, href }: NavItemProps) => {
  return (
    <Link
      className="w-auto text-lg font-sans  flex flex-col items-center px-4 py-2 justify-center text-green-haze-500 hover:text-white hover:bg-green-haze-500 rounded-md transition-all lg:h-auto lg:w-[100%] [&>span]:hover:text-white  md:[&>span]:block lg:flex-row lg:items-center lg:justify-between lg:gap-4 lg:relative"
      href={href}
    >
      <div className="lg:absolute lg:left-2">{icon}</div>
      <span className="text-[12px] lg:text-[18px] lg:ml-8  text-green-haze-500">
        {label}
      </span>
    </Link>
  );
};

export default NavItem;
