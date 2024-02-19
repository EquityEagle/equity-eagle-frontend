import React from "react";
import { StyledDash } from "../styles/pages/styled";
import { ComingSoonFeed, NextSideNav, SideNav } from "../components";

const ComingSoon = () => {
  return (
    <StyledDash>
      <SideNav />
      <ComingSoonFeed />
      <NextSideNav />
    </StyledDash>
  );
};

export default ComingSoon;
