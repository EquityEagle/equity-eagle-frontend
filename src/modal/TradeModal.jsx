import React, { useState } from "react";
import { useCreateModal, useTradeModal } from "../hooks";
import {
  BackDrop,
  BottomDivider,
  Button,
  CheckBoxSelection,
  SelectWithDropDown,
  SetupOutcome,
} from "../lib";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { FlexBetween } from "../styles/Global";
import { type } from "../constants";
import { SelectOptionII } from "../lib/components/SelectOption";
// import { Input } from "@mui/joy";
import { useSelector } from "react-redux";

const TradeModal = () => {
  const trademodal = useTradeModal();
  const createmodal = useCreateModal();
  const open = trademodal.isOpen;
  function backModal() {
    trademodal.onClose();
    createmodal.onOpen();
  }

  const user = useSelector((state) => state.AUTH);

  const [data, setData] = useState({
    userId: user.id,
    symbol: "",
    type: "",
    lotSize: 0,
    profit: 0,
    loss: 0,
    confluence: "",
    why: "",
    setup: "",
  });

  console.log("data:", data);

  const body = (
    <div className="flex flex-col transition-all duration-1000 h-[auto] w-[500px] max-[700px]:w-[90%] bg-black shadow shadow-slate-600">
      <div className="flex p-[12px] gap-[1rem] items-center">
        <MdKeyboardArrowLeft
          size={35}
          color="#fff"
          onClick={backModal}
          className="cursor-pointer hover:bg-slate-800 p-1 rounded-full"
        />
        <h1 className="font-kanit text-[22px] text-white">Trade Details</h1>
      </div>
      <BottomDivider />
      <div className="flex flex-col p-[12px] gap-[3rem] /items-center hide-scroll overflow-y-auto">
        <FlexBetween className="gap-[1rem]">
          <SelectWithDropDown data={data} setData={setData} text="Pair" />
          <SelectOptionII
            placeholder="Trade Type"
            data={type}
            setTypeClick={setData}
            stateData={data}
          />
        </FlexBetween>
        <FlexBetween className="gap-[17px]">
          <input
            type="text"
            value={data.setup}
            onChange={(e) => setData({ ...data, setup: e.target.value })}
            placeholder="Describe pattern, time frame etc."
            className="bg-transparent font-roboto text-white outline-none w-full border-b border-b-white"
          />
          <input
            type="text"
            placeholder="Lots"
            value={data.lotSize}
            onChange={(e) => setData({ ...data, lotSize: e.target.value })}
            className="bg-transparent font-roboto text-white outline-none w-full border-b border-b-white"
          />
        </FlexBetween>
        <FlexBetween className="gap-[17px]">
          <CheckBoxSelection data={data} setData={setData} />
          <input
            type="text"
            value={data.why}
            onChange={(e) => setData({ ...data, why: e.target.value })}
            placeholder="Reason for the trade"
            className="bg-transparent font-roboto text-white outline-none w-[300px] border-b border-b-white"
          />
        </FlexBetween>
        <SetupOutcome setData={setData} data={data} />
        <Button text="Submit" secondary />
      </div>
    </div>
  );
  return <div>{open && <BackDrop chaild={body} />}</div>;
};

export default TradeModal;
