import { PostProps } from "@/app/types/posts";
import PostHeader from "../header";
import PostBody from "../body";

type FeedPostItemProps = {
  post: PostProps;
};
const FeedPostItem = ({ post }: FeedPostItemProps) => {
  return (
    <div className="w-full relative h-auto px-4 py-10 flex flex-col gap-5 items-center border border-green-haze-500 rounded-md lg:w-[60%]">
      <PostHeader
        imgPath={post.profilepic}
        name={post.creatorname}
        role={post.role}
      />
      <PostBody content={post.content} date={post.date} title={post.title} />
    </div>
  );
};

export default FeedPostItem;
