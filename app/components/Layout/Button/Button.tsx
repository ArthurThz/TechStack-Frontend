import React from "react";
import { IButton } from "./types";

const Button = ({
  type = "button",
  label,
  variant = "primary",
  classname,
  onclick,
  disabled,
  ...rest
}: IButton) => {
  return (
    <button
      {...rest}
      disabled={disabled}
      onClick={onclick}
      type={type}
      className={`w-28 p-2 text-white rounded-md transition delay-100 ease-out ${classname} 
      ${
        variant == "primary"
          ? " bg-primary-btn hover:bg-green-haze-400 disabled:bg-green-haze-900"
          : " border border-green-haze-500 hover:bg-woodsmoke-800"
      }`}
    >
      {label}
    </button>
  );
};

export default Button;
