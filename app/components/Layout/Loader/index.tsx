import { AiOutlineLoading } from "react-icons/ai";

const Loader = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center">
      <AiOutlineLoading
        size={40}
        className=" text-green-haze-500 animate-spin"
      />
    </div>
  );
};

export default Loader;
