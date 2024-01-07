
export interface IButton {
    label: string;
    variant:"primary" | "secondary" ;
    classname?:string;
    onclick: () => void
}