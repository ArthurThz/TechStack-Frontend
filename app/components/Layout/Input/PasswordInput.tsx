"use client";

import { useState } from "react";
import { PasswordInputProps } from "./types";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useController } from "react-hook-form";

const PasswordInput = ({
  hidePasswordIcon,
  showPasswordIcon,
  control,
  name,
  ...inputProps
}: PasswordInputProps) => {
  const {
    formState: { errors },
  } = useController({ control, name });
  const defaultPasswordType = {
    type: "password",
    icon: hidePasswordIcon,
  };
  const [isPasswordVisible, setIsPasswordVisible] =
    useState(defaultPasswordType);

  const changePasswordVisibility = () => {
    isPasswordVisible.type === "password"
      ? setIsPasswordVisible({
          type: "text",
          icon: showPasswordIcon,
        })
      : setIsPasswordVisible(defaultPasswordType);
  };
  return (
    <div className="w-full flex items-center h-auto relative">
      <input
        className="w-full px-3 py-2 text-sm border-none outline-none focus-within:outline-2 focus-within:outline-green-haze-500  rounded-md bg-zinc-800 h-[40px] placeholder:text-md placeholder:text-zinc-100 text-zinc-100"
        type={isPasswordVisible.type}
        {...control.register(name)}
        {...inputProps}
      />

      <div
        className="h-full w-auto flex items-center justify-center absolute right-2 text-zinc-100/70 hover:cursor-pointer"
        onClick={() => changePasswordVisibility()}
      >
        {isPasswordVisible.icon}
      </div>
      {errors[name] && (
        <span className="text-red-500">{errors[name].message?.toString()}</span>
      )}
    </div>
  );
};

export default PasswordInput;
