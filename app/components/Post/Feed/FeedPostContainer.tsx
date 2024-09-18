import { PostProps } from "@/app/types/posts";
import FeedPostItem from "./FeedPostItem";

type FeedPostContainerProps = {
  posts: PostProps[];
};
const FeedPostContainer = ({ posts }: FeedPostContainerProps) => {
  return (
    <div className="w-full  h-full mt-4 mb-16 flex flex-col items-center gap-4 px-2 md:px-6 py-10 overflow-y-auto bg-zinc-900 lg:justify-center  ">
      {posts.map((post) => {
        return <FeedPostItem post={post} key={post.id} />;
      })}
    </div>
  );
};

export default FeedPostContainer;
