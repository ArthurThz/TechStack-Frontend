import { useController } from "react-hook-form";
import { LabeledInputProps } from "./types";

const LabeledInput = ({
  control,
  label,
  name,
  ...inputProps
}: LabeledInputProps) => {
  const {
    formState: { errors },
  } = useController({ control, name });
  return (
    <div className="w-full flex flex-col gap-2">
      <label className="text-green-haze-500 text-lg" htmlFor={name}>
        {label}
      </label>
      <input
        type="text"
        className="w-full  bg-transparent py-4 px-4 overflow-y-auto flex h-auto ring-1 text-justify rounded-md ring-zinc-400/50  outline-none text-white font-md  focus:ring-green-haze-500 focus:shadow-sm focus:shadow-green-haze-400"
        {...control.register(name, {
          required: "Campo Obrigatório",
        })}
        {...inputProps}
      />
      {errors[name] && (
        <span className="text-red-500">{errors[name].message?.toString()}</span>
      )}
    </div>
  );
};

export default LabeledInput;
