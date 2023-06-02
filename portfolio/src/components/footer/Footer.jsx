import styled from "styled-components"
import { Title2 } from "../common/CommonStyles"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'


export const Footer = () => {
    return (
        <Wrapper>
            <Title2>Full Stack Developer</Title2>
            <Ul>
                <Li><FontAwesomeIcon icon={faEnvelope} /> felipecalvache6@gmail.com</Li>
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
list-style: none;
`
const Li = styled.li`

`
