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
import { ButtonIcon } from "../buttonIcon";
import { InputTextArea } from "../inputTextArea";
import Icons from "../../assets/icons/icons";

interface Iprops{
    user?: string;
    post_date?: string;
    description?: string;
    likes?: number;
    comentsUser?: string;
    coments ?: [];
    image?: string;

}

export function PostUser(props:Iprops){
    return(
        <Post>
            <UserPost>
                <User                    
                    src={Photo}
                    alt="Foto do usuário"
                />
                <UserName>
                    <User textLeft={props.user}/>
                    <PostTime>
                        {props.post_date}
                    </PostTime>
                </UserName>                
            </UserPost>
            <PostText>
                {props.description}
            </PostText>
            <PostImage src={props.image} />
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
                {props.user + ":"} 
                {props.coments}
            </PostComments>
            <PostLine/>
            <PostTextComments >
                Ver todos os comentários
            </PostTextComments>

        </Post>
    )
}