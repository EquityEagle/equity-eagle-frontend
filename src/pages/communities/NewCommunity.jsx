import React, { useEffect } from "react";
import { StyledDash } from "../../styles/pages/styled";
import { NextSideNav, SideNav } from "../../components";
import { NewCommunityModal } from "../../modal";

const NewCommunity = () => {
  useEffect(() => {
    document.title = "New-Community | EquityEagle";
  });
  return (
    <StyledDash>
      <SideNav />
      <NewCommunityModal />
      <NextSideNav />
    </StyledDash>
  );
};

export default NewCommunity;
