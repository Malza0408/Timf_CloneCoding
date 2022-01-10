import React from "react";
import styled, { css } from "styled-components";

const ConnectContainer = styled.div`
  text-align: center;
`;
const ConnectTitleWrapper = styled.div`
  padding: 1.6rem;
  width: 100%;
`;

const ConnectTitle = styled.h2`
  font-size: 3.2rem;
  margin-bottom: 0.8rem;
  line-height: 1.2;
  ${({ theme }) => {
    return css`
      font-weight: ${theme.fonts.weigth.semibold};
    `;
  }}
`;

const ConnectIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 1.6rem;
  padding-bottom: 3.2rem;
`;

const ConnectIcon = styled.a`
  padding: 4.8rem;

  ${({ theme }) => theme.media.tablet_max`
 padding: 1.92rem;
  `}

  ${({ theme }) => theme.media.tabletandLaptop`
  padding: 3.2rem;
  `}
`;

const StyledFacebook = styled.svg`
  width: 6.3rem;
  height: 7.2rem;
  ${({ theme }) => theme.media.tablet_max`
  width: 3.5rem;
  height: 4.0rem;
  `}

  ${({ theme }) => theme.media.tabletandLaptop`
  width: 5.6rem;
  height: 6.4rem;
  `}
`;

const StyledYoutube = styled.svg`
  width: 8.1rem;
  height: 7.2rem;
  ${({ theme }) => theme.media.tablet_max`
  width: 4.5rem;
  height: 4.0rem;
  `}

  ${({ theme }) => theme.media.tabletandLaptop`
  width: 7.2rem;
  height: 6.4rem;
  `}
`;
const Connect = () => {
  return (
    <ConnectContainer>
      <ConnectTitleWrapper>
        <ConnectTitle>Connect</ConnectTitle>
      </ConnectTitleWrapper>
      <ConnectIconWrapper>
        <ConnectIcon href="https://www.facebook.com/teamfresh.timf">
          <StyledFacebook
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            viewBox="0 0 172 172"
          >
            <g
              fill="none"
              fillRule="nonzero"
              stroke="none"
              strokeWidth="1"
              strokeLinecap="butt"
              strokeLinejoin="miter"
              strokeMiterlimit="10"
              strokeDasharray=""
              strokeDashoffset="0"
              fontFamily="none"
              fontWeight="none"
              fontSize="none"
              textAnchor="none"
            >
              <path d="M0,172v-172h172v172z" fill="none"></path>
              <g fill="#455eb7">
                <path d="M141.04,13.76h-110.08c-9.4944,0 -17.2,7.7056 -17.2,17.2v110.08c0,9.4944 7.7056,17.2 17.2,17.2h110.08c9.4944,0 17.2,-7.7056 17.2,-17.2v-110.08c0,-9.4944 -7.7056,-17.2 -17.2,-17.2zM127.28,65.36h-6.88c-7.3616,0 -10.32,1.72 -10.32,6.88v10.32h17.2l-3.44,17.2h-13.76v51.6h-17.2v-51.6h-13.76v-17.2h13.76v-10.32c0,-13.76 6.88,-24.08 20.64,-24.08c9.976,0 13.76,3.44 13.76,3.44z"></path>
              </g>
            </g>
          </StyledFacebook>
        </ConnectIcon>
        <ConnectIcon href="https://www.youtube.com/watch?v=vlXzU-1Oec4">
          <StyledYoutube
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            viewBox="0 0 172 172"
          >
            <g
              fill="none"
              fillRule="nonzero"
              stroke="none"
              strokeWidth="1"
              strokeLinecap="butt"
              strokeLinejoin="miter"
              strokeMiterlimit="10"
              strokeDasharray=""
              strokeDashoffset="0"
              fontFamily="none"
              fontWeight="none"
              fontSize="none"
              textAnchor="none"
            >
              <path d="M0,172v-172h172v172z" fill="none"></path>
              <g>
                <path
                  d="M154.8,121.475c-1.43333,7.525 -7.525,13.25833 -15.05,14.33333c-11.825,1.79167 -31.53333,3.94167 -53.75,3.94167c-21.85833,0 -41.56667,-2.15 -53.75,-3.94167c-7.525,-1.075 -13.61667,-6.80833 -15.05,-14.33333c-1.43333,-8.24167 -2.86667,-20.425 -2.86667,-35.475c0,-15.05 1.43333,-27.23333 2.86667,-35.475c1.43333,-7.525 7.525,-13.25833 15.05,-14.33333c11.825,-1.79167 31.53333,-3.94167 53.75,-3.94167c22.21667,0 41.56667,2.15 53.75,3.94167c7.525,1.075 13.61667,6.80833 15.05,14.33333c1.43333,8.24167 3.225,20.425 3.225,35.475c-0.35833,15.05 -1.79167,27.23333 -3.225,35.475z"
                  fill="#af0909"
                ></path>
                <path
                  d="M71.66667,111.08333v-50.16667l43,25.08333z"
                  fill="#ffffff"
                ></path>
              </g>
            </g>
          </StyledYoutube>
        </ConnectIcon>
      </ConnectIconWrapper>
    </ConnectContainer>
  );
};

export default Connect;
