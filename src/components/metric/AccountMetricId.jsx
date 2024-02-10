import React, { useEffect, useState } from "react";
import { FlexBox } from "../../styles/components/styled";
import AccountStatic from "./AccountStatic";
import AccountObject from "./AccountObject";
import TradeJournal from "./TradeJournal";
import { useDispatch, useSelector } from "react-redux";
import { getAccountTrades } from "../../helper/fetch";
import MetrixDetails from "./MetrixDetails";
import { Error, ScaleInLoader } from "../../lib";
import { findAccountMetrix } from "../../redux/accountmetrix";
import MetrixHeader from "./MetrixHeader";
import { MetrixDeleteModel } from "../../modal";
import PairPerformance from "./PairPerformance";

const AccountMetricId = ({ userdata, setOpenTrade }) => {
  const Ids = useSelector((state) => state.Acc.Ids);
  const metrix = useSelector((state) => state.Acc.METRIX);
  const metrixState = useSelector((state) => state.Acc);
  const isLoading = metrixState.METRIX_STATUS === "Pending";
  const dispatch = useDispatch();

  const [trades, setTrades] = useState([]);
  useEffect(() => {
    const gettrades = async () => {
      const data = await getAccountTrades(metrix._id);
      setTrades(data);
    };
    if (metrix._id) {
      gettrades();
    } else return;
  }, [trades, metrix._id]);

  useEffect(() => {
    dispatch(findAccountMetrix(Ids));
  }, [dispatch, Ids]);

  useEffect(() => {
    document.title = "Account Metrix | EquityEagle";
  });

  function tryagain() {
    dispatch(findAccountMetrix(Ids));
  }

  const nodata = !metrix._id || !metrix;

  return (
    <div className="flex flex-col relative gap-[2rem] w-full h-full overflow-x-auto/">
      {isLoading ? "" : <MetrixHeader />}
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
          {isLoading && <ScaleInLoader className="translate-y-96" />}
          {isLoading ? (
            ""
          ) : (
            <FlexBox className="max-[800px]:flex-col max-[700px]:flex-col gap-[2rem]">
              <AccountStatic metrix={metrix} trades={trades} />
              <div className="flex flex-col gap-[1.5rem] w-full">
                <PairPerformance trades={trades} />
                <AccountObject metrix={metrix} />
              </div>
            </FlexBox>
          )}
          {isLoading ? "" : <TradeJournal metrix={metrix} trades={trades} />}
        </>
      )}
      <MetrixDeleteModel />
    </div>
  );
};

export default AccountMetricId;
