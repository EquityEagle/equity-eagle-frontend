import React from "react";
import { StyledLandingPage } from "../../styles/pages/styled";
import HeroSection from "../../section/HeroSection";
import WhySection from "../../section/WhySection";
import AboutSection from "./AboutSection";

const LandingPage = () => {
  return (
    <StyledLandingPage>
      <HeroSection />
      <AboutSection />
      <WhySection />
    </StyledLandingPage>
  );
};

export default LandingPage;
