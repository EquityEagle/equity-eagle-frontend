import React from "react";
import { StyledHero } from "../styles/section/styled";
import { LeftBlur, RightBlur } from "../styles/Global";
import { Button } from "../lib";
import { BsArrowRightShort } from "react-icons/bs";

const HeroSection = () => {
  const bt = (
    <div className="flex gap-[5px] items-center">
      <p>Get Started for Free</p>
      <BsArrowRightShort size={20} />
    </div>
  );

  return (
    <StyledHero>
      <LeftBlur className="top-[20rem] left-[20rem]" />
      <RightBlur className="top-[20rem] right-[20rem]" />
      <h1 className="text-[60px] text-center w-[450px] max-[800px]:w-full max-[700px]:text-[40px] max-[700px]:w-full font-semibold relative z-[90] font-kanit text-white">
        Elevate Your Trading Journey
      </h1>
      <p className="text-white font-kanit text-center w-[650px] max-[800px]:w-full max-[700px]:w-full text-[25px] max-[700px]:text-[19px] mt-[1rem]">
        Unlock Your Potential: Empower Your Journey with Documentation and
        Journaling to Soar Toward Your Goals with Equity Eagle
      </p>
      <Button text={bt} secondary padding="10px" />
    </StyledHero>
  );
};

export default HeroSection;
