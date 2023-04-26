import { Container } from './styled';

interface Iprops{
    title:string;
    text:string;
}

export function Header(props:Iprops ) {
    return(
        <Container>
            <h1>{props.title}</h1>
            <p>{props.text}</p>       
        </Container>
    ); 
}   