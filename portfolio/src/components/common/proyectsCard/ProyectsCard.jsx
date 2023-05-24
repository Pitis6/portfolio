import styled from "styled-components"
import { Button, P, Title2 } from "../CommonStyles"

export const ProyectsCard = ({ data, index }) => {
  return (
    <Wrapper index={index}>
      <Image style={{borderRadius:'10px'}} src="audiophile.gif" alt= 'imagen' />
      {/* <Video controls>
        <source src={data.videoPath} type="video/mp4" style={{ borderRadius: '10px' }} />
      </Video> */}
      <TextWrapper>
        <Title2>{data.title}</Title2>
        <P>{data.description}</P>
        <Button>See more</Button>
      </TextWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
display: flex;
align-items: center;
flex-direction: ${props => props.index%2 === 0 ? 'row-reverse':''};
gap: 40px;
/* flex-direction: column; */
width:100%;
/* border: solid white; */
border-radius:20px;
/* transition: width 0.3s, background-color 0.3s; */
  &:hover{
      
  }
`

// const Video = styled.video`
// max-width: 65%;
// height: auto;
// `

const Image = styled.img`
max-width: 65%;
height: auto;
`

const TextWrapper = styled.div`
height: 100%;
`