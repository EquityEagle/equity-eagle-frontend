import React, { useState } from "react";
import {
  CurrentInView,
  NextSideNav,
  ProfileView,
  SideNav,
} from "../../components";
import { StyledDash } from "../../styles/pages/styled";

const Current = () => {
  const [viewProfie, setViewProfie] = useState(false);
  return (
    <StyledDash>
      <SideNav />
      {viewProfie ? (
        <ProfileView setViewProfie={setViewProfie} />
      ) : (
        <CurrentInView setViewProfie={setViewProfie} />
      )}
      <NextSideNav />
    </StyledDash>
  );
};

export default Current;
