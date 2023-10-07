import React, { useEffect } from "react";
import { StyledDash } from "../../styles/pages/styled";
import { DashHero, SideNav } from "../../components";

const Dashboard = () => {
  useEffect(() => {
    document.title = "Dashboard - EquityEagle";
  });
  return (
    <StyledDash>
      <SideNav />
      <DashHero />
    </StyledDash>
  );
};

export default Dashboard;
