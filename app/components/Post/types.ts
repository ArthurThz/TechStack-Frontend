import { ReactNode } from "react"

export type PostHeaderProps = {
    imgPath:string,
    name:string,
    role:string
}

export type PostBodyProps = {
    children?:ReactNode,
    content:string,
    title:string,
    date:string
}

export type PostOptionsProps ={
    onNoteDeleted: (id:string) => void,
    postId:string
}