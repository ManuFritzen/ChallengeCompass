import styled from "styled-components";

export const Container = styled.div`
    width: 50%;
    height: auto;
    margin-right: 0;
    display: flex;
    justify-content: center;
    position: fixed;
    right: 0;

    img {
        width: 100%;
        height: 100vh;
    }
    @media (max-width: 1000px) {
        display:none;

    }

`

