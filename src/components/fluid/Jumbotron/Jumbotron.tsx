import React from "react";
import styled, { css } from "styled-components";

const FluidContainer = styled.section`
  width: 100%;
  padding: 3.2rem;
  margin-bottom: 3.2rem;
  ${({ theme }) => {
    return css`
      background-color: ${theme.colors.indigo};
    `;
  }}
`;

const FluidWrapper = styled.div`
  padding: 7rem 5rem 7rem 5rem;
  text-align: center;
  ${({ theme }) => {
    return css`
      color: ${theme.colors.white};
    `;
  }}
`;

const Lead = styled.p`
  ${({ theme }) => {
    return css`
      font-size: ${theme.fonts.size.jumbotron.paragraph.large};
      font-weight: ${theme.fonts.weigth.bold};
      color: ${theme.colors.white};
    `;
  }}
`;

const LeadContent = styled.p`
  ${({ theme }) => {
    return css`
      font-size: ${theme.fonts.size.jumbotron.paragraph.medium};
      color: ${theme.colors.white};
    `;
  }}
`;

const Jumbotron = () => {
  return (
    <FluidContainer>
      <FluidWrapper>
        <Lead>대한민국 No.1 Cold-Chain Platform</Lead>
        <LeadContent>
          팀프레시는 국내 유일 Door to Door Cold Chain 통합물류 서비스를
          제공합니다. 입출고 – 주문처리 - 새벽배송 전 과정에 신선도 유지를 위한
          설비/역량을 보유하고 있습니다.
        </LeadContent>
      </FluidWrapper>
    </FluidContainer>
  );
};

export default Jumbotron;
