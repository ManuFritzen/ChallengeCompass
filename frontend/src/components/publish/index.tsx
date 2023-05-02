import {PublishContainer,
        PublishUserText,
        PublishUserImage,
        PublishButtons,
        PublishButtonPost,
        PublishContentIcons,
} from "./styled";

import Icons from "../../assets/icons/icons";
import Photo from "../../assets/photoProfile.jpg";
import { InputTextArea } from "../inputTextArea";
import { ButtonIcon } from "../buttonIcon";

interface Iprops{
    userPhoto: string;
    valueTextarea: string;
    onchangeTextarea: any; 
    onClick?: React.MouseEventHandler;


}

export function Publish(props: Iprops){
    return(
        <PublishContainer>
        <PublishUserText>
            <PublishUserImage src={props.userPhoto} alt="" />
            <InputTextArea
                value={props.valueTextarea}
                placeholder="No que você está pensando?"
                onChange={props.onchangeTextarea}
            />
        </PublishUserText>
        <PublishButtons>
            <PublishContentIcons>
                <ButtonIcon 
                    src={Icons.iconPhoto} 
                    alt={"Icone de câmera fotográfica"} 
                />
                <ButtonIcon 
                    src={Icons.iconImage} 
                    alt={"Icone de uma foto/imagem"} 
                />
                <ButtonIcon
                    src={Icons.iconAttach} 
                    alt={"Icone de um clipes para anexo"} 
                />
                <ButtonIcon 
                    src={Icons.iconMap} 
                    alt={"Icone de um localizador de mapa"} 
                />
                <ButtonIcon 
                    src={Icons.iconEmoji} 
                    alt={"Icone de um smile / emoji"} 
                />
            </PublishContentIcons>
            <PublishButtonPost type="submit" onClick={props.onClick}>
                Postar
            </PublishButtonPost>
        </PublishButtons>

    </PublishContainer>
        
    )
}
