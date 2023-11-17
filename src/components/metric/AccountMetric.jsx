import React, { useState } from "react";
import { Flex, FlexBox } from "../../styles/components/styled";
import { FlexBetween } from "../../styles/Global";
import { Switch } from "@mui/joy";
import { GoGraph } from "react-icons/go";
import { Link, useNavigate } from "react-router-dom";

const AccountMetric = ({ userdata, setOpenTrade }) => {
  const type = "ConsummateTraders";
  const balance = 5000;
  const equity = 5905;
  const [hidden, setHidden] = useState(false);

  return (
    <div className="flex-col gap-[1rem] flex relative bg-black p-[1rem] rounded-[7px] w-full h-auto shadow">
      <FlexBox>
        <p className="text-white font-poppins text-left">Account: {type}</p>
        {hidden ? (
          <Flex className="gap-2">
            <p className="text-blue-500 font-poppins">Visible</p>
            <Switch
              variant="outlined"
              size="lg"
              checked={!hidden}
              onChange={() => setHidden(!hidden)}
            />
          </Flex>
        ) : (
          ""
        )}
      </FlexBox>
      {hidden ? (
        ""
      ) : (
        <Flex className="gap-[16px]">
          <div className="flex gap-1 items-center">
            <p className="text-neutral-400 font-kanit">Account Size:</p>
            <p className="text-white font-kanit">${balance.toLocaleString()}</p>
          </div>
          <div className="flex gap-1 items-center">
            <p className="text-neutral-400 font-kanit">Equity:</p>
            <p className="text-white font-kanit">${equity.toLocaleString()}</p>
          </div>
        </Flex>
      )}
      <FlexBetween>
        {hidden ? (
          ""
        ) : (
          <Link to={`/dashboard/metrix/17326535`}>
            <Flex className="cursor-pointer gap-2">
              <GoGraph
                //   color="#fff"
                size={35}
                className="p-1 border border-blue-600 text-blue-600 rounded-[4px]"
              />
              <p className="hover:text-blue-600 text-white underline font-poppins">
                Metrix
              </p>
            </Flex>
          </Link>
        )}
        {hidden ? (
          ""
        ) : (
          <Flex className="gap-2">
            <p className="text-blue-500 font-poppins">Visible</p>
            <Switch
              variant="outlined"
              size="lg"
              checked={!hidden}
              onChange={() => setHidden(!hidden)}
            />
          </Flex>
        )}
      </FlexBetween>
    </div>
  );
};

export default AccountMetric;
