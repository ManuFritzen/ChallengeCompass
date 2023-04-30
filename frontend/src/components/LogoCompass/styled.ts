import styled from "styled-components";

export const Container = styled.div`
    width: 50%;
    display: flex;
    justify-content: center;
    position: absolute;
    right: 0;
    top:0;
    z-index: 1;   

    img {
        width: 330px;        
    };

    @media (max-width: 1000px) {
        position: relative;
        width: 100%;
        margin: auto;
        margin-top: 15px;
        img{
            width: 250px;
        };
    };

`

