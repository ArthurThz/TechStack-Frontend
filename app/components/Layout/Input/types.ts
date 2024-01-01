import { ChangeEvent } from "react";

export interface IInput {

    label:string;
    name:string;
    onChange?:any;
    type:string;
    disabled?:boolean;
    placeholder?:string;
    
}