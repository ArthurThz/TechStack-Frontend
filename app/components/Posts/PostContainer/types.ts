import { PostProps } from "@/app/types/posts";

export interface IPostContainer {
    posts:PostProps[],
    type:"user"|"feed"
    
}

