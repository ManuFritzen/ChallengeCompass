import { createGlobalStyle } from 'styled-components';


export const Global = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        border: none;
        box-sizing: border-box;
        font-size: 100%;
        font-family: 'Poppins', sans-serif;      
    }    
    html,
    body,
    #root {
        height: 100vh;
        overflow: auto;
        background: linear-gradient(to bottom, ${({theme}) => theme.primaryGray} 0%, ${({theme}) => theme.primaryDark} 100%);

    }   
    a {
        text-decoration: none;
    }
`;


export default Global;