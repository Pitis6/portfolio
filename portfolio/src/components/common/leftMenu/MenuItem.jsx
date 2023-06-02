import styled from "styled-components";
import { Link } from "react-router-dom";

export const MenuItem = () => {
  return (
    <Wrapper>
      {/* <P>{item}</P> */}
      <Link
        key={"/home"}
        to={"/"}
        style={{ textDecorationLine: "none", color: "white" }}
      >
        Home
      </Link>
      <Link
        key={"/proyects"}
        to={"/proyects"}
        style={{ textDecorationLine: "none", color: "white" }}
      >
        Proyects
      </Link>
      <Link
        key={"/education"}
        to={"/education"}
        style={{ textDecorationLine: "none", color: "white" }}
      >
        Education
      </Link>
      <Link
        key={"/skills"}
        to={"/skills"}
        style={{ textDecorationLine: "none", color: "white" }}
      >
        Skills
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 15px;
  display: flex;
  gap: 20px;
  /* padding-right: 20px; */
  /* padding-left: 100px; */
  /* border-radius: 0 10px 10px 0; */
  /* border-right: solid 1px white; */
  /* transition: border 1s linear; */
`;
