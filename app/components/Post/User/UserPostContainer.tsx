import { PostProps } from "@/app/types/posts";
import UserPostItem from "./UserPostItem";
import EmptyPosts from "./EmptyPosts";
import Loader from "../../Layout/Loader";

type userPostContainerProps = {
  posts: PostProps[];
  onNoteDeleted?: (id: string) => void;
};

const UserPostContainer = ({
  posts,
  onNoteDeleted,
}: userPostContainerProps) => {
  return (
    <div className="w-full h-full mt-4 mb-16 flex flex-col items-center gap-4 px-2 md:px-6 overflow-y-auto lg:justify-center bg-zinc-900 lg:mb-5 lg:mt-0 ">
      {posts.length === 0 && <EmptyPosts />}
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
