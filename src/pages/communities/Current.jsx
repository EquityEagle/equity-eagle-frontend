import React from "react";
import { CurrentInView, NextSideNav, SideNav } from "../../components";
import { StyledDash } from "../../styles/pages/styled";

const Current = () => {
  return (
    <StyledDash>
      <SideNav />
      <CurrentInView />
      <NextSideNav />
    </StyledDash>
  );
};

export default Current;
