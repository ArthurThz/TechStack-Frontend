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
      className="w-full text-lg font-sans font-medium flex flex-row items-center px-12 py-2 justify-start gap-3 text-green-haze-400 hover:text-white hover:bg-green-haze-500 rounded-md transition-all"
    >
      {children}
    </Link>
  );
};

export default NavItem;
