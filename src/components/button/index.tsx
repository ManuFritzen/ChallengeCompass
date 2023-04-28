import React from "react";
import { Buttons } from './styled'

interface Iprops{
    Text: string;
    onClick?: React.MouseEventHandler;
}


export function Button( props:Iprops ) {
    return(
        <Buttons 
            type="submit"
            onClick={props.onClick}
        >
            {props.Text}       
        </Buttons>
    ); 
}   