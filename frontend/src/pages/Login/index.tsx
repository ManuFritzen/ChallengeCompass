import React, {useState, useEffect} from "react";
import {
    Container, 
    Left, 
    Form, 
    Content, 
    Label,
    ButtonText,
    ButtonStrong,
    Error,
} from "./styled";
import { Header } from "../../components/header";
import { BackgroundImage } from "../../components/BackgroundImage";
import { Logo } from "../../components/LogoCompass";
import {Input} from "../../components/input";
import { Button } from "../../components/button";
import {Link, useNavigate} from "react-router-dom";
import Icons from "../../assets/icons/icons";

let registeredUser = false;   

export function Login(){
    
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    let msgError:string = error;
    const [data, setData] = useState([]);
    
    
    useEffect(()=> {
        
        async function Registers() {
            const response = await fetch("http://localhost:3001/user");
            const jsonData = await response.json();
            setData(jsonData.users); 
        }
        Registers();
    }, []);
    
    
    function handleLogin(e: { preventDefault: () => void; },){  
        e.preventDefault();
        
        data.map((userData: {
            profile_photo: string;
            name: string;        
            email: string; 
            password: string; 
        }) => {
            
            for(let i = 0; i < data.length; i++) {
                if(user === userData.email && password === userData.password){
                    registeredUser = true;
                    window.sessionStorage.setItem("userLogin", user);
                    window.sessionStorage.setItem("userName", userData.name);
                    window.sessionStorage.setItem("userPhoto", userData.profile_photo);

                    break;                      
                }
            }         
            
            return registeredUser;
        })
        
        if (!user && !password) {
            setError("Informe seu usuário e senha");            
            //return          
        } else if (!user){
            setError("Preencha todos campos")            
            //e.preventDefault();
            //alert("passei por aqui")
            //return
        } else if (!password){
            setError("Preencha todos campos")            
            //e.preventDefault();
            //alert("passei por aqui")
        } else if(registeredUser === false) {
            setError(`Usuário e/ou senha inválidos. Por favor, tente novamente`)         
        } else {
            alert("logado com sucesso");
            navigate("/home");
        }

        e.preventDefault();
    };

    return(
        <Container>
            <Left>
                <Logo/>
                <Content>
                    <Header title="Olá," text="Para continuar navegando de forma segura, efetue o login"/>
                    <Form>
                        <Label>Login</Label>
                        <Input
                            type={"text"}
                            placeholder="Usuário" 
                            value={user}
                            onChange={(e: { target: { value: React.SetStateAction<string>; }; }) =>{
                            setUser(e.target.value)}}
                            icon={Icons.iconName}
                            altIcon="ícone do input do usuário"
                            className={error?"errorInput":"sucessInput"}                           
                        />
                        <Input
                            type="password"
                            placeholder="Senha" 
                            value={password}
                            onChange={(e: { target: { value: React.SetStateAction<string>; }; }) =>{ 
                            setPassword(e.target.value)}}
                            icon={Icons.iconPassword}
                            altIcon="ícone do input do usuário"
                            className={error?"errorInput":"sucessInput"}
                        />                       
                        <Error className={error?"":"error"}>
                            {error}                                                     
                        </Error>
                        <Button Text="Entrar" onClick={handleLogin}/>
                        <ButtonText>
                            Novo por aqui?                            
                        <Link to="/register">
                            <ButtonStrong>Registre-se</ButtonStrong>
                        </Link>                                                       
                        </ButtonText>                           
                    </Form>
                </Content>                
            </Left>
        <BackgroundImage/>            
        </Container>
    )  
}