import styled from "styled-components"
import { MenuItem } from "./MenuItem"

const items = ['Proyects', 'Education', 'Skills' ]


export const MenuContainer = () => {
    return (
        <Wrapper>
            {items.map(item => <MenuItem item={item} key={item}/>)}
        </Wrapper>
    )
}

const Wrapper = styled.div`
/* border: solid black; */
display: inline-flex;
gap: 5px;
flex-direction: column;
margin-top: 100px;
`