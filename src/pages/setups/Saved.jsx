import React, { useEffect } from "react";
import { NextSideNav, SavedIdea, SideNav } from "../../components";
import { StyledDash } from "../../styles/pages/styled";

const Saved = () => {
  useEffect(() => {
    document.title = "Saved - EquityEagle";
  });

  return (
    <StyledDash>
      <SideNav />
      <SavedIdea />
      <NextSideNav />
    </StyledDash>
  );
};

export default Saved;
