"use client";
import { useController } from "react-hook-form";
import { InputProps } from "./types";

const Input = ({ icon, name, control, type = "text", ...rest }: InputProps) => {
  const {
    formState: { errors },
  } = useController({ control, name });
  return (
    <div className="w-full flex items-center h-auto relative">
      <input
        className="w-full px-3 py-2 text-sm border-none outline-none focus-within:outline-2 focus-within:outline-green-haze-500  rounded-md bg-zinc-800 h-[40px] placeholder:text-md placeholder:text-zinc-100 text-zinc-100"
        type={type}
        {...control.register(name)}
        {...rest}
      />
      {icon && (
        <div className="h-auto w-auto flex items-center justify-center absolute right-2 text-zinc-100/70">
          {icon}
        </div>
      )}
      {errors[name] && (
        <span className="text-red-500">{errors[name].message?.toString()}</span>
      )}
    </div>
  );
};
Input.displayName = "Input";

export default Input;
