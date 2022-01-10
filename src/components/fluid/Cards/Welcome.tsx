import React from "react";
import styled, { css } from "styled-components";

const WelcomeTextWrapper = styled.div`
  width: 75%;
  margin: auto;
  padding: 1.6rem;
  text-align: center;
  ${({ theme }) => {
    return css`
      color: ${theme.colors.darkGrey};
    `;
  }}
`;

const WelcomeText = styled.h1`
  margin-bottom: 0.8rem;
  text-transform: uppercase;
`;

const StyledHr = styled.hr`
  border: 0.1rem solid #b4b4b4;

  margin: 3rem auto 1.6rem auto;
`;

const Welcome = () => (
  <WelcomeTextWrapper>
    <WelcomeText>TIMF BUSINESS</WelcomeText>
    <StyledHr />
  </WelcomeTextWrapper>
);

export default Welcome;
