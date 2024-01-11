
export interface IButton {
    label: string;
    variant:"primary" | "secondary" ;
    classname?:string;
    onclick?: () => void,
    type?: 'submit' | 'reset' | 'button' | undefined,
    disabled?:boolean;
}