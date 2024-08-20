import { PostProps } from "@/app/types/posts";
import PostBody from "../body";
import PostHeader from "../header";
import PostOptions from "../post-options";
import UserPostItem from "./UserPostItem";

type userPostContainerProps = {
  posts: PostProps[];
  onNoteDeleted?: (id: string) => void;
};

const UserPostContainer = ({
  posts,
  onNoteDeleted,
}: userPostContainerProps) => {
  return (
    <div className="w-full h-full mt-4 mb-16 flex flex-col items-center gap-4 px-2 md:px-6 py-10 overflow-y-auto bg-zinc-900 lg:mb-5 lg:mt-0 lg:ml-44">
      {posts.map((post) => {
        return (
          <UserPostItem
            post={post}
            key={post.id}
            postId={post.id}
            onNoteDeleted={() =>
              onNoteDeleted ? onNoteDeleted(post.id) : null
            }
          />
        );
      })}
    </div>
  );
};

export default UserPostContainer;
