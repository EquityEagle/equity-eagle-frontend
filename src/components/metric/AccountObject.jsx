import React, { useEffect, useState } from "react";
import { FlexBox } from "../../styles/components/styled";
import { BottomDivider } from "../../lib";
import { formatNumberWithK } from "../../lib/functions";
import { getAccountTrades } from "../../helper/fetch";
import {
  calTotalLoss,
  calTotalProfit,
  isDrawdownBelowOnePercent,
} from "../../lib/functions/metrix";

const AccountObject = ({ metrix }) => {
  const metrixId = metrix._id;
  const [trades, setTrades] = useState([]);
  useEffect(() => {
    const gettrades = async () => {
      const data = await getAccountTrades(metrixId);
      setTrades(data);
    };
    if (metrix._id) {
      gettrades();
    } else return;
  }, [trades, metrix._id, metrixId]);

  const days = metrix.days;
  const loss = calTotalLoss(trades);
  const Profit = calTotalProfit(trades);
  const profit = Profit - loss;
  const balance = metrix.balance;
  const gained = (profit / balance) * 100;
  const lost = (loss / balance) * 100;

  const isDrawdown = isDrawdownBelowOnePercent(trades, balance);

  const formattedloss = formatNumberWithK(loss);
  // const formattedprofit = formatNumberWithK(profit);
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
        <p
          className={`${
            isDrawdown ? "text-red-600" : "text-green-500"
          } font-kanit`}
        >
          ${profit?.toLocaleString()} {`(${gained.toFixed(2)}%)`}
        </p>
      </FlexBox>
    </div>
  );
};

export default AccountObject;
