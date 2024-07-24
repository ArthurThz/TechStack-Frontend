import { forwardRef } from "react";
import { IInput } from "../../Layout/Input/types";

const PostInput = forwardRef<HTMLInputElement, IInput>(
  ({ label, icon, name, type = "text", ...rest }, ref) => {
    return (
      <div className="w-full h-auto flex flex-col gap-3">
        <span className="text-green-haze-500 text-lg">{label}</span>
        <input
          className="bg-transparent h-10 w-full ring-1 rounded-md ring-zinc-400/50  outline-none text-white font-md px-2  focus:ring-green-haze-500 focus:shadow-sm focus:shadow-green-haze-400"
          placeholder={label}
          type={type}
          name={name}
          ref={ref}
          {...rest}
        />
      </div>
    );
  }
);
PostInput.displayName = "Input";

export default PostInput;
