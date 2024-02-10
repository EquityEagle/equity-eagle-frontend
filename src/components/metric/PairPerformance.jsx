import React from "react";
// import { performancedata } from "../../constants/perform";
import {
  getBuyType,
  getLossNum,
  getPairWithLargestLoss,
  getPairWithLargestProfit,
  getProfitNum,
  getSellType,
  // getTotalTradesBySymbol,
} from "../../lib/functions/metrix";

const PairPerformance = ({ trades }) => {
  const selldata = getSellType(trades);
  const tradesData = getBuyType(trades);
  const totalLoss = getLossNum(trades);
  const totalProfit = getProfitNum(trades);
  const bestpair = getPairWithLargestProfit(trades);
  const lossingpair = getPairWithLargestLoss(trades);
  // const totalTradesBySymbol = getTotalTradesBySymbol(trades);

  return (
    <div className="w-full flex-col relative flex gap-6">
      <div className="flex flex-wrap gap-5 relative justify-evenly">
        {/* {Object?.entries(totalTradesBySymbol)?.map(([symbol, totalTrades]) => (
          <div className="flex gap-2 items-center" key={symbol}>
            <p className="text-white font-poppins">{symbol}</p>
            <h1 className="text-blue-600 font-semibold text-[18px]">
              {totalTrades}
            </h1>
          </div>
        ))} */}
      </div>
      <div className="flex gap-16 justify-evenly">
        <div className="flex gap-5 relative">
          <div className="flex flex-col gap-1 items-center">
            <h1 className={`text-green-500 text-[23px] font-roboto`}>
              {tradesData?.length}
            </h1>
            <p className="text-neutral-400 text-[15px] font-poppins">Buy</p>
          </div>
          <div className="bg-neutral-700 h-auto w-[1px]" />
          <div className="flex flex-col gap-1 items-center">
            <h1 className={`text-red-500 text-[23px] font-roboto`}>
              {selldata?.length}
            </h1>
            <p className="text-neutral-400 text-[15px] font-poppins">Sell</p>
          </div>
        </div>
        <div className="flex gap-5 relative">
          <div className="flex flex-col gap-1 items-center">
            <h1 className={`text-green-500 text-[23px] font-roboto`}>
              {totalProfit?.length}
            </h1>
            <p className="text-neutral-400 text-[15px] font-poppins">Profit</p>
          </div>
          <div className="bg-neutral-700 h-auto w-[1px]" />
          <div className="flex flex-col gap-1 items-center">
            <h1 className={`text-red-500 text-[23px] font-roboto`}>
              {totalLoss?.length}
            </h1>
            <p className="text-neutral-400 text-[15px] font-poppins">Loss</p>
          </div>
        </div>
      </div>
      <div className="flex w-full relative justify-evenly">
        <div className="flex flex-col items-center">
          <h1 className="text-green-500 text-[25px] font-kanit">
            {bestpair?.symbol}
          </h1>
          {/* <p className="text-neutral-400 text-[13px] font-poppins">
            Great job! This pair performed exceptionally well.
          </p> */}
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-red-500 text-[25px] font-kanit">
            {lossingpair?.symbol}
          </h1>
          {/* <p className="text-neutral-400 text-[13px] font-poppins">
            This pair faced losses. Learn and adapt for future trades.
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default PairPerformance;
