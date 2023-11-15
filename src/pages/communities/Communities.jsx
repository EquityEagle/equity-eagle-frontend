import React from "react";
import { StyledDash } from "../../styles/pages/styled";
import { CommunityFeed, NextSideNav, SideNav } from "../../components";

const Communities = () => {
  return (
    <StyledDash>
      <SideNav />
      <CommunityFeed />
      <NextSideNav />
    </StyledDash>
  );
};

export default Communities;
