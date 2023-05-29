import React, {useState} from "react";
import {Container, 
    Left, 
    Form,
    Label, 
    Content,  
    ButtonText,
    ButtonStrong,
    Error,
    } from "./styled";
import { Header } from "../../components/header";
import { BackgroundImage } from "../../components/BackgroundImage";
import { Logo } from "../../components/LogoCompass";
import { Input } from "../../components/input";
import { Button } from "../../components/button";
import {Link, useNavigate} from "react-router-dom";
import Icons from "../../assets/icons/icons";
import { UserAPI } from "../../api/UserApi";



export function Register(this:any){
  const [name, setName] = useState("");
  const [user, setUser] = useState("");
  const [date, setDate] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [senhaCheck, setSenhaCheck] = useState("");
  const [error, setError] = useState("");
  const [errorUser, setErrorUser] = useState(""); 
  const navigate = useNavigate();  
  
  async function handleRegister(e: { preventDefault: () => void; }){
    e.preventDefault();
    if(user!=="admin"){
      setErrorUser("Usuário disponível")
    }
    if (!email || !senha || !senhaCheck || !name || !user || !date) {
      setError("Preencha todos os campos");
    } else  if(user === "admin"){
      setErrorUser("Usuário já existe")
      setError("escolha outro usuário")
      return;
    } else if(senha !== senhaCheck ) { 
      setError("As senhas não correspondem");
      return;
    } else {     

      const newUser = await UserAPI.register({
        name,
        user,
        birthdate: date,
        email,
        password: senha,
        profile_photo: ''
      })
      if (newUser) {
        alert("Usuário cadatrado com sucesso!");        
        navigate("/");  
        // return;
      } else {
        alert('Houve um erro ao cadastrar o usuário, verifique os dados e tente novamente');
      }
    }
  };   


    return(
        <Container>
            <Left>
            <Logo/>
                <Content>
                    <Header title="Olá," text="Por favor, registre-se para continuar"/>
                    <Form >
                        <Label>Registro</Label>
                        <Input
                          type={"text"}
                          placeholder="Nome"
                          value={name}
                          onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => 
                            setName(e.target.value)}                          
                          icon={Icons.iconName}
                          className={error==="Preencha todos os campos"&&name===""?"errorInput":"sucessInput"}
                        />
                        <Input
                          type="text"
                          placeholder="Usuário"
                          value={user}
                          onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => 
                            setUser(e.target.value)}                         
                          icon={Icons.iconUser}
                          className={
                            errorUser==="Usuário já existe" || (user===""&&error==="Preencha todos os campos")?"errorInput":"sucessInput"
                          }
                        /> 
                        <Error className={errorUser&&errorUser!=="Usuário disponível"?"":"error"} >
                            {errorUser}
                        </Error>                        
                        <Input
                          type="text"
                          placeholder="Nascimento"
                          value={date}
                          onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => {
                            setDate(e.target.value)
                          }}
                          icon={Icons.iconCake}
                          className={error==="Preencha todos os campos"&&date===""?"errorInput":"sucessInput"}
                          onFocus={(e: { target: { type: string; }; }) => (e.target.type = "date")}
                          onBlur={(e: { target: { type: string; }; }) => (e.target.type = "text")}                          
                        />
                        <Input
                          type="email"
                          placeholder="Email"
                          value={email}
                          onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => {
                            setEmail(e.target.value)
                          }}
                          icon={Icons.iconEmail}
                          className={error==="Preencha todos os campos"&&email===""?"errorInput":"sucessInput"}
                        />                        
                        <Input
                          type="password"
                          placeholder="Senha"
                          value={senha}
                          onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => {
                          setSenha(e.target.value)}}
                          icon={Icons.iconPassword}
                          className={error==="As senhas não correspondem"||(error==="Preencha todos os campos"&&senha==="")?"errorInput":"sucessInput"}
                        />
                        <Input
                          type="password"
                          placeholder="Confirmar Senha"
                          value={senhaCheck}
                          onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => {
                          setSenhaCheck(e.target.value)}}
                          icon={Icons.iconCheck}
                          className={error==="As senhas não correspondem"||(error==="Preencha todos os campos"&&senha==="")?"errorInput":"sucessInput"}
                        />
                        <Error className={error?"":"error"}>
                            {error}
                        </Error>
                        <Button Text="Registrar-se" onClick={handleRegister}/>
                        <ButtonText>
                            Já possui uma conta?                            
                            <Link to="/">
                                <ButtonStrong>Faça Login</ButtonStrong>
                            </Link>                                                     
                        </ButtonText>
                    </Form>
                </Content>                
            </Left>
        <BackgroundImage/>            
        </Container>           
    )
}