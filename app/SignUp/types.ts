export interface IChangeEvent { 
    event?:React.ChangeEvent<HTMLTextAreaElement>,
    target:HTMLInputElement;
}

export interface ISubmitEvent { 
    event?:React.FormEvent<HTMLFormElement>
}