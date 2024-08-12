import { ComponentProps, ReactNode } from "react";

export interface IButton {
    label: string;
    variant:"primary" | "secondary" ;
    classname?:string;
    onclick?: () => void,
    type?: 'submit' | 'reset' | 'button' | undefined,
    disabled?:boolean;
}

export type ConfirmButtonProps = ComponentProps<'button'> & {
    children:ReactNode;
    customClassName?:string;
}