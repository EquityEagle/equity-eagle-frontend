import React, { useEffect, useState } from "react";
import { Flex, FlexBox } from "../../styles/components/styled";
import { FlexBetween } from "../../styles/Global";
import { Switch } from "@mui/joy";
import { GoGraph } from "react-icons/go";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { saveId, uncheck } from "../../redux/accountmetrix";
import { useTradeModal } from "../../hooks";

const AccountMetric = ({ userdata, setOpenTrade }) => {
  const data = useSelector((state) => state.Acc);
  const trademodal = useTradeModal();

  const dispatch = useDispatch();

  function hide(item) {
    dispatch(uncheck(item));
  }

  return (
    <div className="flex-col gap-[1.5rem] flex relative w-full">
      {data.ACCOUNTS?.map((item, index) => {
        const checked = data.UNVISIBLE.find((id) => id === item._id);
        const profits = item.trades.map((trade) => trade.profit);
        const Loss = item.trades.map((trade) => trade.loss);
        const totalProfit =
          profits.length === 0
            ? 0
            : profits.reduce((max, value) => Math.max(max, value), 0);
        const totalLoss =
          Loss.length === 0
            ? 0
            : Loss.reduce((max, value) => Math.max(max, value), 0);
        const equity = item.accountsize + totalProfit - totalLoss;

        return (
          <div
            className="flex-col gap-[1rem] flex relative bg-black p-[1rem] rounded-[7px] w-full h-auto shadow"
            key={index}
          >
            <FlexBox>
              <p className="text-white font-poppins text-left">
                Account: {item.accounttype}
              </p>
              {checked ? (
                <Flex className="gap-2">
                  <p className="text-blue-500 font-poppins">Visible</p>
                  <Switch
                    variant="outlined"
                    size="lg"
                    checked={!checked}
                    onChange={() => hide(item)}
                  />
                </Flex>
              ) : (
                ""
              )}
            </FlexBox>
            {checked ? (
              ""
            ) : (
              <Flex className="gap-[16px]">
                <div className="flex gap-1 items-center">
                  <p className="text-neutral-400 font-kanit">Account Size:</p>
                  <p className="text-white font-kanit">
                    ${item.accountsize?.toLocaleString()}
                  </p>
                </div>
                <div className="flex gap-1 items-center">
                  <p className="text-neutral-400 font-kanit">Equity:</p>
                  <p className="text-white font-kanit">
                    ${equity?.toLocaleString()}
                  </p>
                </div>
              </Flex>
            )}
            <FlexBetween>
              {checked ? (
                ""
              ) : (
                <div className="flex gap-3 items-center">
                  <Link
                    to={`/dashboard/metrix/${item.accounthash}`}
                    onClick={() => dispatch(saveId(item.accounthash))}
                  >
                    <Flex className="cursor-pointer gap-2">
                      <GoGraph
                        size={35}
                        className="p-1 border border-blue-600 text-blue-600 rounded-[4px]"
                      />
                      <p className="hover:text-blue-600 text-white underline font-poppins">
                        Metrix
                      </p>
                    </Flex>
                  </Link>
                  {/* <MdAddCircleOutline
                    size={30}
                    color="#fff"
                    className="cursor-pointer"
                    onClick={() => {
                     
                      trademodal.onOpen();
                    }}
                  /> */}
                </div>
              )}
              {checked ? (
                ""
              ) : (
                <Flex className="gap-2">
                  <p className="text-blue-500 font-poppins">Visible</p>
                  <Switch
                    variant="outlined"
                    size="lg"
                    checked={!checked}
                    onChange={() => hide(item)}
                  />
                </Flex>
              )}
            </FlexBetween>
          </div>
        );
      })}
    </div>
  );
};

export default AccountMetric;
