import PostItem from "./post-item";
import { PostProps } from "../types/posts";
import EmptyPosts from "../pages/Profile/empty-posts";

type IPostProps = {
  posts: PostProps[];
};

const PostContainer = ({ posts }: IPostProps) => {
  return (
    <div className="w-full h-auto flex  flex-col py-5 md:px-6 gap-4 items-center rounded-md transition-all">
      {posts.map((post: PostProps) => {
        const { content, creatorid, creatorname, date, id, title } = post;

        return (
          <PostItem
            creatorid={creatorid}
            creatorname={creatorname}
            id={id}
            content={content}
            title={title}
            date={date}
            key={id}
          />
        );
      })}
    </div>
  );
};

export default PostContainer;
