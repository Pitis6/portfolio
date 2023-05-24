import styled from "styled-components"

export const ProyectsCard = () => {
  return (
    <Wrapper/>
  )
}

const Wrapper = styled.div`
width:10%;
    height:50px;
    border-right: solid white;
    border-bottom: solid white;
    border-top: solid white;
    border-radius:0 10px 10px 0px;
    transition: width 0.3s, background-color 0.3s;
    &:hover{
        width: 15%;
        /* background-color: blue; */
    }
`