import React, { useEffect } from "react";
import { NextSideNav, SideNav } from "../../components";
import { StyledDash } from "../../styles/pages/styled";

const Saved = () => {
  useEffect(() => {
    document.title = "Saved - EquityEagle";
  });

  return (
    <StyledDash>
      <SideNav />
      {/* <SetupFeed /> */}
      <NextSideNav />
    </StyledDash>
  );
};

export default Saved;
