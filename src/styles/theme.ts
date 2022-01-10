import { DefaultTheme } from "styled-components";
import media from "./media";

const colors = {
  navbar: "#F8F9FA",
  navberItem: "#f1f1f1",
  article: "#fafafa",
  articleBorder: "#eeeeee",
  footer: "#31353e",
  grey: "#6c757f",
  lightgrey: "#606060",
  darkGrey: "#343638",
  black: "#222222",
  white: "#ffffff",
  darkWhite: "#d5d5d5",
  indigo: "#172d4c",
};
const fonts = {
  weigth: {
    bold: "700",
    semibold: "500",
    medium: "400",
  },
  size: {
    navbarList: "1.44rem",
    carousel: {
      large: "4.8rem",
      medium: "3.2rem",
    },
    jumbotron: {
      large: "2.4rem",
      semilarge: "1.92rem",
      paragraph: {
        large: "2.4rem",
        medium: "1.92rem",
      },
    },
    large: "1.44rem",
    medium: "1.0rem",
    small: "0.6rem",
  },
};

export const myTheme = {
  fonts,
  colors,
  media,
};

export type Theme = typeof myTheme;
