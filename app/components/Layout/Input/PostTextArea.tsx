import { useController } from "react-hook-form";
import { postTextAreaProps } from "./types";

const PostTextArea = ({
  label,
  control,
  name,
  ...textAreaProps
}: postTextAreaProps) => {
  const {
    formState: { errors },
  } = useController({ control, name });
  return (
    <div className="w-full flex flex-col gap-2">
      <label className="text-green-haze-500 text-lg">{label}</label>
      <textarea
        className="resize-none bg-transparent py-4 px-4 min-h-[500px] overflow-y-auto flex h-auto w-full ring-1 text-justify rounded-md ring-zinc-400/50  outline-none text-white font-md  focus:ring-green-haze-500 focus:shadow-sm focus:shadow-green-haze-400"
        {...control.register(name)}
        {...textAreaProps}
      />
    </div>
  );
};

export default PostTextArea;
