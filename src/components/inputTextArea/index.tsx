import {InputText} from "./styled";

interface Iprops {
    type: React.HTMLInputTypeAttribute,
    placeholder: string,
    value: string,
    onChange?:any,
    icon?:string,
    altIcon?: string,
    className?: string,
    onFocus?: any,
    onBlur?:  any,
}


export function InputTextArea( props:Iprops){
    return(
        <InputText
            className={props.className}
            value={props.value}            
            type={props.type}
            placeholder={props.placeholder}
            onChange={props.onChange}
            onFocus={props.onFocus}
            onBlur={props.onBlur}
        />
    )
} 