import React from "react";
import { StyledHero } from "../styles/section/styled";
import { LeftBlur } from "../styles/Global";

const HeroSection = () => {
  return (
    <StyledHero>
      <h1 className="text-[60px] text-center w-[450px] font-semibold relative z-[90] font-kanit text-white">
        Elevate Your Trading Journey
      </h1>
    </StyledHero>
  );
};

export default HeroSection;
