import React from "react";
import { FlexBetween } from "../../styles/Global";

const Header = () => {
  return (
    <FlexBetween className="p-[5px]">
      <p className="text-white font-kanit">Pair</p>
      <p className="text-white font-kanit">Type</p>
      <p className="text-white font-kanit">Profit</p>
      <p className="text-white font-kanit">Lots</p>
      <p className="text-white font-kanit">Edi</p>
    </FlexBetween>
  );
};

export default Header;
