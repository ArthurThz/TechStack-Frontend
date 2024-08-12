import { ComponentProps, InputHTMLAttributes, ReactNode } from "react"
import { Control } from "react-hook-form";


export type InputProps = ComponentProps<'input'> & {
    control:Control<any>
    icon?: ReactNode,
    name:string,
   
    
}

export type PasswordInputProps = ComponentProps<'input'> & {
    control:Control<any>
    name:string,
    showPasswordIcon:ReactNode;
    hidePasswordIcon:ReactNode;
}

export type postTextAreaProps = ComponentProps<'textarea'> & {
    control:Control<any>;
    label:string;
    name:string;
}