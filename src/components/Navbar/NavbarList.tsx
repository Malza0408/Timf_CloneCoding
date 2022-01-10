import React, { MouseEvent, useState } from "react";
import styled, { css } from "styled-components";
import { IFintro } from "../../interface/types";
import ListMenu from "./ListMenu";

const NavItem = styled.li`
  padding-right: 2rem;
`;
const NavbarDropDownToggle = styled.a`
  display: block;
  padding: 0.8rem;
  ${({ theme }) => {
    return css`
      font-size: ${theme.fonts.size.large};
    `;
  }}
`;
const ToggleText = styled.span`
  ${({ theme }) => {
    return css`
      color: ${theme.colors.lightgrey};
      &:hover {
        color: ${theme.colors.black};
        font-weight: ${theme.fonts.weigth.bold};
      }
    `;
  }}
`;

const DropdownMenu = styled.div<{ isHover: boolean }>`
  position: absolute;
  z-index: 1;
  visibility: ${(props) => (props.isHover ? "visible" : "hidden")};
  width: 16rem;
  ${({ theme }) => {
    return css`
      background-color: ${theme.colors.navberItem};
    `;
  }}
  ${({ isHover, theme }) => theme.media.laptop`
  position: ${isHover ? "relative" : "absolute"};
  width: 100%;
  box-shadow: rgb(0 0 0 / 20%) 0px 8px 16px 0px;
  `}
`;

interface ListProps {
  readonly innerText: string;
  readonly isDropDown?: boolean;
  readonly menuTexts?: IFintro[];
  readonly href?: string;
  readonly handleIsHover?: (bool: boolean) => void;
}

const NavbarList = ({
  innerText,
  isDropDown,
  menuTexts,
  href,
  handleIsHover,
}: ListProps) => {
  const [isHover, setIsHover] = useState<boolean>(false);

  const handleMouseEnter = (e: MouseEvent<HTMLElement>) => {
    setIsHover(true);
    handleIsHover && handleIsHover(true);
  };

  const handleMouseLeave = (e: MouseEvent<HTMLElement>) => {
    setIsHover(false);
    handleIsHover && handleIsHover(false);
  };

  return (
    <NavItem onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <NavbarDropDownToggle href={href}>
        <ToggleText>{innerText}</ToggleText>
      </NavbarDropDownToggle>
      {isDropDown && (
        <DropdownMenu
          isHover={isHover}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {menuTexts?.map((value) => {
            return <ListMenu menuText={value.text} key={value.key} />;
          })}
        </DropdownMenu>
      )}
    </NavItem>
  );
};

export default NavbarList;
