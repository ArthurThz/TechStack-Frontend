import { InputHTMLAttributes, ReactNode } from "react"


export interface IInput extends InputHTMLAttributes<HTMLInputElement>{
    label:string,
    icon?: ReactNode,
    type:string,
    registerName:string
}