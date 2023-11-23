import React, { useEffect } from "react";
import { StyledDash } from "../../styles/pages/styled";
import { SideNav } from "../../components";

const Explore = () => {
  useEffect(() => {
    document.title = "Account Setting | EquityEagle";
  });
  return (
    <StyledDash>
      <SideNav />
    </StyledDash>
  );
};

export default Explore;
