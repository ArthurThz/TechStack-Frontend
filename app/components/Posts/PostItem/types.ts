import { PostProps } from "@/app/types/posts";

export type PostItemProps = {
    post: PostProps;
    type: "user" | "feed";
    onNoteDeleted?: (id: string) => void;
  };
  