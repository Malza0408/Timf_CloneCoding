import React from "react";
import styled, { css } from "styled-components";
import Link from "../Link/Link";

const DropdownItem = styled(Link)`
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
  return (
    <DropdownItem href="/blank" className="dropDownItem">
      {menuText}
    </DropdownItem>
  );
};

export default ListMenu;
