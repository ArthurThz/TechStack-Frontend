import React from "react";
import { IInput } from "./types";

const Input = ({
  label,
  name,
  onChange,
  type,
  disabled,
  placeholder,
  value,
}: IInput) => {
  return (
    <div className="w-full flex flex-col rounded-md h-auto">
      <div className=" w-full flex flex-col h-auto ">
        <label
          className="text-green-haze-300 font-bold text-lg capitalize"
          htmlFor={name}
        >
          {label}
        </label>
        <input
          className="min-w-[70%] border border-woodsmoke-950 outline-none disabled:bg-transparent disabled:border-green-haze-500 bg-woodsmoke-700 text-white h-12 rounded-md px-2 focus-within:outline-green-haze-500 "
          type={type}
          name={name}
          onChange={onChange}
          disabled={disabled}
          placeholder={placeholder}
          autoComplete="off"
          value={value}
        />
      </div>
    </div>
  );
};

export default Input;
