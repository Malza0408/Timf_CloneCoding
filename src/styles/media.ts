import { css, CSSProp } from "styled-components";

interface MediaQueryProps {
  tablet_min: number;
  tablet_max: number;
  tabletandLaptop: number;
  laptop: number;
  desktop: number;
}

const sizes: MediaQueryProps = {
  tablet_min: 768,
  tablet_max: 768,
  tabletandLaptop: 768,
  laptop: 992,
  desktop: 2560,
};

type BackQuoteArgs = string[];

const media = {
  tablet_min: (
    literals: TemplateStringsArray,
    ...args: BackQuoteArgs
  ): CSSProp =>
    css`
      @media only screen and (min-width: ${sizes.tablet_min}px) {
        ${css(literals, ...args)}
      }
    `,
  tablet_max: (
    literals: TemplateStringsArray,
    ...args: BackQuoteArgs
  ): CSSProp =>
    css`
      @media only screen and (max-width: ${sizes.tablet_max}px) {
        ${css(literals, ...args)}
      }
    `,
  tabletandLaptop: (
    literals: TemplateStringsArray,
    ...args: BackQuoteArgs
  ): CSSProp =>
    css`
      @media only screen and (min-width: ${sizes.tablet_min}px) and (max-width: ${sizes.laptop}px) {
        ${css(literals, ...args)}
      }
    `,
  laptop: (literals: TemplateStringsArray, ...args: BackQuoteArgs): CSSProp =>
    css`
      @media only screen and (max-width: ${sizes.laptop}px) {
        ${css(literals, ...args)}
      }
    `,
  desktop: (literals: TemplateStringsArray, ...args: BackQuoteArgs): CSSProp =>
    css`
      @media only screen and (max-width: ${sizes.desktop}px) {
        ${css(literals, ...args)}
      }
    `,
} as Record<
  keyof typeof sizes,
  (literals: TemplateStringsArray, ...args: BackQuoteArgs) => CSSProp
>;

export default media;
