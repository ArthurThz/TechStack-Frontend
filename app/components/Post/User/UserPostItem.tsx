import { PostProps } from "@/app/types/posts";
import PostBody from "../body";
import PostHeader from "../header";
import PostOptions from "../post-options";

type userPostItemProps = {
  post: PostProps;
  onNoteDeleted: (id: string) => void;
  postId: string;
};

const UserPostItem = ({ post, onNoteDeleted }: userPostItemProps) => {
  return (
    <div className="w-full relative h-auto px-4 py-10 flex flex-col gap-5 items-center border border-green-haze-500 rounded-md lg:w-[60%]">
      <PostHeader
        imgPath={post.profilepic}
        name={post.creatorname}
        role={post.role}
      />
      <PostBody content={post.content} date={post.date} title={post.title}>
        <PostOptions
          onNoteDeleted={() => (onNoteDeleted ? onNoteDeleted(post.id) : null)}
          postId={post.id}
        />
      </PostBody>
    </div>
  );
};

export default UserPostItem;
