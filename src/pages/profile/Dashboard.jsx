import React, { useEffect } from "react";
import { StyledDash } from "../../styles/pages/styled";
import { DashHero, NextSideNav, SideNav } from "../../components";

const Dashboard = () => {
  useEffect(() => {
    document.title = "Dashboard | EquityEagle";
  });

  // const [openTrade, setOpenTrade] = useState(false);

  return (
    <StyledDash>
      <SideNav />
      <DashHero setOpenTrade={null} />
      <NextSideNav />
    </StyledDash>
  );
};

export default Dashboard;
