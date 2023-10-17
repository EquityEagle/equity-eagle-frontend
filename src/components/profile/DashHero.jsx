import React, { useEffect, useState } from "react";
import { FlexBox, StyledHeroDash } from "../../styles/components/styled";
import { useDispatch, useSelector } from "react-redux";
import { getUserById } from "../../helper/fetch";
import { DotChart, LineChart, PriceDonutChart } from "../../lib";
import { pricedata } from "../../constants";
import DHSOne from "../Layout/profile/DHSOne";
import { LuLogOut } from "react-icons/lu";
import { logOut } from "../../redux/auth";

const DashHero = () => {
  const user = useSelector((state) => state.AUTH);
  const [userdata, setUserdata] = useState([]);
  const rate = 100;
  const dispatch = useDispatch();
  const lost = rate - userdata.winRate;

  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "June"],
    values: [30, 40, 25, 50, 45, 20], // Sample data points
  };

  useEffect(() => {
    const getuser = async () => {
      const response = await getUserById(user.id);
      setUserdata(response);
    };
  }, [userdata]);

  function LogOut() {
    dispatch(logOut());
  }
  return (
    <StyledHeroDash className="relative">
      <LuLogOut
        className="hidden max-[700px]:block self-start"
        color="#fff"
        size={25}
        onClick={LogOut}
      />
      <h1 className="text-white font-kanit text-[30px]">Hi, {user.name}</h1>
      <div className="relative w-[90%] max-[1024px]:w-[80%] max-[800px]:w-full rounded-[9px] overflow-y-auto bg-slate-700 overflow-x-auto hide-scroll">
        <LineChart data={data} />
      </div>
      <p className="text-neutral-400 font-kanit">Detailed Metric</p>
      <FlexBox>
        <DHSOne user={userdata} />
      </FlexBox>
      <div className="h-[1px] self-center w-[80%] bg-neutral-400" />
      <p className="text-neutral-400 font-kanit">Trades</p>
    </StyledHeroDash>
  );
};

export default DashHero;
