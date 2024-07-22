import { PostProps } from "@/app/types/posts";

export type PostItemProps = {
    post: PostProps;
    onNoteDeleted?: (id: string) => void;
    showOptions: boolean
  };
  