import React from "react";
import styled, { css } from "styled-components";
import FooterCard from "./FooterCard";
import {
  ContactUs,
  Others,
  Partnership,
  TimfDatas,
} from "../../../data/footer";

const FooterTextContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const FooterPartnership = styled.div`
  width: 100%;
  text-align: center;
`;

const PartnershipContent = styled.p`
  font-size: 1.36rem;
  margin-bottom: 1.6rem;
`;

const StyledHr = styled.hr`
  border: 1px solid;
  margin-top: 1.28rem;
  margin-bottom: 1.6rem;
`;

const FooterCopyRight = styled.div`
  padding: 1.6rem;
  text-align: center;
`;

const CopyRightContent = styled.h5`
  margin-bottom: 0.8rem;
  ${({ theme }) => {
    return css`
      font-weight: ${theme.fonts.weigth.semibold};
    `;
  }}
`;

const StyledA = styled.a`
  ${({ theme }) => {
    return css`
      color: ${theme.colors.white};
    `;
  }}
`;

const Footer = () => {
  return (
    <>
      <FooterTextContainer>
        <FooterCard title="Timf" contents={TimfDatas} />
        <FooterCard title="Contact us" contents={ContactUs} />
        <FooterCard title="Others" contents={Others} isAnchor={true} />
        <FooterPartnership>
          {Partnership.map((content) => {
            return (
              <PartnershipContent key={content.key}>
                {content.data}
              </PartnershipContent>
            );
          })}
        </FooterPartnership>
      </FooterTextContainer>
      <FooterCopyRight>
        <StyledHr />
        <CopyRightContent>
          <StyledA>©</StyledA> TeamFresh All right reserved
        </CopyRightContent>
      </FooterCopyRight>
    </>
  );
};

export default Footer;
