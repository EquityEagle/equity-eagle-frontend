import React, { useEffect, useState } from "react";
import { useCreateModal, useTradeModal } from "../hooks";
import { BackDrop, BottomDivider, Button, SetupOutcome } from "../lib";
import { type } from "../constants";
import { useDispatch, useSelector } from "react-redux";
import { DocumentTrade } from "../redux/trade";
import { SectionOne } from "../components";
import { IoClose } from "react-icons/io5";
import { useParams } from "react-router-dom";

const TradeModal = ({ accountId }) => {
  const trademodal = useTradeModal();
  const open = trademodal.isOpen;
  function backModal() {
    trademodal.onClose();
  }

  const user = useSelector((state) => state.AUTH);
  const Docdata = useSelector((state) => state.TRADE);
  const isLoading = Docdata.DOC_STATUS === "Loading";
  const dispatch = useDispatch();

  const [data, setData] = useState({
    trackId: "",
    symbol: "",
    type: "",
    lotSize: 0,
    profit: 0,
    loss: 0,
    why: "",
  });

  useEffect(() => {
    setData({ ...data, trackId: accountId });
  }, [accountId]);

  function docTrade() {
    dispatch(DocumentTrade(data));
    setTimeout(() => {
      setData(
        {
          symbol: "",
          type: "",
          lotSize: 0,
          profit: 0,
          loss: 0,
          confluence: "",
          why: "",
          setup: "",
        },
        3000
      );
    });
  }

  const body = (
    <div className="flex flex-col bg-black w-[400px] shadow shadow-slate-600 max-[700px]:bottom-0 max-[700px]:fixed max-[700px]:w-full max-[700px]:rounded-b-[0] max-[700px]:rounded-t-[12px] rounded-[10px] h-[auto] z-[150]">
      <div className="flex p-[12px] gap-[1rem] items-center">
        <IoClose
          size={35}
          color="#fff"
          onClick={backModal}
          className="cursor-pointer hover:bg-slate-800 p-1 rounded-full"
        />
        <h1 className="font-kanit text-[22px] text-white">Trade Details</h1>
      </div>
      <BottomDivider />
      <div className="flex flex-col p-[12px] gap-[1rem] w-full /items-center hide-scroll overflow-y-auto">
        <SectionOne type={type} data={data} setData={setData} />
        <SetupOutcome setData={setData} data={data} />
        <Button
          text="Submit"
          secondary
          isLoading={isLoading}
          Onclick={docTrade}
        />
      </div>
    </div>
  );
  return <div>{open && <BackDrop chaild={body} />}</div>;
};

export default TradeModal;
