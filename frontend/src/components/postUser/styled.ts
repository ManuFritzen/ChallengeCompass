import styled from "styled-components";

export const Post = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    border: 2px solid #2E2F36;
    background: #1E1F23;
    border-radius: 16px;
    width: 100%;
    padding-bottom: 16px;

    .notImage{
        display: none;
    }
`;

export const UserPost = styled.div`
    padding: 16px 16px 0;
    display: flex;
    gap: 16px;  

`;

export const UserName = styled.div`

`;

export const PostTime = styled.p`
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    color: #75767D;
`;

export const PostText = styled.p`
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;    
    color: #FFFFFF;
    margin: 0 16px;   
`;

export const PostImage = styled.img`
    width: 100%;
    height: 300px;   
`;

export const PostButtons = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;

    img {
        width:14px;
    }
`;
export const PostButton = styled.div`
    display: flex;
`;

export const PostComment = styled.div`
    display: flex;
    margin: 0 16px;
    gap: 16px;
`;
export const PostCommentButtons = styled.div`
    display: flex ;
    justify-content: end;
    margin-right: 21px;
    margin-top: -47px;
    margin-bottom: 15px;
`;
export const PostCommentIcons = styled.div`
    display: flex;
    gap: 18px;

    img{
        width: 16px;
    }
`;

export const PostComments = styled.div`

`;

export const PostLine = styled.hr`
    border: 1px solid  #27282F;
    margin: 0 16px;
`;

export const PostTextComments = styled.p`
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;    
    color: #2D86FC;
    margin: 0 16px;
    text-align: center;
`;