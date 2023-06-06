import styled from "styled-components"
import { ProyectsDetail } from "./ProyectsDetail"

export const ProyectsDetailContainer = () => {

    const proyects = [
        {
            title: 'To-Do App',
            image: 'toDo.png'
        },
        {
            title: 'Audio E-comerce',
            image: 'audioPhile.png'
        },
        {
            title: 'Rent a Car E-comerce',
            image: 'rentCar.png'
        },
    ]

  return (
    <Wrapper>
      <ProyectsDetail proyects={proyects} />
    </Wrapper>
  );
}


const Wrapper = styled.div`
width: 80%;
margin: 100px auto;
`