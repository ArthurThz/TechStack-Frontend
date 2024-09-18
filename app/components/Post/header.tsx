import { PostHeaderProps } from "./types";
import Image from "next/image";

const PostHeader = ({ imgPath, name, role }: PostHeaderProps) => {
  return (
    <div className="w-full items-start  px-4 flex md:flex-row gap-8 md:items-center text-green-haze-500 font-medium">
      <div className="w-[70px] iphonexr:w-[80px]">
        <Image
          alt="profile pic"
          src={imgPath}
          width={80}
          height={80}
          unoptimized
          className="rounded-full ring-2 shadow-lg shadow-green-haze-400/30 ring-green-haze-500"
        />
      </div>
      <div className="flex flex-col  items-start">
        <p className="text-green-haze-500 text-xl">{name}</p>
        <p className="text-white text-sm font-thin">{role}</p>
      </div>
    </div>
  );
};

export default PostHeader;
