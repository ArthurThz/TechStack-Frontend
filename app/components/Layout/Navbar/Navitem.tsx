import Link from "next/link";
import React, { ReactNode } from "react";

type NavItemProps = {
  children: ReactNode;
  href: string;
};

const NavItem = ({ children, href }: NavItemProps) => {
  return (
    <Link
      href={href}
      className="w-auto text-lg font-sans font-medium flex flex-row items-center px-4 py-2 justify-start gap-3 text-green-haze-400 hover:text-white hover:bg-green-haze-500 rounded-md transition-all md:justify-start md:w-full [&>span]:hidden md:[&>span]:block"
    >
      {children}
    </Link>
  );
};

export default NavItem;
