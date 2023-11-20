import React from "react";
import { StyledDash, StyledMetrix } from "../../styles/pages/styled";
import {
  AccountMetricId,
  NextSideNav,
  SetupFeed,
  SideNav,
} from "../../components";

const Metric = () => {
  return (
    <StyledMetrix>
      <SideNav />
      <AccountMetricId />
    </StyledMetrix>
  );
};

export default Metric;
