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
import { UserAPI } from "../../api/UserApi";

let registeredUser = false;   

export function Login(){
    
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    let msgError:string = error;
    const [data, setData] = useState([]);
    
    async function handleLogin(e: { preventDefault: () => void; }) {
        
        e.preventDefault();

        if (!user || !password) {
            alert('Preencha todos os campos');
            return;
        }

        const loginResult = await UserAPI.login({ user, password });
        if (loginResult) {
            alert('USUARIO E SENHA VALIDADOS COM SUCESSO');
            window.sessionStorage.setItem("@SocialCompass.user", user);
            window.sessionStorage.setItem("@SocialCompass.jwt", loginResult);
            navigate('/home')
        } else {
            alert('USUARIO OU SENHA INCORRETOS');
        }
           
    }

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