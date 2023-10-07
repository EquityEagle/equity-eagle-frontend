import React from "react";
import { FlexBox } from "../../../styles/components/styled";

const DHSOne = ({ user }) => {
  return (
    <FlexBox className="max-[800px]:flex-col">
      <div className="flex flex-col items-center gap-1">
        <h1 className="text-white font-kanit text-[35px]">95%</h1>
        <h2 className="text-neutral-500 text-[14px] font-roboto">Win rate</h2>
      </div>
      <div className="flex flex-col items-center gap-1">
        <h1 className="text-red-500 font-kanit text-[35px]">-$930</h1>
        <h2 className="text-neutral-500 text-[14px] font-roboto">
          Highest loss
        </h2>
      </div>
      <div className="flex flex-col items-center gap-1">
        <h1 className="text-green-500 font-kanit text-[35px]">$2,400</h1>
        <h2 className="text-neutral-500 text-[14px] font-roboto">
          Highest win
        </h2>
      </div>
      <div className="flex flex-col items-center gap-1">
        <h1 className="text-white font-kanit text-[35px]">24</h1>
        <h2 className="text-neutral-500 text-[14px] font-roboto">
          Total trade
        </h2>
      </div>
      <div className="flex flex-col items-center gap-1">
        <h1 className="text-white font-kanit text-[35px]">9</h1>
        <h2 className="text-neutral-500 text-[14px] font-roboto">Lots</h2>
      </div>
      <div className="flex flex-col items-center gap-1">
        <h1 className="text-green-500 font-kanit text-[35px]">$9,769</h1>
        <h2 className="text-neutral-500 text-[14px] font-roboto">
          Total profit
        </h2>
      </div>
      <div className="flex flex-col items-center gap-1">
        <h1 className="text-red-500 font-kanit text-[35px]">-$1,890</h1>
        <h2 className="text-neutral-500 text-[14px] font-roboto">Total loss</h2>
      </div>
    </FlexBox>
  );
};

export default DHSOne;
