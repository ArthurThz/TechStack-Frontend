import PostItem from "./post-item";
import { PostProps } from "../../types/posts";
import EmptyPosts from "./empty-posts";
import { useEffect } from "react";

type IPostProps = {
  posts: PostProps[];
};

const PostContainer = ({ posts }: IPostProps) => {
  return (
    <div className="w-full h-full flex flex-col py-5 px-6 gap-4 items-center rounded-md transition-all">
      {posts.length > 0 ? (
        posts.map((post: PostProps) => {
          const { content, creatorid, creatorname, date, id, title } = post;

          return (
            <PostItem
              creatorid=""
              creatorname=""
              id=""
              content={content}
              title={title}
              date={date}
              key={id}
            />
          );
        })
      ) : (
        <EmptyPosts />
      )}
    </div>
  );
};

export default PostContainer;
