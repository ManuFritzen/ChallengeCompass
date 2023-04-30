import styled from 'styled-components';


export const Container = styled.div`
    width: 100%;
    background: none;
    margin-bottom: 4.3rem;

    //border: solid 1px red;

    h1{
        width: 125px;
        font-family: 'Poppins', sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 6.4rem;
        color: ${({theme}) => theme.textTitle};
    }

    p{
        width: 300px;
        font-family: 'Poppins', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        color: ${({theme}) => theme.textTitle};
        text-align: start;

        @media (max-width: 804px) {
            width: 100%;
        }
    }


`;