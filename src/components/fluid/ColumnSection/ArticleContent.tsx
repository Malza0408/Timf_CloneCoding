import React from "react";
import styled, { css } from "styled-components";

const ArticleContainer = styled.div`
  margin-bottom: 2.4rem;
  line-height: 1.5;
  display: flex;
  justify-content: space-between;
`;

const ContentTitle = styled.a<{ isUnderLine?: boolean }>`
  line-height: 1.2;
  font-size: 1.6rem;
  &:hover {
    text-decoration: ${(props) => (props.isUnderLine ? "underline" : "none")};
  }
  ${({ theme }) => {
    return css`
      font-weight: ${theme.fonts.weigth.semibold};
      color: ${theme.colors.black};
    `;
  }}
`;

const ClockImg = styled.img`
  width: 1.8rem;
  margin-right: 0.8rem;
  transform: translateY(0.2rem);
`;

const Date = styled.span`
  ${({ theme }) => {
    return css`
      font-weight: ${theme.fonts.weigth.medium};
      color: ${theme.colors.black};
    `;
  }}
`;

interface ArticleContentProps {
  text: string;
  date: string;
}
const ArticleContent = ({ text, date }: ArticleContentProps) => {
  return (
    <ArticleContainer>
      <ContentTitle href="/blank" isUnderLine={true}>
        {text}
      </ContentTitle>
      <ContentTitle href="/blank">
        <ClockImg
          src={process.env.PUBLIC_URL + "card/icon_clock.png"}
          alt="clock icon"
        />
        <Date>{date}</Date>
      </ContentTitle>
    </ArticleContainer>
  );
};

export default ArticleContent;
