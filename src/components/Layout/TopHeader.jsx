import React from "react";
import BackArrow from "../Back";

const TopHeader = ({ label }) => {
  return (
    <div className="fixed flex gap-[1rem] items-center z-[100] p-[1rem] bg-[rgb(0,0,0,0.5)] w-[735px] max-[800px]:w-full top-0">
      <BackArrow />
      <p className="text-white font-kanit text-[20px]">{label}</p>
    </div>
  );
};

export default TopHeader;
