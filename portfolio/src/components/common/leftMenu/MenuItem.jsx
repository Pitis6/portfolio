import styled from "styled-components"
import { P } from "../CommonStyles"


export const MenuItem = ({item}) => {
    return (
        <Wrapper>
            <P>{item}</P>
        </Wrapper>
    )
}

const Wrapper = styled.div`
padding: 5px;
/* padding-right: 20px; */
/* padding-left: 100px; */
/* border-radius: 0 10px 10px 0; */
/* border-right: solid 1px white; */
/* transition: border 1s linear; */
&:hover{
    /* transform: scale(1.01); */
    /* transform-origin: left; */
    border-top: solid 1px white;
    border-bottom: solid 1px white;
}
`