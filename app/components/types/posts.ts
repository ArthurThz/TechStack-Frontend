export type PostProps = {
    id: string;
    creatorid: string;
    creatorname: string;
    title: string;
    content: string;
    date: string;
    
}

export type PostsParamsProps = {
    post:PostProps
    onPostDeleted?: (id:string) => void
}