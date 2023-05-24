import styled from "styled-components"
import { MenuItem } from "./MenuItem"
import { Link } from "react-router-dom"
import { Button } from "../CommonStyles"

const items = ['Home', 'Proyects', 'Education', 'Skills' ]


export const MenuContainer = () => {
    return (
        <Wrapper>
            {items.map(item => <Link key={item} to={'/'} style={{ textDecoration: 'none'}}><MenuItem item={item}/></Link>)}
            <Button>Contact Me</Button>
        </Wrapper>
    )
}

const Wrapper = styled.div`
display:flex;
justify-content: center;
align-items: center;
gap: 40px;
margin-top: 10px;
border-radius: 68px;
padding: 10px 20px;
/* background-color: black; */
background-color:rgba(31,32,35,.5);
backdrop-filter: blur(2px);
/* z-index: 1; */

`