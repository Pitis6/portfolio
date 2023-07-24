import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

export const MenuItem = ({ item }) => {
  const [isActive, setIsActive] = useState(false);

  const { pathname } = useLocation();

  useEffect(() => {
    pathname === item.route ? setIsActive(true) : setIsActive(false);
  }, [pathname, item.route]);

  return (
    <Wrapper>
      <Link
        key={item.label}
        to={item.route}
        style={{
          textDecorationLine: "none",
          color: isActive ? "rgba(85, 219, 69)" : "white",
        }}
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
`;
