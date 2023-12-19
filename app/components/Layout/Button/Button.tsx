import React from "react";
import { IButton } from "./types";

const Button = ({ label, variant = "primary" }: IButton) => {
  return (
    <button
      className={`w-28 p-1 text-white rounded-lg hover:bg-green-haze-500
      ${
        variant == "primary"
          ? " hover:bg-primary-btn"
          : " hover:bg-secondary-btn"
      }`}
    >
      {label}
    </button>
  );
};

export default Button;
