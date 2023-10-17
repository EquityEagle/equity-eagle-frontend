import React from "react";
import { StyledDash } from "../../styles/pages/styled";
import { NextSideNav, SideNav, ViewedSetup } from "../../components";

const SetupId = () => {
  return (
    <StyledDash>
      <SideNav />
      <ViewedSetup />
      <NextSideNav />
    </StyledDash>
  );
};

export default SetupId;
