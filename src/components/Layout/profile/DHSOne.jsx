import React from "react";
import { FlexBox } from "../../../styles/components/styled";

const DHSOne = ({ user }) => {
  return (
    <FlexBox className="max-[800px]:flex-col">
      <div className="flex flex-col items-center gap-1">
        <h1 className="text-white font-kanit text-[35px]">{user?.winrate}%</h1>
        <h2 className="text-neutral-500 text-[14px] font-roboto">Win rate</h2>
      </div>
      <div className="flex flex-col items-center gap-1">
        <h1 className="text-red-500 font-kanit text-[35px]">-$930</h1>
        <h2 className="text-neutral-500 text-[14px] font-roboto">
          Highest loss
        </h2>
      </div>
      {/* <div className="flex flex-col items-center gap-1">
        <h1 className="text-green-500 font-kanit text-[35px]">
          ${user?.lowestProfit?.toLocaleString()}
        </h1>
        <h2 className="text-neutral-500 text-[14px] font-roboto">
          Highest win
        </h2>
      </div> */}
      <div className="flex flex-col items-center gap-1">
        <h1 className="text-white font-kanit text-[35px]">{user?.trades}</h1>
        <h2 className="text-neutral-500 text-[14px] font-roboto">
          Total trade
        </h2>
      </div>
      <div className="flex flex-col items-center gap-1">
        <h1 className="text-white font-kanit text-[35px]">
          {user?.lotsSize?.toFixed(2)}
        </h1>
        <h2 className="text-neutral-500 text-[14px] font-roboto">Lots</h2>
      </div>
      <div className="flex flex-col items-center gap-1">
        <h1 className="text-green-500 font-kanit text-[35px]">
          ${user?.highProfit?.toLocaleString()}
        </h1>
        <h2 className="text-neutral-500 text-[14px] font-roboto">
          Total profit
        </h2>
      </div>
      <div className="flex flex-col items-center gap-1">
        <h1 className="text-red-500 font-kanit text-[35px]">
          -${user?.highLoss?.toLocaleString()}
        </h1>
        <h2 className="text-neutral-500 text-[14px] font-roboto">Total loss</h2>
      </div>
    </FlexBox>
  );
};

export default DHSOne;
