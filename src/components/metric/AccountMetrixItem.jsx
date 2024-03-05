import React from "react";
import { getEquity } from "../../lib/functions/metrix";
import { Flex, FlexBox } from "../../styles/components/styled";
import { FlexBetween } from "../../styles/Global";
import { Switch } from "@mui/joy";
import { GoGraph } from "react-icons/go";
import { Link } from "react-router-dom";
import { saveId, uncheck } from "../../redux/accountmetrix";
import { useDispatch, useSelector } from "react-redux";

const AccountMetrixItem = ({ item }) => {
  const data = useSelector((state) => state.Acc);
  const checked = data.UNVISIBLE.find((id) => id === item._id);
  const trades = item.trades;
  const equity = getEquity(trades, item.accountsize);
  const dispatch = useDispatch();

  function hide(item) {
    dispatch(uncheck(item));
  }

  return (
    <div className="flex-col gap-[1rem] flex relative bg-black p-[1rem] rounded-[7px] w-full h-auto shadow">
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
            <p className="text-white font-kanit">${equity?.toLocaleString()}</p>
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
};

export default AccountMetrixItem;
