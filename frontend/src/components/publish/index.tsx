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
}

export function Publish(props: Iprops){
    return(
        <PublishContainer>
        <PublishUserText>
            <PublishUserImage src={props.userPhoto} alt="" />
            <InputTextArea
                value=""
                placeholder="No que você está pensando?"
                type="textarea"
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
            <PublishButtonPost type="submit">
                Postar
            </PublishButtonPost>
        </PublishButtons>

    </PublishContainer>
        
    )
}
