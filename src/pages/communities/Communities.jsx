import React, { useEffect } from "react";
import { StyledDash } from "../../styles/pages/styled";
import { CommunityFeed, NextSideNav, SideNav } from "../../components";

const Communities = () => {
  useEffect(() => {
    document.title = "Community - EquityEagle";
  });
  return (
    <StyledDash>
      <SideNav />
      <CommunityFeed />
      <NextSideNav />
    </StyledDash>
  );
};

export default Communities;
