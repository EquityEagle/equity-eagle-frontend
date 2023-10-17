import React from "react";
import styled from "styled-components";
import SideNav from "./SideNav";

const NextSideNav = () => {
  return (
    <StyledSideNav className="border border-l-neutral-900"></StyledSideNav>
  );
};

const StyledSideNav = styled.nav`
  display: flex;
  flex-direction: column;
  height: 100%;
  position: fixed;
  width: 300px;
  right: 0;
  background-color: #000;

  @media (max-width: 1024px) {
    width: 200px;
  }
  @media (max-width: 800px) {
    display: none;
  }
`;

export default NextSideNav;
