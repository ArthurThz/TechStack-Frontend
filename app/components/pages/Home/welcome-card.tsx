import { ReactNode } from "react";

type CardProps = {
  content: string;
  icon: ReactNode;
};

const WelcomeCard = ({ content, icon }: CardProps) => {
  return (
    <div className="w-[300px] h-[300px] ring-2 py-10 px-4 gap-10 ring-green-haze-500 flex flex-col items-center text-center rounded-md shadow-sm shadow-green-haze-500 group hover:shadow-md hover:shadow-green-haze-300 transition-all">
      <div className="text-green-haze-500 flex items-center justify-center w-full transition-all group-hover:text-green-haze-300  ">
        {icon}
      </div>

      <p className="text-white/90 text-sm group-hover:text-green-haze-200 font-medium leading-8">
        {content}
      </p>
    </div>
  );
};

export default WelcomeCard;
