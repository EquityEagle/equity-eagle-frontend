import React from "react";
import { StyledDash } from "../../styles/pages/styled";
import {
  AccountMetricId,
  NextSideNav,
  SetupFeed,
  SideNav,
} from "../../components";

const Metric = () => {
  return (
    <StyledDash>
      <SideNav />
      <AccountMetricId />
      <NextSideNav />
    </StyledDash>
  );
};

export default Metric;
