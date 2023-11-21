import React, { useEffect, useState } from "react";
import { Flex, FlexBox } from "../../styles/components/styled";
import AccountStatic from "./AccountStatic";
import AccountObject from "./AccountObject";
import TradeJournal from "./TradeJournal";
import { useDispatch, useSelector } from "react-redux";
import { getAccounts } from "../../helper/fetch";
import MetrixDetails from "./MetrixDetails";
import { Error, ScaleInLoader } from "../../lib";
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

  useEffect(() => {
    document.title = "Account Metrix | EquityEagle";
  });

  function tryagain() {
    dispatch(findAccountMetrix(Ids));
  }

  const nodata = !metrix._id || !metrix;

  return (
    <div className="flex flex-col relative gap-[2rem] w-full h-full">
      {nodata ? (
        <Error
          onClick={tryagain}
          network
          btnText="Try again"
          text="Connection error, seems account was not found"
        />
      ) : (
        <>
          {isLoading ? "" : <MetrixDetails metrix={metrix && metrix} />}
          {isLoading && <ScaleInLoader />}
          {isLoading ? (
            ""
          ) : (
            <FlexBox className="max-[800px]:flex-col max-[700px]:flex-col gap-[2rem]">
              <AccountStatic metrix={metrix} />
              <AccountObject metrix={metrix} />
            </FlexBox>
          )}
          {isLoading ? "" : <TradeJournal metrix={metrix} />}
        </>
      )}
    </div>
  );
};

export default AccountMetricId;
