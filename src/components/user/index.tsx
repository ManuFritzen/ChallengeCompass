import { UserContainer,
        UserImage,
} from "./styled";

interface Iprops{
    textLeft?: string;
    textRight?: string;
    src?: string;
    alt?: string;
}

export function User(props:Iprops){
    return(
        <UserContainer>
            {props.textLeft}
            <UserImage
                src={props.src}
                alt={props.alt}
            />
            {props.textRight}
        </UserContainer>
    )
}