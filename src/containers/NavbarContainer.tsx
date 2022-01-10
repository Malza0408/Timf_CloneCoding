import React, { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import { IFintro } from "../interface/types";

const NavbarContainer = () => {
  const [introCompany] = useState<IFintro[]>([
    {
      key: "1",
      text: "회사 소개",
    },
    {
      key: "2",
      text: "협력사 소개",
    },
    {
      key: "3",
      text: "고객사 소개",
    },
    {
      key: "4",
      text: "오시는 길",
    },
  ]);
  const [introBusiness] = useState<IFintro[]>([
    {
      key: "1",
      text: "새벽배송",
    },
    {
      key: "2",
      text: "화물주선",
    },
    {
      key: "3",
      text: "풀필먼트",
    },
    {
      key: "4",
      text: "그로서리",
    },
  ]);
  const [notice] = useState<IFintro[]>([
    {
      key: "1",
      text: "공지사항",
    },
    {
      key: "2",
      text: "인재채용",
    },
    {
      key: "3",
      text: "서비스소개",
    },
  ]);

  return (
    <Navbar
      introCompany={introCompany}
      introBusiness={introBusiness}
      notice={notice}
    />
  );
};

export default NavbarContainer;
