import React from "react";
import styled, { css } from "styled-components";

const DropdownItem = styled.a`
  display: block;
  padding: 1.2rem 1.6rem 1.2rem 1.6rem;
  ${({ theme }) => {
    return css`
      font-size: ${theme.fonts.size.navbarList};
      &:hover {
        font-weight: ${theme.fonts.weigth.bold};
      }
    `;
  }}
`;

interface ListMenuProps {
  readonly menuText: string;
}

const ListMenu = ({ menuText }: ListMenuProps) => {
  return <DropdownItem href="/blank">{menuText}</DropdownItem>;
};

export default ListMenu;
