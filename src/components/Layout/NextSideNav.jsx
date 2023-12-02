import React from "react";
import styled from "styled-components";
import SideNav from "./SideNav";
import { BottomDivider, Button, ScaleInLoader } from "../../lib";
import { useSelector } from "react-redux";
import ConnectWithTraders from "../users/ConnectWithTraders";
import { Link } from "react-router-dom";

const NextSideNav = () => {
  const userState = useSelector((state) => state.USERS);
  const traders = userState.TRADES;
  const isLoading = userState.FETCH_STATUS === "Pending";
  return (
    <StyledSideNav className="border border-l-neutral-900">
      <h1 className="text-white font-kanit text-[20px] p-[16px]">
        Connect with traders
      </h1>
      <BottomDivider />
      <div className="flex flex-col mt-5 w-full relative">
        {isLoading ? (
          <ScaleInLoader className="translate-y-36" />
        ) : (
          traders &&
          traders.map((user, index) => (
            <ConnectWithTraders user={user} key={index} />
          ))
        )}
      </div>
      <Link to="/connect">
        <Button
          primary
          text="View More"
          className="items-center hover:bg-transparent hover:opacity-75"
        />
      </Link>
    </StyledSideNav>
  );
};

const StyledSideNav = styled.nav`
  display: flex;
  flex-direction: column;
  height: 100%;
  position: fixed;
  width: 300px;
  align-items: center;
  /* padding: 2rem; */
  right: 0;
  background-color: #000;

  @media (max-width: 1024px) {
    width: 290px;
  }
  @media (max-width: 800px) {
    display: none;
  }
`;

export default NextSideNav;
