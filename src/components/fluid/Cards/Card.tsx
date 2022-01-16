import React from "react";
import styled, { css } from "styled-components";

const CardItem = styled.section`
  padding: 1.6rem;
  width: 100%;
  ${({ theme }) => theme.media.tablet_min`
  width: 25%;
  `}
`;

const CardImage = styled.img`
  width: 100%;
`;

const CardBody = styled.article`
  padding: 2rem;
  ${({ theme }) => theme.media.tablet_max`
  padding: 0;
  `}
`;

const CardTitle = styled.h4`
  margin-bottom: 1.2rem;
  ${({ theme }) => {
    return css`
      font-weight: ${theme.fonts.weigth.bold};
      color: ${theme.colors.darkGrey};
    `;
  }}
`;

const CardText = styled.p`
  margin-bottom: 1.92rem;
  font-size: 1.36rem;
  ${({ theme }) => {
    return css`
      color: ${theme.colors.darkGrey};
    `;
  }}
`;

const StyledButton = styled.a`
  display: inline-block;
  padding: 0.6rem 1.2rem 0.6rem 1.2rem;
  margin-right: 3.2rem;
  border: 1px solid black;
  border-radius: 3.2rem;
  width: 10rem;
  cursor: pointer;
  font-size: 1.36rem;
  transition: all 0.4s;
  ${({ theme }) => {
    return css`
      font-weight: ${theme.fonts.weigth.bold};
      color: ${theme.colors.grey};
      border-color: ${theme.colors.grey};
      &:hover {
        background-color: ${theme.colors.grey};
        color: ${theme.colors.white};
      }
    `;
  }}
`;

interface CardProps {
  readonly src: string;
  readonly title: string;
  readonly text: string;
}

const Card = ({ src, title, text }: CardProps) => {
  return (
    <CardItem>
      <CardImage src={src} alt="cardImg" />
      <CardBody>
        <CardTitle>{title}</CardTitle>
        <CardText>{text}</CardText>
        <StyledButton href="/blank">더 알아보기</StyledButton>
      </CardBody>
    </CardItem>
  );
};

export default Card;
