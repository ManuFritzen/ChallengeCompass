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
    const [dataPostComments, setDataPostComments] = useState([]);
    const [postPhotoProfile, SetPostPhotoProfile] = useState([]);
    

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
                                user={post.user}
                                post_date={post.post_date}
                                description={post.description}
                                likes={post.likes}
                                image={post.url_image}
                                imgUser={post.profile_photo}
                                imgUserComments={userPhoto || ""}
                                classImage={post.url_image===null? "notImage" :  ""}
                                imgComment= {"data:image/jpeg;base64,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"}
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


