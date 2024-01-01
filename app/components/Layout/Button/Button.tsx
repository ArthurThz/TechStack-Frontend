import React from "react";
import { IButton } from "./types";

const Button = ({ label, variant = "primary", classname , onclick}: IButton) => {
  return (
    <button
      onClick={onclick}
      className={`w-28 p-2 text-white rounded-md transition delay-100 ease-out ${classname} 
      ${
        variant == "primary"
          ? " bg-primary-btn hover:bg-green-haze-400"
          : " border border-green-haze-500 hover:bg-woodsmoke-800"
      }`}
    >
      {label}
    </button>
  );
};

export default Button;
