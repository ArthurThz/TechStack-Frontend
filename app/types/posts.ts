export type PostProps = {
    content: string;
    creatorid: string;
    creatorname: string;
    date: string;
    id: string;
    title: string;
    role:string
  };

export type PostsParamsProps = {
    post:PostProps
    onPostDeleted?: (id:string) => void
}