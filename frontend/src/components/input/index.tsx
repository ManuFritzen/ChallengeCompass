import React from 'react';
import { Icone } from './styled';

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

    export function Input( props:Iprops,  ){
    return(
        
        <Icone>
            <input 
                className={props.className}
                value={props.value}            
                type={props.type}
                placeholder={props.placeholder}
                onChange={props.onChange}
                onFocus={props.onFocus}
                onBlur={props.onBlur}
                
                />
                <img src={props.icon} alt={props.altIcon}/> 
        </Icone>
                
        
           
    );
}