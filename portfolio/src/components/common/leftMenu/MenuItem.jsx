import styled from "styled-components"
import { Title2 } from "../CommonStyles"


export const MenuItem = ({item}) => {
    return (
        <Wrapper>
            <Title2>{item}</Title2>
        </Wrapper>
    )
}

const Wrapper = styled.div`
padding: 10px;
padding-right: 15px;
border-radius: 0 10px 10px 0;
border-top: solid 1px white;
border-bottom: solid 1px white;
border-right: solid 1px white;
&:hover{
    transform: scale(1.01);
    transform-origin: left;
}
`