import { PostProps } from "@/app/types/posts";

export interface IPostContainer {
    posts:PostProps[],
    showOptions?:boolean,
    onNoteDeleted?: (id:string) => void
    
}

