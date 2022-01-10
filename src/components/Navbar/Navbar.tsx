import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { IFintro } from "../../interface/types";
import NavbarList from "./NavbarList";

const NavbarContainer = styled.nav`
  position: fixed;
  top: 0;
  z-index: 10;
  width: 100%;
  height: 6rem;
  padding: 1.28rem;
  ${({ theme }) => {
    return css`
      background-color: ${theme.colors.navbar};
    `;
  }}
  display: flex;
  align-items: center;
  ${({ theme }) => theme.media.laptop`
  flex-wrap: wrap;
  padding-right: 0;
  justify-content: space-between;
  `}
`;

const NavbarToggleBtn = styled.button`
  visibility: hidden;
  padding: 0.4rem 1.2rem 0.4rem 1.2rem;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 0.4rem;
  cursor: none;
  ${({ theme }) => theme.media.laptop`
  visibility: visible;
  cursor: pointer;
`}
`;

const ToggleBtnContent = styled.img`
  width: 3rem;
  height: 3rem;
  vertical-align: middle;
`;

const NavbarBrand = styled.a`
  margin: 0 1.6rem 0 0;
  padding: 0.5rem 0 0.5rem 0;
  width: 11rem;
  height: 3rem;
`;

const Logo = styled.img`
  width: 100%;
  height: 2rem;
`;

const NavbarDropDown = styled.div<{ isToggle: boolean }>`
  position: absolute;
  display: flex;
  flex-basis: auto;
  flex-grow: 1;
  right: 0;
  padding-right: 2rem;
  transition: height 0.35s ease-out;
  ${({ isToggle, theme }) => theme.media.laptop`
  position: relative;
  display: block;
  flex-basis: 100%;
  padding-right: 0;
  overflow: hidden;
  height: ${isToggle ? "670%" : "0"}
  `}
`;

const NavbarNav = styled.ul`
  display: flex;
  flex-direction: row;
  ${({ theme }) => theme.media.laptop`
  padding: 2rem;
  flex-direction: column;
  background-color: rgb(248, 249, 250);
  `}
`;

interface NavbarProps {
  readonly introCompany: IFintro[];
  readonly introBusiness: IFintro[];
  readonly notice: IFintro[];
}

const Navbar = ({ introCompany, introBusiness, notice }: NavbarProps) => {
  const [isToggle, setIsToggle] = useState(false);
  const [canToggle, setCanToggle] = useState(true);
  const handleToggle = () => {
    if (canToggle) {
      setIsToggle(!isToggle);
      setCanToggle(false);
    }
  };

  useEffect(() => {
    if (canToggle === true) return;

    const tick = setTimeout(() => {
      setCanToggle(true);
    }, 350);

    return () => clearTimeout(tick);
  });
  return (
    <NavbarContainer>
      <NavbarBrand href="/">
        <Logo src={process.env.PUBLIC_URL + "logo.png"} alt="Team-fresh logo" />
      </NavbarBrand>
      <NavbarToggleBtn onClick={handleToggle}>
        <ToggleBtnContent src={process.env.PUBLIC_URL + "toggle.png"} />
      </NavbarToggleBtn>
      <NavbarDropDown isToggle={isToggle}>
        <NavbarNav>
          <NavbarList
            innerText="회사소개"
            isDropDown={true}
            menuTexts={introCompany}
          />
          <NavbarList
            innerText="사업소개"
            isDropDown={true}
            menuTexts={introBusiness}
          />
          <NavbarList
            innerText="공지사항"
            isDropDown={true}
            menuTexts={notice}
          />
          <NavbarList innerText="보도자료" href="/blank" />
          <NavbarList innerText="배송지역검색" href="/search" />
        </NavbarNav>
      </NavbarDropDown>
    </NavbarContainer>
  );
};

export default Navbar;
