import { PostBodyProps } from "./types";

const PostBody = ({ children, content, title, date }: PostBodyProps) => {
  return (
    <>
      <h1 className="text-green-haze-400 font-medium text-xl iphonexr:text-2xl mt-5">
        {title}
      </h1>
      <div className="h-auto py-5  w-full border border-x-transparent border-y-zinc-400/10">
        <div className="w-full h-full text-xs iphonexr:text-sm md:text-lg px-1 md:px-4 text-white md:text-md font-light text-justify ">
          {content}
        </div>
      </div>
      <div className="flex flex-row justify-between items-center w-full px-4">
        <span className="text-green-haze-500 font-medium text-xs iphonexr:text-sm">
          {date}
        </span>
      </div>
      {children}
    </>
  );
};

export default PostBody;
