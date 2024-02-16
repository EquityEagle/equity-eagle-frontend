import React, { useEffect } from "react";
import { StyledDash } from "../../styles/pages/styled";
import { NextSideNav, SettingsContainer, SideNav } from "../../components";

const Explore = () => {
  useEffect(() => {
    document.title = "Account Setting | EquityEagle";
  });
  return (
    <StyledDash>
      <SideNav />
      <SettingsContainer />
      <NextSideNav />
    </StyledDash>
  );
};

export default Explore;
