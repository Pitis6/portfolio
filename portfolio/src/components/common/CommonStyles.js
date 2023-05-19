import  styled, { createGlobalStyle }  from "styled-components";

export const GlobalStyle = createGlobalStyle`

    body {
        font-family:'Quicksand', sans-serif;
    }
`


export const Title = styled.h1`
    color: white;
    margin:0;
    font-Weight: 600;
    font-size: 100px;
`

export const Title2 = styled(Title)`
    font-size: 40px;
    font-weight: 300;
`


export const Button = styled.button`
    background:none;
    border:solid 1px white;
    height:80px;
    width:200px;
    padding:30px;
    border-radius:50px;
    font-size:16px;
    color: white;
    `