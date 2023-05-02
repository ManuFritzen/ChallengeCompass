import styled from "styled-components";

export const InputText = styled.textarea`
    display: flex;
    align-items: center;
    padding: 8px 24px;            
    width: 100%;
    height: 37px;
    background: #27282F;
    color: white;
    border-radius: 46px;

    overflow-y: scroll;


    ::-webkit-scrollbar{
        display: none;
    }   
`;