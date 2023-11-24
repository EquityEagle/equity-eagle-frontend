import React, { useEffect } from "react";
import { StyledDash } from "../../styles/pages/styled";
import { AccountFeed, NextSideNav, SideNav } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getAvailbleUser } from "../../redux/user";
import { ScaleInLoader } from "../../lib";

const Account = () => {
  const userState = useSelector((state) => state.USERS);
  const user = userState.AVAILABLE;
  const isLoading = userState.FETCH_ONE_STATUS === "Pending";
  const { username } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAvailbleUser(username));
  }, [username]);

  return (
    <StyledDash>
      <SideNav />
      {isLoading ? (
        <div className="w-full h-full flex flex-col relative translate-y-64">
          <ScaleInLoader />
        </div>
      ) : (
        <AccountFeed user={user} />
      )}
      <NextSideNav />
    </StyledDash>
  );
};

export default Account;
