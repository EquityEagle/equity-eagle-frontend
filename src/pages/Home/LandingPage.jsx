import React from "react";
import { StyledLandingPage } from "../../styles/pages/styled";
import HeroSection from "../../section/HeroSection";
import WhySection from "../../section/WhySection";
import Journaling from "../../section/Journaling";
import LastSection from "../../section/LastSection";

const LandingPage = () => {
  return (
    <StyledLandingPage>
      <HeroSection />
      <WhySection />
      <Journaling />
      <LastSection />
    </StyledLandingPage>
  );
};

export default LandingPage;
