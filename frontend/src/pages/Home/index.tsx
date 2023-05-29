import React, {useState, useEffect} from 'react';
import { HomeContainer,
        HomeNav,
        HomeLogo,
        HomeMain,
        HomeHeader,
        HomeTitle,
        HomeIcon,
        HomeSection,
        HomePosts,

} from "./styled";

import Logo from "../../assets/compass.uol_Negativo.png"
import Icons from "../../assets/icons/icons";
import { Publish } from "../../components/publish";
import { PostUser  } from "../../components/postUser";
import { User } from "../../components/user";
import { UserAPI } from '../../api/UserApi';
import { PostAPI } from '../../api/PostApi';
import { CommentAPI } from '../../api/CommentApi';
import { useNavigate } from 'react-router-dom';

interface IPosts{
    profile_photo: string | undefined;
    post_date: string | undefined;
    likes: number | undefined;
    id: number;
    user: string | undefined;        
    description: string;
    url_image:string;   

}
export function Home(){ 
    const navigate = useNavigate();
    
        
    const userLogin = window.sessionStorage.getItem("@SocialCompass.user");
    const userJWT = window.sessionStorage.getItem("@SocialCompass.jwt");

    const [userName, setUserName] = useState("");
    const [userPhoto, setUserPhoto] = useState("");
    const [textPost, setTextPost] = useState("");
    const [dataUser, setDataUser] = useState([] as { name: string, email: string, user: string, profile_photo: string }[]);
    const [dataPosts, setDataPosts] = useState<IPosts[]>([]);
    const [dataComments, setDataComments] = useState([]);
    

    const fetchUserData = async () => {
        if (!userLogin || !userJWT) {
            navigate('/');
            return;
        }    
        try {
            const users = await UserAPI.getAll();
            setDataUser(users);
            const posts = await PostAPI.getAll();
            setDataPosts(posts);
            const comments = await CommentAPI.getAll(); 
            setDataComments(comments);

            posts.map((post: { user: string; profile_photo: string; }) => {
                users.map((user: { user: string; profile_photo: string; }) => {
                    if (post.user === user.user) {
                        post.profile_photo = user.profile_photo;
                    }
                })
            })
    
            const loggedInUser = users.find((user: { email: string; }) => user.email === userLogin);
            if (loggedInUser) {
            const { name: nameUser, profile_photo: photoUser } = loggedInUser;
            setUserName(nameUser);
            setUserPhoto(photoUser);
            }
        } catch (error) {
            console.log('Erro ao buscar dados do usuário', error);
        }
        };
    
        useEffect(() => {
        fetchUserData();
    }, []);    
    
    async function SubmitPost(e: { preventDefault: () => void; }){
        e.preventDefault();
        if(textPost === ""){
            alert("Não é permitido publicações vazias!");
        } 

        const newPost = await PostAPI.newPost({
            user: userName,
            description: textPost,
            url_image: "https://st4.depositphotos.com/14431644/20230/i/600/depositphotos_202309808-stock-photo-conceptual-hand-writing-showing-example.jpg",
        }) 

        setTextPost("");        
        setDataPosts([newPost, ...dataPosts]);
    }



    
    return(
        <HomeContainer>
            <HomeNav>
                <HomeLogo src={Logo} alt="Logo compass"/>
            </HomeNav>
            <HomeMain>
                <HomeHeader>
                    <HomeTitle>
                        <HomeIcon 
                            src={Icons.iconHome} 
                            alt="Icone em formato de casa" 
                        />
                        Home
                    </HomeTitle>                    
                    <User 
                        textLeft={userName}
                        src={userPhoto}
                        alt="Foto do usuário"
                    />

            </HomeHeader>
            <HomeSection>
                <HomePosts>
                    <Publish
                        valueTextarea={textPost}
                        onchangeTextarea={(e: { target: { value: React.SetStateAction<string>; }; }) =>{ 
                        setTextPost(e.target.value)}}
                        userPhoto={userPhoto || ""}
                        onClick={SubmitPost}
                    />                    
                    {dataPosts.sort((a, b) => b.id - a.id).map(post => {
                        return (                        
                            <PostUser
                                user={dataUser.map(dataUser => dataUser.user === post.user? dataUser.name : "")}
                                post_date={post.post_date}
                                description={post.description}
                                likes={post.likes}
                                image={post.url_image}
                                imgUser={post.profile_photo}
                                imgUserComments={userPhoto || ""}
                                classImage={post.url_image===null? "notImage" :  ""}
                                amountLikes={post.likes}
                                
                            />      
                        )
                    })}
                </HomePosts>
                <div className="topics">
                    <div className="trend">
                        <div className="trend-title">
                            <p>Meus Amigos</p>
                            <img 
                                src={Icons.iconTop} 
                                alt="Icone de uma seta para cima" 
                            />
                        </div>
                        <div className="friends">
                            {dataUser.map((friends)=> {
                                return (
                                    <User class="friends" classImg="imgFriends"
                                    textRight={friends.name !== userName? friends.name : ""}
                                    src={friends.name !== userName? friends.profile_photo: ""}
                                    />            

                                )
                            })}                           
                        </div>
                    </div>

                    <div className="trend"></div>
                    <div className="trend"></div>

                </div>

            </HomeSection>

        </HomeMain>
        </HomeContainer>
    )
}


