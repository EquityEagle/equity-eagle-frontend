import React, { useState } from "react";
import { FlexBox } from "../../../styles/components/styled";
import { BsFire } from "react-icons/bs";
import { CustomTitle } from "../../../lib";
import { FaHandHoldingWater } from "react-icons/fa";

const DHSII = ({ user }) => {
  const [isHovered, setIsHovered] = useState(false);
  const type = false;
  return (
    <FlexBox className="max-[800px]:flex-col">
      <div className="flex flex-col items-center gap-1">
        <h1 className="text-green-600 font-kanit text-[30px]">GBPCAD</h1>
        <h2 className="text-neutral-500 text-[14px] font-roboto">
          Wining pair
        </h2>
      </div>
      <div className="flex flex-col items-center gap-1">
        <h1 className="text-red-600 font-kanit text-[30px]">GBPJPY</h1>
        <h2 className="text-neutral-500 text-[14px] font-roboto">
          Losing pair
        </h2>
      </div>
      <div className="flex flex-col items-center gap-1">
        <h1 className="text-white font-kanit text-[30px]">65%</h1>
        <h2 className="text-neutral-500 text-[14px] font-roboto">
          Risk Management
        </h2>
      </div>
      <div className="flex flex-col items-center gap-1">
        <h1 className="text-white font-kanit text-[30px] flex flex-col items-center relative">
          {type ? (
            <BsFire
              size={25}
              className="text-red-500 cursor-pointer"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            />
          ) : (
            <FaHandHoldingWater
              size={25}
              className="text-blue-500 cursor-pointer"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            />
          )}
          {isHovered && (
            <CustomTitle
              title={type ? "Aggressive" : "Conservative"}
              className="mt-[15px]"
            />
          )}
        </h1>
        <h2 className="text-neutral-500 text-[14px] font-roboto">Type</h2>
      </div>
    </FlexBox>
  );
};

export default DHSII;
