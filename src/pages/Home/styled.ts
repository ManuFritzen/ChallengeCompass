import styled  from "styled-components";

export const Container = styled.div`
    width: 100vw;
    display: flex;

    nav{
        border: 3px solid red;

        width: 24.3%;
    }

    main{
        border: 3px solid green;
        width: 75.7%;
    }

    header{
        border: 2px solid blue;
        height: 73px;
    }

    section {
        width: 100% ;

        display: flex;
    }

    .posts{
        width: 75%;
    }

    .write-field{
        border: 2px solid yellow;
        width: 710px;
        height: 120px;
        margin: 36px auto;
    }

    .post{
        border: 2px solid yellow;
        width: 710px;
        height: 709px;
        margin: 36px auto;
    }

    .topics{
        width: 25%;
    }

    .trend{
        border: 2px solid yellow;

        width: 272px;
        height: 272px;
        margin: 36px auto;
    }
`