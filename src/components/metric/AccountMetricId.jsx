import React from "react";
import { FlexBox } from "../../styles/components/styled";
import { GoArrowRight } from "react-icons/go";
import DHSOne from "../Layout/profile/DHSOne";
import DHSII from "../Layout/profile/DHSII";

const AccountMetricId = ({ userdata, setOpenTrade }) => {
  return (
    <FlexBox className="flex-col">
      <FlexBox className="flex-col">
        <DHSOne user={userdata} />
        <DHSII user={userdata} />
      </FlexBox>
      <div className="h-[1px] self-center w-[80%] bg-neutral-400" />
      <p className="text-neutral-400 font-kanit">Trades</p>
      <GoArrowRight
        className="p-2 cursor-pointer bg-white rounded-full hover:rounded-[8px] w-[50px] h-[50px] flex items-center justify-center "
        size={25}
        onClick={() => setOpenTrade(true)}
      />
    </FlexBox>
  );
};

export default AccountMetricId;
