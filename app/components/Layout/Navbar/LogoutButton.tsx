import { ButtonHTMLAttributes, ReactNode } from "react";

interface ILogOutButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  icon: ReactNode;
}

const LogOutButton = ({ label, icon, onClick, children }: ILogOutButton) => {
  return (
    <button
      className="w-auto text-lg font-sans font-ligh  flex flex-col items-center px-4 py-2 justify-center text-green-haze-400 hover:text-white hover:bg-green-haze-500 rounded-md transition-all lg:justify-start lg:w-full [&>span]:hover:text-white  md:[&>span]:block"
      onClick={onClick}
    >
      {icon}
      <span className="text-[12px] text-green-haze-500">{label}</span>
    </button>
  );
};

export default LogOutButton;
