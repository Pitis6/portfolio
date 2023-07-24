import styled from "styled-components";
import { Title2 } from "../common/CommonStyles";
import { FaEnvelope, FaGithub, FaLinkedinIn } from "react-icons/fa";
export const Footer = () => {
  return (
    <Wrapper>
      <Title2>Full Stack Developer</Title2>
      <Ul>
        <Li>
          <A
            href="https://github.com/Pitis6"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </A>
        </Li>
        <Li>
          <A href="mailto:felipecalvache6@gmail.com">
            <FaEnvelope />
          </A>
        </Li>
        <Li>
          <A
            href="https://www.linkedin.com/in/felipe-calvache"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn />
          </A>
        </Li>
      </Ul>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-top: solid 1px white;
  background-color: black;
  color: white;
  border-image-slice: 1;
  border-image-source: radial-gradient(
    circle at center,
    rgba(85, 219, 69),
    black
  );
`;
const Ul = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;
`;
const Li = styled.li`
  font-size: 30px;
`;

const A = styled.a`
  color: white;
`;
