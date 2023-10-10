import React, { useEffect } from "react";
import { StyledDash } from "../../styles/pages/styled";
import { DashHero, NextSideNav, SideNav } from "../../components";

const Dashboard = () => {
  useEffect(() => {
    document.title = "Dashboard - EquityEagle";
  });
  return (
    <StyledDash>
      <SideNav />
      <DashHero />
      <NextSideNav />
    </StyledDash>
  );
};

export default Dashboard;
