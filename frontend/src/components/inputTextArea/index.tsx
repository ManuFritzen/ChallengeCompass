import {InputText} from "./styled";

interface Iprops {
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
            placeholder={props.placeholder}
            onChange={props.onChange}
            onFocus={props.onFocus}
            onBlur={props.onBlur}
        />
    )
} 