import styled from 'styled-components'
import { ProyectsCardContainer } from '../common/proyectsCard/ProyectsCardContainer'

export const Random = () => {
    return (
        <RandomProyects>
            <ProyectsCardContainer/>
        </RandomProyects>
    )
}

const RandomProyects = styled.section`
/* width: 100vw; */
display: flex;
flex-direction: column;
gap: 100px;
background-color: black;
padding: 200px 150px;
/* border: solid white; */
`