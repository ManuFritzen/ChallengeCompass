import styled from "styled-components";

export const UserContainer = styled.div`
    .friends{
        margin-bottom: 16px;
    }
    
    .imgFriends{
        width: 32px;
    }

    .userComment{
        width: 24px;
    }
`;

export const UserContent = styled.div`
    display: flex;
    align-items: center;
    gap: 18px;
    cursor: pointer;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    color: ${({theme})=>theme.textTitle};
`; 

export const UserImage = styled.img`
    width: 42px;
    border-radius: 50%;
`;