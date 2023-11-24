import React from "react";
import { StyledDash } from "../../styles/pages/styled";
import { NextSideNav, SideNav } from "../../components";
import { NewCommunityModal } from "../../modal";

const NewCommunity = () => {
  return (
    <StyledDash>
      <SideNav />
      <NewCommunityModal />
      <NextSideNav />
    </StyledDash>
  );
};

export default NewCommunity;
