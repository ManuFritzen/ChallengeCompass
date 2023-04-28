import { Post,
        UserPost,
        UserName,
        PostTime,
        PostText,
        PostImage,
        PostButtons,
        PostButton,
        PostComment,
        PostCommentButtons,
        PostCommentIcons,
        PostComments,
        PostLine,
        PostTextComments,
} from "./styled";
import { User } from "../user";
import Photo from "../../assets/photoProfile.jpg"
import ImagePost from "../../assets/imagePost.png"
import { ButtonIcon } from "../buttonIcon";
import { InputTextArea } from "../inputTextArea";
import Icons from "../../assets/icons/icons";

export function PostUser(){
    return(
        <Post>
            <UserPost>
                <User                    
                    src={Photo}
                    alt="Foto do usuário"
                />
                <UserName>
                    <User textLeft="Patrícia Menezes"/>
                    <PostTime>
                        12 minutos atrás em Paisagem Exuberante
                    </PostTime>
                </UserName>                
            </UserPost>
            <PostText>
                Minha última viagem para a Ilha do Comendador, 
                um lugar simplesmente incrível, 
                natureza praticamente intocada. 
                Recomendo a todos que apreciam o mundo como ele é.
            </PostText>
            <PostImage src={ImagePost} />
            <PostButtons>
                <PostButton>
                    <ButtonIcon 
                        src={Icons.iconLike}
                        alt="Icone do uma mãozinha fazendo legal"
                    />
                </PostButton>
                <PostButton>
                    <ButtonIcon 
                        src={Icons.iconComment}
                        alt="Icone de um balãozinho de conversa / comentário"
                    />

                </PostButton>
                <PostButton>
                    <ButtonIcon
                        src={Icons.iconShare}
                        alt="Icone do compartilhamento"
                    />
                </PostButton>
            </PostButtons>
            <PostComment>
                <User src={Photo} alt="" />
                <InputTextArea
                    value=""
                    placeholder="O que você está pensando?"
                    type="textarea"
                />
            </PostComment>
            <PostCommentButtons>
                <PostCommentIcons>
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
                </PostCommentIcons>
            </PostCommentButtons>
            <PostText>
                Todos os comentários
            </PostText>
            <PostComments>

            </PostComments>
            <PostLine/>
            <PostTextComments >
                Ver todos os comentários
            </PostTextComments>

        </Post>
    )
}