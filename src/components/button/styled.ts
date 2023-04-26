import styled from 'styled-components';

export const Buttons = styled.button`
    height: 62px;
    border: 1px solid ${({theme}) => theme.buttonOrangeLight};
    border-radius: 46px;
    background: linear-gradient(180deg, ${({theme}) => theme.buttonOrangeDark} 0%,${({theme}) => theme.buttonOrangeLight} 100%);
    color: white;
    font-weight: 600;

    cursor: pointer;   
`;