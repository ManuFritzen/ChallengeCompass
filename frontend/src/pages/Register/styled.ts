import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: space-between;
`;

export const Left = styled.div`
    width: 50%;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: auto;

    @media (max-width: 1000px) {
        width: 100%;        
        margin: auto;   
        height: auto;
    }

    //border: 1px solid red;
`;

export const Content = styled.div`
    width: 406px;    
    margin-bottom:43px;
    height: auto;

    @media(max-width: 1000px) {
        width: 70%;
    }
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
    
`;
export const Label = styled.label`
    font-size: 32px;
`;

export const ButtonText = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    margin-bottom:20px;

`;

export const ButtonStrong = styled.p`
    color: white;
    font-weight: 600;

`;
export const Error = styled.div`
    
    display: flex;
    text-align: center;
    justify-content:center;
    font-weight: 600;
    color: ${({theme}) => theme.textError};
`;



