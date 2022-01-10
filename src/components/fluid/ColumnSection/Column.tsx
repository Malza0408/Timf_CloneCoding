import React from "react";
import styled, { css } from "styled-components";
import ArticleContent from "./ArticleContent";

const ColumnWrapper = styled.div`
  padding: 1.6rem;
  flex-basis: 50%;
`;

const ColumnTitle = styled.h4`
  margin-bottom: 3.2rem;
  margin-left: 0.8rem;
  font-size: 1.92rem;
  ${({ theme }) => {
    return css`
      font-weight: ${theme.fonts.weigth.bold};
    `;
  }}
`;

const ColumnArticle = styled.article`
  ${({ theme }) => {
    return css`
      background-color: ${theme.colors.article};
      border-color: ${theme.colors.articleBorder};
      border: 1px solid ${theme.colors.articleBorder};
    `;
  }}
  padding: 3.2rem 3.2rem 0.8rem 3.2rem;
`;

const SubtitleContainer = styled.div`
  display: flex;
`;

const Subtitle = styled.h5`
  font-size: 2rem;
  margin-bottom: 0.8rem;
  line-height: 1.2;
  ${({ theme }) => {
    return css`
      font-weight: ${theme.fonts.weigth.semibold};
    `;
  }}
`;

const MoreA = styled.a`
  transform: translate(1.4rem, 0.4rem);
`;

const MoreImg = styled.img`
  width: 1.8rem;
  opacity: 0.6;
`;

const StyledHr = styled.hr`
  margin: 1.6rem 0 1.6rem 0;
  border: 0.1rem solid rgba(0, 0, 0, 0.1);
`;

interface ColumnProps {
  text: string;
  subtitle: string;
  isNotice?: boolean;
}

const Column = ({ text, subtitle, isNotice }: ColumnProps) => {
  return (
    <ColumnWrapper>
      <ColumnTitle>{text}</ColumnTitle>
      <ColumnArticle>
        <SubtitleContainer>
          <Subtitle>{subtitle}</Subtitle>
          <MoreA href="/blank">
            <MoreImg
              src={process.env.PUBLIC_URL + "card/icon_plus.png"}
              alt="puls icon"
            />
          </MoreA>
        </SubtitleContainer>
        <StyledHr />
        {isNotice && (
          <>
            <ArticleContent
              text="[공고] 신주발행 공고(제3자 배정방식)"
              date="2021-09-15"
            />
            <ArticleContent
              text="[공고] 신주발행 공고(제3자 배정방식)"
              date="2021-09-08"
            />
            <ArticleContent
              text="[공고] 신주발행 공고(제3자 배정방식)"
              date="2021-08-31"
            />
          </>
        )}
      </ColumnArticle>
    </ColumnWrapper>
  );
};

export default Column;
