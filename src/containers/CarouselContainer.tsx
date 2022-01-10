import React, { useCallback, useEffect, useRef, useState } from "react";
import Carousel from "../components/Carousel/Carousel";
import { ImgsData } from "../data/carousle";

const CarouselContainer = () => {
  const [curSlide, setCurSlide] = useState<number>(1);
  const [indicatorIdx, setIndicatorIdx] = useState<number>(0);
  const [isIndicatorFocus, setIsIndicatorFocus] = useState<boolean[]>([
    true,
    false,
    false,
  ]);

  const [isTransition, setIsTransition] = useState<boolean>(true);
  const [isTransitionEnd, setIsTransitionEnd] = useState<boolean>(true);
  const [isMouseOn, setIsMouseOn] = useState(false);
  const slideRef = useRef<HTMLDivElement>(null);

  const setIndicatorFocus = useCallback(() => {
    const beFalse = [false, false, false];
    beFalse[indicatorIdx] = true;

    setIsIndicatorFocus([...beFalse]);
  }, [indicatorIdx]);

  const nextSlide = useCallback(() => {
    // slide가 이동중이라면 return
    if (curSlide >= ImgsData.length - 1 || isTransitionEnd === false) return;
    setIsTransitionEnd(false);
    setCurSlide((prevstate) => prevstate + 1);
    if (slideRef.current) {
      setIsTransition(true);
    }

    // indicator
    setIndicatorIdx((prevState) => prevState + 1);
    if (indicatorIdx >= 2) {
      setIndicatorIdx(0);
    }
  }, [curSlide, indicatorIdx, isTransitionEnd]);

  const prevSlide = useCallback(() => {
    // slide가 이동중이라면 return
    if (curSlide <= 0 || isTransitionEnd === false) return;
    setIsTransitionEnd(false);
    if (slideRef.current) {
      setIsTransition(true);
    }
    setCurSlide((prevState) => prevState - 1);

    // indicator
    setIndicatorIdx((prevState) => prevState - 1);
    if (indicatorIdx <= 0) {
      setIndicatorIdx(2);
    }
  }, [curSlide, indicatorIdx, isTransitionEnd]);

  const handleOnTransitionEnd = () => {
    if (curSlide === 0) {
      setIsTransition(false);
      setCurSlide(ImgsData.length - 2);
    }
    if (curSlide === ImgsData.length - 1) {
      setIsTransition(false);
      setCurSlide((prevState) => ImgsData.length - prevState);
    }
    if (slideRef.current) {
      slideRef.current.style.transform = `translateX(${-curSlide}00%)`;
    }
    setIsTransitionEnd(true);
    setIndicatorFocus();
  };

  useEffect(() => {
    if (slideRef.current) {
      slideRef.current.style.transform = `translateX(${-curSlide}00%)`;
    }
  }, [curSlide, indicatorIdx]);

  useEffect(() => {
    setIndicatorFocus();
  }, [setIndicatorFocus]);

  useEffect(() => {
    if (isMouseOn === false) {
      const tick = setInterval(() => {
        // setIsAutoSlide(false);
        nextSlide();
      }, 3000);
      return () => clearTimeout(tick);
    }
  });

  const handleOnMouseEnter = () => {
    setIsMouseOn(true);
  };

  const handleOnMouseLeave = () => {
    setIsMouseOn(false);
  };

  return (
    <Carousel
      imgs={ImgsData}
      ref={slideRef}
      isMouseOn={isMouseOn}
      handleOnTransitionEnd={handleOnTransitionEnd}
      isTransition={isTransition}
      prevSlide={prevSlide}
      nextSlide={nextSlide}
      handleOnMouseEnter={handleOnMouseEnter}
      handleOnMouseLeave={handleOnMouseLeave}
      isIndicatorFocus={isIndicatorFocus}
    />
  );
};

export default CarouselContainer;
