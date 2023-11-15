import React, { useEffect } from "react";
import { StyledSetupItem } from "../../styles/components/styled";
import TopHeader from "../Layout/TopHeader";
import Trades from "./Trades";
// import { FixedLeftDivider, FixedRightDivider } from "../../lib";
import { FlexBetween } from "../../styles/Global";

const TradesFeed = ({ setOpenTrade }) => {
  useEffect(() => {
    document.title = "Trades Histroy - EquityEagle";
  });
  return (
    <StyledSetupItem className="relative border-r border-l border-l-neutral-700 border-r-neutral-700">
      <FlexBetween>
        {/* <FixedLeftDivider /> */}
        {/* <FixedRightDivider /> */}
      </FlexBetween>
      <TopHeader label="Trade" setOpenTrade={setOpenTrade} isDashboard={true} />
      <Trades />
    </StyledSetupItem>
  );
};

export default TradesFeed;
