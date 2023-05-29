import { Post,
        UserPost,
        UserName,
        PostTime,
        PostText,
        PostImage,
        PostButtons,
        PostButton,
        PostButtonText,
        PostButtonAmount,
        PostComment,
        PostCommentButtons,
        PostCommentIcons,
        PostComments,
        PostLine,
        PostTextComments,
} from "./styled";
import { User } from "../user";
import { ButtonIcon } from "../buttonIcon";
import { InputTextArea } from "../inputTextArea";
import Icons from "../../assets/icons/icons";
import { useState, useEffect } from "react";
import { UserAPI } from '../../api/UserApi';
import { PostAPI } from '../../api/PostApi';
import { CommentAPI } from '../../api/CommentApi';

interface Iprops{
    user?: string | string[];
    post_date?: string;
    description?: string;
    likes?: number;
    comentsUser?: string;
    coments ?: [];
    image?: string;
    classImage?: string;
    imgUser?: string;
    imgUserComments?: string;
    amountLikes?: number;
    amountComments?: number;
    userComments?: string;
    imgComment?: string;
}

interface IComments{
    post_id: any;    
    id: number;
    user: string | undefined;        
    comment: string;
}

interface IPosts{
    profile_photo: string | undefined;
    post_date: string | undefined;
    likes: number | undefined;
    id: number;
    user: string | undefined;        
    description: string;
    url_image:string;   

}

export function PostUser(props:Iprops){

    const [dataUser, setDataUser] = useState([] as { name: string, email: string, user: string, profile_photo: string }[]);
    const [dataPosts, setDataPosts] = useState<IPosts[]>([]);
    const [dataComments, setDataComments] = useState<IComments[]>([]);


    const fetchCommentData = async () => {
        try {
            const users = await UserAPI.getAll();
            setDataUser(users);
            const posts = await PostAPI.getAll();
            setDataPosts(posts);
            const comments = await CommentAPI.getAll(); 
            setDataComments(comments);
            
            
        } catch (error) {
            console.log('Erro ao buscar dados do usuário', error);
        }
        };
    
        useEffect(() => {
        fetchCommentData();
    }, []);    



    return(
        <Post>
            <UserPost>
                <User                    
                    src={props.imgUser}
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
            <PostImage  className={props.classImage} src={props.image} />
            <PostButtons>
                <PostButton>
                    <ButtonIcon 
                        src={Icons.iconLike}
                        alt="Icone do uma mãozinha fazendo legal"
                    />
                    <PostButtonText>
                        Curtir
                    </PostButtonText>
                    <PostButtonAmount>
                        {props.amountLikes || 0}
                    </PostButtonAmount>
                </PostButton>
                <PostButton>
                    <ButtonIcon 
                        src={Icons.iconComment}
                        alt="Icone de um balãozinho de conversa / comentário"
                    />
                    <PostButtonText>
                        Comentários
                    </PostButtonText>
                    <PostButtonAmount>
                        {props.amountComments || 0}
                    </PostButtonAmount>
                </PostButton>
                <PostButton>
                    <ButtonIcon
                        src={Icons.iconShare}
                        alt="Icone do compartilhamento"
                    />
                    <PostButtonText>
                        Compartilhar
                    </PostButtonText>
                </PostButton>
            </PostButtons>
            <PostComment>
                <User src={props.imgUserComments} alt="" />
                <InputTextArea
                    value=""
                    placeholder="O que você está pensando?"
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
            {dataComments && dataPosts && dataPosts.map(post => {
                const postComments = dataComments
                .filter(comment => comment.post_id === post.id)
                .map(comment => (
            <PostComments >
                <User
                    classImg="userComment"
                    src={dataUser.map(user => (user.user === comment.user ? user.profile_photo : ''))}
                    alt="Foto do usuário"
                />
                {comment.user + ':'}
                {comment.comment}
            </PostComments>
            ));

            return postComments;
            })}

       
            <PostLine/>
            <PostTextComments >
                Ver todos os comentários
            </PostTextComments>

        </Post>
    )
}