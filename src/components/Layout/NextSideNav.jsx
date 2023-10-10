import React from "react";
import styled from "styled-components";

const NextSideNav = () => {
  return (
    <StyledSideNav>
      <StyledSideNavContainer>here</StyledSideNavContainer>
    </StyledSideNav>
  );
};

const StyledSideNav = styled.nav`
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;
  width: 450px;

  @media (max-width: 1024px) {
    width: 200px;
  }
  @media (max-width: 700px) {
    display: none;
  }
`;

const StyledSideNavContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  position: fixed;
  background: #000;
  width: 450px;
  padding: 1rem;

  @media (max-width: 1024px) {
    width: 100px;
  }
  @media (max-width: 700px) {
    display: none;
  }
`;

export default NextSideNav;
