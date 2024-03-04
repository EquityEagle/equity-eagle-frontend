import React from "react";
import styled from "styled-components";
// import SideNav from "./SideNav";
import { BottomDivider, Button, ScaleInLoader } from "../../lib";
import { useSelector } from "react-redux";
import ConnectWithTraders from "../users/ConnectWithTraders";
import { Link } from "react-router-dom";

const NextSideNav = () => {
  const userState = useSelector((state) => state.USERS);
  const traders = userState.TRADES;
  const isLoading = userState.FETCH_STATUS === "Pending";
  const userId = useSelector((state) => state.AUTH.id);
  const systemconfig = useSelector((state) => state.SYSTEM);
  const islight = systemconfig.mode === "light";
  const isdark = systemconfig.mode === "dark";
  return (
    <StyledSideNav islight={islight} className="border border-l-neutral-800">
      <h1
        className={`${
          islight ? "text-black" : "text-white"
        } font-kanit text-[20px] p-[16px]`}
      >
        Connect with traders
      </h1>
      <BottomDivider />
      <div className="flex flex-col mt-5 w-full relative">
        {isLoading ? (
          <ScaleInLoader className="translate-y-36" />
        ) : (
          traders &&
          traders
            .filter((user) => user._id !== userId)
            .map((user, index) => (
              <ConnectWithTraders user={user} key={index} />
            ))
        )}
      </div>
      <Link to="/connect">
        <Button
          primary={isdark}
          light={islight}
          text="View More"
          className={`items-center hover:opacity-75 ${
            isdark && "hover:bg-transparent"
          }`}
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
  background-color: ${({ islight }) => (islight ? "#fff" : "#000")};

  @media (max-width: 1024px) {
    width: 290px;
  }
  @media (max-width: 800px) {
    display: none;
  }
`;

export default NextSideNav;
