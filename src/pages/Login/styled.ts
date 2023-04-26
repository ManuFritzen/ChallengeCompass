import styled from 'styled-components';


export const Container = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    //justify-content: space-between;

    @media(max-width: 1000px) {
    }
`

export const Left = styled.div`
    width: 50%;
    display: flex;
    height: 100vh;
    //justify-content: center;
    //align-items: center;
    flex-direction: column;

    @media (max-width: 1000px) {
        
        width: 100%;
        height: auto;
        margin: auto;
        gap: 5rem;
                
    }
`

export const Content = styled.div`
    width: 406px;
    margin: auto;

    @media(max-width: 1000px) {
        width: 70%;
    }
`

export const Label = styled.label`
    font-size: 32px;  
`;

export const Form = styled.form`
    width: 100%;
    display: flex;    
    flex-direction: column;
    color: white;
    gap: 24px;
    
    .error{
        display: none;
    }
`

export const ButtonText = styled.p`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    margin-bottom:20px;
`

export const ButtonStrong = styled.p`
    color: white;
    font-weight: 600;
`

export const Error = styled.p`
    display: flex;
    text-align: center;
    justify-content: center;
    font-weight: 600;
    color: ${({theme}) => theme.textError};
`;

