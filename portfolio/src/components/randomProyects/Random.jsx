import styled from 'styled-components'
import { ProyectsCardContainer } from '../common/proyectsCard/ProyectsCardContainer'
import { Title2 } from '../common/CommonStyles'
// import { useRef, useEffect, useState } from 'react'

export const Random = () => {
    
    // const myref = useRef()
    // // const [myElementIsVisible,setmyElementIsVisible ] = useState()
    // // console.log(myElementIsVisible)
    // useEffect(() => {
    //     const observer = new IntersectionObserver((entries)=>{
    //         const entry = entries[0]
    //         setmyElementIsVisible(entry.isIntersecting)
    //     })
    //     observer.observe(myref.current)
    // },[])

    return (
        <RandomProyects>
            <Separator ><Title2>Sample proyects</Title2></Separator>
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
padding: 150px;
/* border: solid white; */
`

const Separator = styled.div`
  border-bottom: solid 1px white;
  border-image-slice: 1;
  border-image-source: radial-gradient(
    circle at center,
    rgba(85, 219, 69),
    black
  );
`;