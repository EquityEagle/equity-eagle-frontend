import React from "react";
import { StyledDash } from "../../styles/pages/styled";
import { AccountFeed, NextSideNav, SideNav } from "../../components";

const Account = () => {
  return (
    <StyledDash>
      <SideNav />
      <AccountFeed />
      <NextSideNav />
    </StyledDash>
  );
};

export default Account;
