import React, { useEffect } from "react";
import { SetupFeed, SideNav } from "../../components";
import { StyledDash } from "../../styles/pages/styled";

const Setups = () => {
  useEffect(() => {
    document.title = "Setups - EquityEagle";
  });

  return (
    <StyledDash>
      <SideNav />
      <SetupFeed />
    </StyledDash>
  );
};

export default Setups;
