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
      className="w-auto text-lg font-sans  flex flex-col items-center px-4 py-2 justify-center text-green-haze-500 hover:text-white hover:bg-green-haze-500 rounded-md transition-all lg:justify-start lg:w-full [&>span]:hover:text-white  md:[&>span]:block"
      href={href}
    >
      {icon}
      <span className="text-[12px]  text-green-haze-500">{label}</span>
    </Link>
  );
};

export default NavItem;
