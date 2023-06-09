import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    body {
        font-family: 'Sono', sans-serif;
        display: flex;
        justify-content: space-between;
        flex-direction:column;
        background-color: black;
        color: white;
        box-sizing: border-box;
    }
`;

export const Title = styled.h1`
  color: white;
  margin: 0;
  font-weight: 300;
  font-size: 100px;
`;

export const Title2 = styled.h2`
  color: white;
  font-size: 40px;
  text-align: center;
  font-weight: 300;
`;

export const Title3 = styled.h3`
font-size: 30px;
text-align: left;
font-weight: 500;
`

export const P = styled.p`
  color: white;
  font-size: 1rem;
  font-weight: 200;
  text-align: justify;
`;

export const Button = styled.button`
  /* background:none; */
  /* border:solid 1px white; */
  /* height:50px; */
  width: 150px;
  padding: 5px;
  font-weight: 200;
  border-radius: 50px;
  font-size: 1rem;
  color: white;
  font-family: "Sono";
  background-color: rgba(85, 219, 69, 0.5);
  backdrop-filter: blur(2px);
  border: none;
  &:hover {
    background-color: rgba(85, 219, 69);
    font-weight: 600;
  }
`;
