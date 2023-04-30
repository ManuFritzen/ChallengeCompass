import {Container} from './styled'
import ImageComputer from "../../assets/side_image.png"

export function BackgroundImage( ) {
    return(
        <Container>            
            <img className="imgBackground" src={ImageComputer} alt="Imagem de um computador ao lado esquerdo da tela" />
        </Container>
    ); 
}   