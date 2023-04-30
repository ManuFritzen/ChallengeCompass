import { ButtonIconContainer,
        ButtonIconImage,
} from "./styled";

interface Iprops{
    src: string;
    alt: string;

}

export function ButtonIcon(props:Iprops){
    return(
        <ButtonIconContainer >
            <ButtonIconImage
                src={props.src}
                alt={props.alt}
            />
        </ButtonIconContainer>
    )
}