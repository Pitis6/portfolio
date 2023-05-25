import styled from "styled-components"
import { Title2 } from "../common/CommonStyles"

export const Footer = () => {
    return (
        <Wrapper>
            <Title2>Full Stack Developer</Title2>
            <Ul>
                <Li></Li>
                <Li></Li>
                <Li></Li>
            </Ul>
        </Wrapper>
    )
}

const Wrapper = styled.footer`
display: flex;
justify-content: space-around;
align-items: center;
border-top: solid 1px white;
background-color: black;
color:white;
border-image-slice: 1; 
border-image-source: radial-gradient(circle at center, white, black );
`
const Ul = styled.ul`

`
const Li = styled.li`

`
