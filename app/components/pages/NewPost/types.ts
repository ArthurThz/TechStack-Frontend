import { ReactNode } from "react"

export type HeroSectionProps ={
    children:ReactNode
}
export type HeroItemProps = {
    imagePath:string,
    text:string,
    alt:string
}