import React, { useEffect, useState } from "react";
import { Flex, FlexBox } from "../../styles/components/styled";
import { BottomDivider } from "../../lib";
import { formatNumberWithK } from "../../lib/functions";
import {
  // calTotalLoss,
  // calTotalProfit,
  calWinrate,
  getAverageLoss,
  getAverageProfit,
  getEquity,
  getLargestLoss,
  getLargestProfit,
  getLots,
  getRRR,
} from "../../lib/functions/metrix";
import { getAccountTrades } from "../../helper/fetch";

const AccountStatic = ({ metrix }) => {
  const metrixId = metrix._id;
  const balance = metrix.balance;
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

  const totalTrade = trades.length;
  const formattedTrade = formatNumberWithK(totalTrade);
  const winRate = calWinrate(trades);
  const equity = getEquity(trades, balance);
  const rrr = getRRR(trades);
  const averageprofit = getAverageProfit(trades);
  const averageloss = getAverageLoss(trades);
  const lots = getLots(trades);
  const largeprofit = getLargestProfit(trades);
  const largeloss = getLargestLoss(trades);

  return (
    <div className="flex-col bg-black shadow flex relative w-full rounded-[12px] max-[700px]:w-[90%]">
      <FlexBox className="p-[1rem]">
        <p className="text-white font-kanit">Statistics</p>
      </FlexBox>
      <BottomDivider />
      <FlexBox className="p-[1rem]">
        <Flex className="gap-1 flex-col">
          <h2 className="text-neutral-400 font-kanit">Equity:</h2>
          <p className="text-white text-[15px] font-poppins">
            ${equity.toLocaleString()}
          </p>
        </Flex>
        <Flex className="gap-1 flex-col">
          <h2 className="text-neutral-400 font-kanit">No. of trades:</h2>
          <p className="text-white text-[15px] font-poppins">
            {formattedTrade}
          </p>
        </Flex>
      </FlexBox>
      <BottomDivider />
      <FlexBox className="p-[1rem]">
        <Flex className="gap-1 flex-col">
          <h2 className="text-neutral-400 font-kanit">Lots:</h2>
          <p className="text-white text-[15px] font-poppins">
            {lots?.toFixed(2)}
          </p>
        </Flex>
        <Flex className="gap-1 flex-col">
          <h2 className="text-neutral-400 font-kanit">Average profit:</h2>
          <p className="text-green-500 text-[15px] font-poppins">
            ${averageprofit.toLocaleString()}
          </p>
        </Flex>
      </FlexBox>
      <BottomDivider />
      <FlexBox className="p-[1rem]">
        <Flex className="gap-1 flex-col">
          <h2 className="text-neutral-400 font-kanit">Win rate:</h2>
          <p
            className={`text-[15px] font-poppins ${
              winRate < 35
                ? "text-red-600"
                : winRate < 40
                ? "text-yellow-400"
                : "text-green-500"
            }`}
          >
            {winRate}%
          </p>
        </Flex>
        <Flex className="gap-1 flex-col">
          <h2 className="text-neutral-400 font-kanit">Average loss:</h2>
          <p className="text-red-600 text-[15px] font-poppins">
            -${averageloss.toLocaleString()}
          </p>
        </Flex>
      </FlexBox>
      <BottomDivider />
      <FlexBox className="p-[1rem]">
        <Flex className="gap-1 flex-col">
          <h2 className="text-neutral-400 font-kanit">Average RRR:</h2>
          <p className={`text-[15px] font-poppins text-white`}>
            {rrr?.toFixed(2) || rrr || 0}
          </p>
        </Flex>
        <Flex className="gap-1 flex-col">
          <h2 className="text-neutral-400 font-kanit">Largest profit</h2>
          <p className="text-green-500 text-[15px] font-poppins">
            ${largeprofit.toLocaleString()}
          </p>
        </Flex>
      </FlexBox>
      <BottomDivider />
      <FlexBox className="p-[1rem]">
        <Flex className="gap-1 flex-col">
          <h2 className="text-neutral-400 font-kanit">Largest loss</h2>
          <p className="text-red-500 text-[15px] font-poppins">
            -${largeloss.toLocaleString()}
          </p>
        </Flex>
      </FlexBox>
    </div>
  );
};

export default AccountStatic;
