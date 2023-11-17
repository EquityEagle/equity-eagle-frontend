import React, { useEffect } from "react";
import { StyledLandingPage } from "../../styles/pages/styled";
import HeroSection from "../../section/HeroSection";
import WhySection from "../../section/WhySection";
import LastSection from "../../section/LastSection";
import Connect from "../../section/Connect";

const LandingPage = () => {
  useEffect(() => {
    document.title = "Home - EquityEagle";
  });
  return (
    <StyledLandingPage>
      <HeroSection />
      <WhySection />
      <Connect />
      <LastSection />
    </StyledLandingPage>
  );
};

export default LandingPage;
