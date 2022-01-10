import "styled-components";
import { Theme } from "./theme";

declare module "styled-components" {
  export interface DefaultTheme extends Theme {
    colors: {
      navbar: string;
      navberItem: string;
      article: string;
      articleBorder: string;
      footer: string;
      grey: string;
      lightgrey: string;
      darkGrey: string;
      black: string;
      white: string;
      darkWhite: string;
      indigo: string;
    };

    fonts: {
      weigth: {
        bold: string;
        semibold: string;
        medium: string;
      };
      size: {
        navbarList: string;
        carousel: {
          large: string;
          medium: string;
        };
        jumbotron: {
          large: string;
          semilarge: string;
          paragraph: {
            large: string;
            medium: string;
          };
        };
        large: string;
        medium: string;
        small: string;
      };
    };
  }
}
