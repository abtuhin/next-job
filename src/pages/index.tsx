import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  border: ${props => `1px solid ${props.theme.colors.onyx}`};
  background-color: ${props => props.theme.colors.lightBlue};
  font-family: ${props => props.theme.fonts[0]};
`;
const Heading = styled.h1`
  font-size: ${({ isHeading, theme: { fontSizes } }) =>
    isHeading ? fontSizes.large : fontSizes.small};
  color: ${({ theme: { colors } }) => colors.persianGreen};
`;
const Home: React.FC = () => {
  return (
      <Container>
        <Heading isHeading={true}>Hello World</Heading>
        <h2>By the power of styled-components!</h2>
      </Container>
  );
};

export default Home;