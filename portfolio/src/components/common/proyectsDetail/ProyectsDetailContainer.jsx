import styled from "styled-components"
import { ProyectsDetail } from "./ProyectsDetail"
import { data } from "../../../utils/data";

export const ProyectsDetailContainer = () => {

   

  return (
    <Wrapper>
      <ProyectsDetail proyects={data} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
width: 80%;
margin: 100px auto;
`