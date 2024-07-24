import { forwardRef } from "react";
import { TextAreaProps } from "./types";

const PostTextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ label, ...rest }, ref) => {
    return (
      <div className="w-full h-auto flex flex-col gap-3">
        <span className="text-green-haze-500 text-lg">{label}</span>
        <textarea
          className="resize-none bg-transparent py-4 px-2 min-h-[500px] overflow-y-auto flex h-auto w-full ring-1 rounded-md ring-zinc-400/50  outline-none text-white font-md  focus:ring-green-haze-500 focus:shadow-sm focus:shadow-green-haze-400"
          ref={ref}
          {...rest}
        />
      </div>
    );
  }
);
PostTextArea.displayName = "TextArea";

export default PostTextArea;
