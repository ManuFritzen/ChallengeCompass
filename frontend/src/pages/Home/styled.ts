import styled  from "styled-components";

export const HomeContainer = styled.div`
    display: flex;
    background: #17181C; 
    
`;

export const HomeNav = styled.nav`
    width: 24.3%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    position: fixed;
    left: 0;
    border: 2px solid #2E2F36;
    background: #1E1F23;

    @media screen and (max-width: 900px){
        display: none;
    }
`;
export const HomeLogo = styled.img`
    width: 68.5%;
    margin: 0 auto;

`

export const HomeMain = styled.div`
    border: 2px solid #2E2F36;
    width: 75.7%;
    margin-left: 24.4%;

    @media screen and (max-width: 900px){
        width: 100%;
        margin-left: 0;
    }
    
`;

export const HomeHeader = styled.div`
    width: 100%;
    height: 73px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0% 36px;

    border: 2px solid #2E2F36;
    border-left: none;
    background: #1E1F23;
`;
export const HomeTitle = styled.p`
    color: ${({theme})=>theme.textTitle};
    align-items: center;
    img{
        margin-right: 18px;
    }
`;

export const HomeIcon = styled.img`

`;

export const HomeSection = styled.div`
    
    width: 100%;
    display: flex;

    .topics{
        width: 24.9%;
        display: flex;
        flex-direction: column;
        gap: 36px;
        margin: 36px 36px 0 0;
        
    }

    @media screen and (max-width: 1000px){
        .topics {
            display: none;
        }
    }

    .trend{
        display: flex;
        flex-direction: column;
        border: 2px solid #2E2F36;
        background: #1E1F23;
        border-radius: 16px;
        padding: 24px 20px;
        
        width: 100%;
        height: 272px;
        overflow-y: scroll;     
    }
    .trend::-webkit-scrollbar{
        display: none;
    }   
    .trend-title{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 29px;

        >p{
            font-weight: 400;
            font-size: 16px;
            line-height: 19px;
            color: #FFFFFF;            
        }

        >img{
            width: 15px;
            height: 7.5px;
            cursor: pointer;
        }
    }

    .friends{
        gap: 16px;
    }
`;

export const HomePosts = styled.div`
    display: flex;
    flex-direction: column;
    width:65.3%;
    margin: 36px 36px;
    gap: 36px;

    @media screen and (max-width: 1000px){
        width: 100%;
    }
`;