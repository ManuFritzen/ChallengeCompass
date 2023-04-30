import styled from "styled-components";

export const PublishContainer = styled.div`
    display: flex;
    flex-direction: column;
    border: 2px solid #2E2F36;
    background: #1E1F23;
    border-radius: 16px;
    padding: 16px;
    width: 100%;
    height: 125px;
`;

export const PublishUserText = styled.div`
    display: flex;
    gap: 16px;
    margin-bottom: 18px;

    :-webkit-scrollbar {
        display: none;
    }  
`;

export const PublishUserImage = styled.img`
    width: 42px;
    border-radius: 50%;
`;

export const PublishButtons = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const PublishButtonPost = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 109px;
    height: 33px;        
    border: 2px solid #27282F;
    background: none;
    border-radius: 8px;
    color: white;
    cursor: pointer;
`;

export const PublishContentIcons = styled.div`
    display: flex;
    gap: 28px;
`;


