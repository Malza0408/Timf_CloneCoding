import React from "react";
import styled, { css } from "styled-components";

const Indicators = styled.ul`
  position: absolute;
  display: flex;
  width: 100%;
  justify-content: center;
  bottom: 10%;
`;

const IndicatorList = styled.li<{ isFocus: boolean }>`
  &::after {
    content: "";
    display: inline-block;
    width: 3rem;
    height: 0.3rem;
    margin-right: 0.7rem;

    ${({ theme, isFocus }) => {
      return css`
        background-color: ${theme.colors.white};
        opacity: ${isFocus ? "1.0" : "0.5"};
      `;
    }}
  }
`;

interface indicatorProps {
  isIndicatorFocus: boolean[];
}

const CarouselIndicators = ({ isIndicatorFocus }: indicatorProps) => {
  return (
    <Indicators>
      <IndicatorList isFocus={isIndicatorFocus[0]}></IndicatorList>
      <IndicatorList isFocus={isIndicatorFocus[1]}></IndicatorList>
      <IndicatorList isFocus={isIndicatorFocus[2]}></IndicatorList>
    </Indicators>
  );
};

export default CarouselIndicators;
