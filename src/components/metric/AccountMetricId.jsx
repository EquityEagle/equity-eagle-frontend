import React, { useEffect, useState } from "react";
import { Flex, FlexBox } from "../../styles/components/styled";
import AccountStatic from "./AccountStatic";
import AccountObject from "./AccountObject";
import TradeJournal from "./TradeJournal";
import { useDispatch, useSelector } from "react-redux";
import { getAccounts } from "../../helper/fetch";
import MetrixDetails from "./MetrixDetails";
import { ScaleInLoader } from "../../lib";
import { findAccountMetrix } from "../../redux/accountmetrix";

const AccountMetricId = ({ userdata, setOpenTrade }) => {
  const Ids = useSelector((state) => state.Acc.Ids);
  const metrix = useSelector((state) => state.Acc.METRIX);
  const metrixState = useSelector((state) => state.Acc);
  const isLoading = metrixState.METRIX_STATUS === "Pending";
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(findAccountMetrix(Ids));
  }, []);

  console.log("metrixdata:", metrix);

  return (
    <div className="flex flex-col relative gap-[2rem]">
      {isLoading && <ScaleInLoader />}
      {isLoading ? "" : <MetrixDetails metrix={metrix} />}
      {isLoading ? (
        ""
      ) : (
        <FlexBox className="max-[800px]:flex-col max-[700px]:flex-col gap-[2rem]">
          <AccountStatic />
          <AccountObject />
        </FlexBox>
      )}
      {isLoading ? "" : <TradeJournal metrix={metrix} />}
    </div>
  );
};

export default AccountMetricId;
