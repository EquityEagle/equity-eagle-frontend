import React, { useEffect, useState } from "react";
import { FlexBox, StyledHeroDash } from "../../styles/components/styled";
import { useDispatch, useSelector } from "react-redux";
import { getUserById } from "../../helper/fetch";
import { Error, ScaleInLoader } from "../../lib";
import { pricedata } from "../../constants";
import { LuLogOut } from "react-icons/lu";
import { logOut } from "../../redux/auth";
import AccountMetric from "../metric/AccountMetric";
import { findAllAccount } from "../../redux/accountmetrix";
import { FlexBetween } from "../../styles/Global";
import { Placeholder } from "../../assets";
import { useMobileModal } from "../../hooks";

const DashHero = ({ setOpenTrade }) => {
  const user = useSelector((state) => state.AUTH);
  const [userdata, setUserdata] = useState([]);
  const userId = user.id;
  const dispatch = useDispatch();
  const accState = useSelector((state) => state.Acc);
  const isLoading = accState.FETCH_STATUS === "Pending";
  const Rejected = accState.FETCH_STATUS === "Rejected";
  const mobilemodal = useMobileModal();

  useEffect(() => {
    dispatch(findAllAccount(userId));
  }, []);

  function refreshFetch() {
    dispatch(findAllAccount(userId));
  }

  useEffect(() => {
    const getuser = async () => {
      const response = await getUserById(user.id);
      setUserdata(response);
    };
    // getuser();
  }, [userdata]);

  function LogOut() {
    dispatch(logOut());
  }
  return (
    <StyledHeroDash className="relative max-[700px]:mb-[5rem]">
      <FlexBox className="w-full h-full">
        <img
          src={user.profile?.url || Placeholder}
          alt="User profile"
          onClick={mobilemodal.onOpen}
          className="w-[40px] h-[40px] rounded-full hidden max-[700px]:block"
        />
        <LuLogOut
          className="hidden max-[700px]:block self-start"
          color="#fff"
          size={25}
          onClick={LogOut}
        />
      </FlexBox>
      <h1 className="text-white font-kanit text-[30px]">Hi, {user.name}</h1>
      <div className="relative w-[90%] max-[1024px]:w-[80%] max-[800px]:w-full rounded-[9px] overflow-y-auto bg-slate-700 overflow-x-auto hide-scroll"></div>
      <p className="text-neutral-400 font-kanit">Trading Accounts</p>
      <AccountMetric userdata={userdata} setOpenTrade={setOpenTrade} />
      {isLoading && <ScaleInLoader className="items-center" />}
      {Rejected && (
        <Error
          network
          btnText="Refresh"
          text="Network error. Please try again later."
          onClick={refreshFetch}
        />
      )}
    </StyledHeroDash>
  );
};

export default DashHero;
