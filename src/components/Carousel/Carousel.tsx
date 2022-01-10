import React from "react";
import styled, { css } from "styled-components";
import { IFpath } from "../../interface/types";
import CarouselIndicators from "./CarouselIndicators";
import Slide from "./Slide";

const CarouselContainer = styled.section`
  width: 100%;
  overflow: hidden;
  position: relative;
  /* z-index: 0; */
`;

const CarouselSlide = styled.div<{ isTransition: boolean }>`
  display: flex;
  width: 100%;
  transition: ${(props) =>
    props.isTransition ? "transform 0.5s ease-in-out" : "none"};
  transform: translateX(-100%);
`;

const CarouselControl = styled.a<{ isLeft: boolean }>`
  position: absolute;
  left: ${(props) => (props.isLeft ? "0" : "unset")};
  right: ${(props) => (props.isLeft ? "unset" : "0")};
  top: 0;
  width: 15%;
  height: 100%;
  display: flex;
  justify-content: center;
  opacity: 0.5;
  &:hover {
    opacity: 0.8;
  }
`;

const ControlButton = styled.div<{ isLeft: boolean }>`
  position: relative;
  align-self: center;
  width: 1.5rem;
  height: 1.5rem;
  border: 4px solid;

  ${({ theme }) => {
    return css`
      border-color: ${theme.colors.white} transparent transparent
        ${theme.colors.white};
    `;
  }}
  transform: ${(props) => (props.isLeft ? "rotate(-45deg)" : "rotate(135deg)")};
`;

interface CarouselProps {
  readonly imgs: IFpath[];
  readonly isTransition: boolean;
  readonly isMouseOn: boolean;
  readonly handleOnTransitionEnd: () => void;
  readonly prevSlide: () => void;
  readonly nextSlide: () => void;
  readonly handleOnMouseEnter: () => void;
  readonly handleOnMouseLeave: () => void;
  readonly isIndicatorFocus: boolean[];
  readonly ref: HTMLDivElement;
}

const Carousel = React.forwardRef<HTMLDivElement, CarouselProps>(
  (props, ref) => {
    return (
      <CarouselContainer
        onMouseEnter={props.handleOnMouseEnter}
        onMouseLeave={props.handleOnMouseLeave}
      >
        <CarouselSlide
          ref={ref}
          onTransitionEnd={props.handleOnTransitionEnd}
          isTransition={props.isTransition}
        >
          {props.imgs.map((img) => {
            return (
              <Slide
                img={img.path}
                key={img.key}
                text={img.text}
                subText={img.subText}
              />
            );
          })}
        </CarouselSlide>
        <CarouselControl isLeft={true} onClick={props.prevSlide}>
          <ControlButton isLeft={true} />
        </CarouselControl>
        <CarouselControl isLeft={false} onClick={props.nextSlide}>
          <ControlButton isLeft={false} />
        </CarouselControl>
        <CarouselIndicators isIndicatorFocus={props.isIndicatorFocus} />
      </CarouselContainer>
    );
  }
);

export default Carousel;
