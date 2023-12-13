import React from "react";
import { Flex, FlexBox } from "../../styles/components/styled";
import { BottomDivider } from "../../lib";
import { formatNumberWithK } from "../../lib/functions";
import {
  calTotalLoss,
  calTotalProfit,
  calWinrate,
} from "../../lib/functions/metrix";

const AccountStatic = ({ metrix, trades }) => {
  const totalTrade = trades.length;
  const formattedTrade = formatNumberWithK(totalTrade);
  const winRate = calWinrate(trades);
  const totalLoss = calTotalLoss(trades);
  const totalProfit = calTotalProfit(trades);
  const equity = metrix.balance + totalProfit - totalLoss;
  const rrr = totalLoss;

  // console.log("rr:", rrr);

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
            {metrix.totallots}
          </p>
        </Flex>
        <Flex className="gap-1 flex-col">
          <h2 className="text-neutral-400 font-kanit">Average profit:</h2>
          <p className="text-green-500 text-[15px] font-poppins">
            ${equity.toLocaleString()}
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
            -${equity.toLocaleString()}
          </p>
        </Flex>
      </FlexBox>
      <BottomDivider />
      <FlexBox className="p-[1rem]">
        <Flex className="gap-1 flex-col">
          <h2 className="text-neutral-400 font-kanit">Average RRR:</h2>
          <p className={`text-[15px] font-poppins text-white`}>
            {rrr.toFixed(1)}
          </p>
        </Flex>
      </FlexBox>
      {/* <BottomDivider /> */}
    </div>
  );
};

export default AccountStatic;
