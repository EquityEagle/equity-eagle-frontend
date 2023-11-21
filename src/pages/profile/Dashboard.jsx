import React, { useEffect, useState } from "react";
import { StyledDash } from "../../styles/pages/styled";
import { DashHero, NextSideNav, SideNav, TradesFeed } from "../../components";

const Dashboard = () => {
  useEffect(() => {
    document.title = "Dashboard | EquityEagle";
  });

  const [openTrade, setOpenTrade] = useState(false);
  return (
    <StyledDash>
      <SideNav />
      {openTrade ? (
        <TradesFeed setOpenTrade={setOpenTrade} />
      ) : (
        <DashHero setOpenTrade={setOpenTrade} />
      )}
      <NextSideNav />
    </StyledDash>
  );
};

export default Dashboard;
