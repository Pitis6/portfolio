import styled from "styled-components";
import { Title2 } from "../components/common/CommonStyles";

export const Skills = () => {
  const skills = {
    front: [
      "HTML5",
      "CSS",
      "Js",
      "React",
      "Redux",
      "React-router-Dom",
      "Material-UI ",
      "Vite",
      "Vitest",
      "Styled-components",
      "NextJS",
    ],
    back: [
      "POO",
      "Java",
      "Spring Boot",
      "Spring MVC",
      "Spring Data",
      "Spring Security",
      "API Rest",
      "Design patterns",
      "Swagger",
      "MySQL",
      "MongoDB",
      "Postman",
      "JUnit",
      "Git y GitHub",
    ],
  };

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <Wrapper>
      {Object.entries(skills).map(([key, value]) => (
        <SkillCard key={key}>
          <Title2 style={{ textAlign: "center", margin:'15px 0px' }}>
            {capitalizeFirstLetter(key)}
          </Title2>
          <UlDiv>
            <Ul>
              {value.map((skill, index) => (
                <Li key={skill}>{index % 2 === 0 ? "" : skill}</Li>
              ))}
            </Ul>
            <Ul>
              {value.map((skill, index) => (
                <Li key={skill}>{index % 2 === 0 ? skill : ""}</Li>
              ))}
            </Ul>
          </UlDiv>
        </SkillCard>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 100px 0px;
  display: flex;
  gap: 50px;
  justify-content: space-around;
  padding: 0 150px;
`;

const SkillCard = styled.article`
  /* border: solid red; */
  padding: 0px 50px;
  width: 50%;
  box-shadow: 0 4px 4px 5px rgba(255, 255, 255, 0.5);
  position: relative;
  overflow: hidden;
  border-radius: 10px;

  /* &::before {
    content: "";
    position: absolute;
    top: 400px;
    left: -0px;
    width: 300px;
    height: 300px;
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 50%;
    filter: blur(30px);
    opacity: 0.7;
  } */

  /* &::after {
    content: "";
    position: absolute;
    top: 20px;
    left: 20px;
    width: 160px;
    height: 160px;
    background-color: rgba(255, 255, 255, 0.8);
    border-radius: 50%;
    box-shadow: 0 0 20px 20px rgba(255, 255, 255, 0.8);
  } */
`;

const UlDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Ul = styled.ul`
  padding: 10px 0px;
  /* border: solid 1px white; */
  list-style-type: none;
`;

const Li = styled.li`
  /* border: solid 1px white; */
  padding-bottom: 3px;
  font-size: 20px;
  font-weight: 100;
`;
