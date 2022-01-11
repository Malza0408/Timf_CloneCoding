import React from "react";
import styled, { css } from "styled-components";
import ColumnSection from "./ColumnSection/ColumnSection";
import Connect from "./Connect/Connect";
import FluidCards from "./Cards/FluidCards";
import Footer from "./Footer/Footer";
import Jumbotron from "./Jumbotron/Jumbotron";
import Welcome from "./Cards/Welcome";

const FluidPadding = styled.section`
  padding: 0 1.5rem 3.2rem 1.5rem;
`;

const FluidPaddingNoMargin = styled.section`
  padding: 0 1.5rem 0 1.5rem;
`;

const FluidPaddingFooter = styled.footer`
  padding: 1.6rem;
  ${({ theme }) => {
    return css`
      background-color: ${theme.colors.footer};
      color: ${theme.colors.darkWhite};
    `;
  }}
`;

const Fluid = () => {
  return (
    <>
      <main role="main">
        <Jumbotron />
        <FluidPadding>
          <Welcome />
        </FluidPadding>
        <FluidPadding>
          <FluidCards />
        </FluidPadding>
        <FluidPaddingNoMargin>
          <ColumnSection />
        </FluidPaddingNoMargin>
        <FluidPadding>
          <Connect />
        </FluidPadding>
      </main>
      <FluidPaddingFooter>
        <Footer />
      </FluidPaddingFooter>
    </>
  );
};

export default Fluid;
