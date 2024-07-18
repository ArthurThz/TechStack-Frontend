"use client";
import { LiaEye, LiaEyeSlash } from "react-icons/lia";
import { IInput } from "./types";

import { useForm } from "react-hook-form";
import { forwardRef } from "react";

const Input = forwardRef<HTMLInputElement, IInput>(
  ({ label, icon, name, type = "text", ...rest }, ref) => {
    return (
      <div className="w-full flex items-center h-auto relative">
        <input
          className="w-full px-3 py-2 text-sm border-none outline-none focus-within:outline-2 focus-within:outline-green-haze-500  rounded-md bg-zinc-800 h-[40px] placeholder:text-md placeholder:text-zinc-100 text-zinc-100"
          placeholder={label}
          type={type}
          name={name}
          ref={ref}
          {...rest}
        />
        {icon && (
          <div className="h-auto w-auto flex items-center justify-center absolute right-2 text-zinc-100/70">
            {icon}
          </div>
        )}
      </div>
    );
  }
);
Input.displayName = "Input";

export default Input;
