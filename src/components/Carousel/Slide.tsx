import React from "react";
import styled, { css } from "styled-components";

const ImgContainer = styled.div`
  width: 100%;
  flex-shrink: 0;
  position: relative;
`;

const StyledImg = styled.img`
  width: 100%;
  height: 100%;
`;

const Caption = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 67%;
  padding: 2rem 0 2rem 0;
  text-align: center;
  ${({ theme }) => {
    return css`
      color: ${theme.colors.white};
    `;
  }}
`;

const StyledH1 = styled.h1`
  text-transform: uppercase;
  margin-bottom: 0.8rem;

  ${({ theme }) => {
    return css`
      font-size: ${theme.fonts.size.carousel.medium};
      font-weight: ${theme.fonts.weigth.semibold};
      color: ${theme.colors.white};
    `;
  }}
  ${({ theme }) => theme.media.tablet_max`
  font-size: 1.92rem;
  `}
`;
const StyledH3 = styled.h3`
  padding-bottom: 1.6rem;
  margin-bottom: 0.8rem;
  opacity: 0.8;
  ${({ theme }) => {
    return css`
      font-size: ${theme.fonts.size.carousel.large};
      font-weight: ${theme.fonts.weigth.bold};
      color: ${theme.colors.white};
    `;
  }}
  ${({ theme }) => theme.media.tablet_max`
  font-size: 2.56rem;
  `}
`;

interface SliderProps {
  readonly img: string;
  readonly text: string;
  readonly subText: string;
}

const Slide = ({ img, text, subText }: SliderProps) => {
  return (
    <ImgContainer>
      <StyledImg src={img} />
      <Caption>
        <StyledH1>{text}</StyledH1>
        <StyledH3>{subText}</StyledH3>
      </Caption>
    </ImgContainer>
  );
};

export default Slide;
