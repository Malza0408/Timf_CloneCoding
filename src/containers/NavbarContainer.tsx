import React from "react";
import Navbar from "../components/Navbar/Navbar";
import { introBusiness, introCompany, notice } from "../data/navber";

const NavbarContainer = () => {
  return (
    <Navbar
      introCompany={introCompany}
      introBusiness={introBusiness}
      notice={notice}
    />
  );
};

export default NavbarContainer;
