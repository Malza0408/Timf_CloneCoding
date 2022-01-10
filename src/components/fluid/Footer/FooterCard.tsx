import React from "react";
import styled, { css } from "styled-components";
import { IFFooterData } from "../../../interface/types";

const FooterText = styled.div`
  padding: 1.6rem;
  color: rgb(213, 213, 213);
  text-align: center;
  width: 100%;
  ${({ theme }) => theme.media.tablet_min`
  flex: 0 0 33.333333%
  `}
`;

const StyledHr = styled.hr`
  width: 85%;
  margin: 1.28rem auto 1.6rem auto;
  border: 1px solid rgb(213, 213, 213);
`;

const StyledTitle = styled.h5`
  margin-bottom: 0.8rem;
  ${({ theme }) => {
    return css`
      font-weight: ${theme.fonts.weigth.semibold};
    `;
  }}
`;

const FooterContent = styled.p`
  font-size: 1.36rem;
  margin-bottom: 1.6rem;
`;

const StyledAn = styled.a`
  color: rgb(213, 213, 213);
  &:hover {
    text-decoration: underline;
  }
`;

interface FooterCardProps {
  title: string;
  contents: IFFooterData[];
  isAnchor?: boolean;
}

const FooterCard = ({ title, contents, isAnchor }: FooterCardProps) => {
  return (
    <FooterText>
      <StyledHr />
      <StyledTitle>{title}</StyledTitle>
      <StyledHr />
      {contents.map((content) => {
        return isAnchor ? (
          <StyledAn href="/blank" key={content.key}>
            <FooterContent>{content.data}</FooterContent>
          </StyledAn>
        ) : (
          <FooterContent key={content.key}>{content.data}</FooterContent>
        );
      })}
    </FooterText>
  );
};

export default FooterCard;
