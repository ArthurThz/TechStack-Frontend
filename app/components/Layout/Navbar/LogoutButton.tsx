import { ButtonHTMLAttributes, ReactNode } from "react";

interface ILogOutButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  icon: ReactNode;
}

const LogOutButton = ({ label, icon, onClick, children }: ILogOutButton) => {
  return (
    <button
      className="w-auto text-lg font-sans  flex flex-col items-center px-4 py-2 justify-center text-green-haze-500 hover:text-white hover:bg-green-haze-500 rounded-md transition-all  lg:w-full [&>span]:hover:text-white  md:[&>span]:block lg:flex-row lg:items-center lg:justify-between lg:gap-4 lg:relative"
      onClick={onClick}
    >
      <div className="lg:absolute lg:left-2">{icon}</div>
      <span className="text-[12px] lg:text-[18px] lg:ml-8  text-green-haze-500">
        {label}
      </span>
    </button>
  );
};

export default LogOutButton;
