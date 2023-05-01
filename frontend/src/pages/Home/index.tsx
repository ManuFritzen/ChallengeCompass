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

export function Home(){ 
    let userPhoto = window.sessionStorage.getItem("userPhoto");
    let userName = window.sessionStorage.getItem("userName");
    let userLogin = window.sessionStorage.getItem("userLogin");
    const [textPost, setTextPost] = useState("");
    const [dataUser, setDataUser] = useState([]);
    const [dataPosts, setDataPosts] = useState([]);

    useEffect(()=> {
        
        async function Registers() {
            const response = await fetch("http://localhost:3001/user");
            const jsonData = await response.json();
            setDataUser(jsonData.users); 
        }
        Registers();
    }, []);

    useEffect(()=> {
        
        async function RegistersPosts() {
            const response = await fetch("http://localhost:3001/user/post");
            const jsonData = await response.json();
            setDataPosts(jsonData.posts); 
        }
        RegistersPosts();
    }, []);

    interface IPosts{
        user: string | null;        
        description: string;
        image:string;
        imgUser: string | null;
        imgUserComments: string | null;

    }

    const [postNow, setPostNow] = useState<IPosts[]>([]);

    
    
    function SubmitPost(e: { preventDefault: () => void; }){
        e.preventDefault();
        if(textPost === ""){
            alert("Não é permitido publicações vazias!");
        } 

        const newPost =             
            {
                user: userName,
                description: textPost,
                image: "https://st4.depositphotos.com/14431644/20230/i/600/depositphotos_202309808-stock-photo-conceptual-hand-writing-showing-example.jpg",
                imgUser: userPhoto,
                imgUserComments: userPhoto,
            }
        ;

        setTextPost("");        
        setPostNow([newPost, ...postNow]);           

        console.log(postNow)
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
                        src={userPhoto || ""}
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
                    {postNow.map((post: IPosts) => (
                        <PostUser
                            user={post.user || ""}
                            description={post.description}
                            image={post.image}
                            imgUser={post.imgUser || ""}

                        />
                    ))}

                    {dataPosts.map((post:{
                        user: string;
                        post_date: string;
                        description: string;
                        likes: number;
                        url_imagem: string;     

                    }) => {
                        return(
                            
                            <PostUser
                                user={post.user}
                                post_date={post.post_date}
                                description={post.description}
                                likes={post.likes}
                                image={post.url_imagem}
                                imgUser={"https://rlv.zcache.com.br/adesivo_redondo_cara_de_sorriso_branca_emoji-rb80d4e08c0f74f7780f36f989a0d3563_0ugmp_8byvr_644.jpg"}
                                imgUserComments={userPhoto || ""}
                                classImage={post.url_imagem===undefined? "notImage" :  ""} 
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
                            {dataUser.map((friends:{
                                name: string;
                                profile_photo: string;
                            }) => {
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

function unshift(arg0: JSX.Element): React.SetStateAction<never[]> {
    throw new Error('Function not implemented.');
}
