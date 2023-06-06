import styled from "styled-components";
import { Link } from "react-router-dom";

export const MenuItem = ({item}) => {
  return (
    <Wrapper>
      <Link
        key={item.label}
        to={item.route}
        style={{ textDecorationLine: "none", color: "white" }}
      >
        {item.label}
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
