import React from "react";
import { StyledDash } from "../../styles/pages/styled";
import { ConnectWith, NextSideNav, SideNav } from "../../components";

const Connect = () => {
  return (
    <StyledDash>
      <SideNav />
      <ConnectWith />
      <NextSideNav />
    </StyledDash>
  );
};

export default Connect;
