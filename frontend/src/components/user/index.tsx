import { UserContainer,
        UserContent,
        UserImage,
} from "./styled";

interface Iprops{
    textLeft?: string | null;
    textRight?: string | null;
    src?: string ;
    alt?: string;
    class?: string;
    classImg?: string;
}

export function User(props:Iprops){
    return(
        <UserContainer >
            <UserContent className={props.class}>
                {props.textLeft}
                <UserImage
                    className={props.classImg}
                    src={props.src}
                    alt={props.alt}
                />
                {props.textRight}
            </UserContent>
        </UserContainer>
    )
}