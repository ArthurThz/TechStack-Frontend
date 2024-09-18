import { ConfirmButtonProps } from "./types";
import { FaSpinner } from "react-icons/fa";
import { twMerge } from "tailwind-merge";

const ConfirmButton = ({
  children,
  disabled,
  customClassName,
}: ConfirmButtonProps) => {
  return (
    <button
      className={twMerge(
        "px-10 w-full flex flex-row gap-4 items-center justify-center rounded-md shadow-lg shadow-green-haze-900 py-2 bg-green-haze-700 text-white font-medium hover:bg-green-haze-500  transition-all",
        customClassName
      )}
      disabled={disabled}
    >
      {disabled ? (
        <div className="w-full py-1 flex justify-center items-center animate-spin">
          <FaSpinner />
        </div>
      ) : (
        children
      )}
    </button>
  );
};

export default ConfirmButton;
