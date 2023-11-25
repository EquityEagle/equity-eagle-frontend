import React from "react";
import { StyledDash } from "../../styles/pages/styled";
import { NextSideNav, NotificationFeed, SideNav } from "../../components";

const Notification = () => {
  return (
    <StyledDash>
      <SideNav />
      <NotificationFeed />
      <NextSideNav />
    </StyledDash>
  );
};

export default Notification;
