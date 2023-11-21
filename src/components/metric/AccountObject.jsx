import React from "react";
import { Flex, FlexBox } from "../../styles/components/styled";
import { BottomDivider } from "../../lib";
import { formatNumberWithK } from "../../lib/functions";

const AccountObject = ({ metrix }) => {
  const days = metrix.days;
  const loss = metrix.totalLoss;
  const profit = metrix.totalProfit - loss;
  const balance = metrix.balance;
  const gained = (profit / balance) * 100;
  const lost = (loss / balance) * 100;

  const formattedloss = formatNumberWithK(loss);
  const formattedprofit = formatNumberWithK(profit);
  return (
    <div className="flex-col bg-black shadow flex relative w-full rounded-[12px] max-[700px]:w-[90%]">
      <FlexBox className="p-[1rem]">
        <p className="text-white font-kanit">Trading Objectives</p>
        <p className="text-white font-kanit">Results</p>
      </FlexBox>
      <BottomDivider />
      <FlexBox className="p-[1rem]">
        <h2 className="text-neutral-400 font-kanit">Trading Days</h2>
        <p className="text-white font-kanit">{days}</p>
      </FlexBox>
      <BottomDivider />
      <FlexBox className="p-[1rem]">
        <h2 className="text-neutral-400 font-kanit">Total Loss</h2>
        <p className="text-red-600 font-kanit">
          -${formattedloss} {`(-${lost.toFixed(2)}%)`}
        </p>
      </FlexBox>
      <BottomDivider />
      <FlexBox className="p-[1rem]">
        <h2 className="text-neutral-400 font-kanit">Total Profit</h2>
        <p className="text-green-500 font-kanit">
          ${formattedprofit} {`(${gained.toFixed(2)}%)`}
        </p>
      </FlexBox>
    </div>
  );
};

export default AccountObject;
