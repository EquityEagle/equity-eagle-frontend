import React, { useState } from "react";
import { BottomDivider } from "../../lib";
import { FlexBox } from "../../styles/components/styled";
import { tradesdata } from "../../constants/test";
import { LuClipboardEdit } from "react-icons/lu";
import { EditTradeModal } from "../../modal";
import { MdAddCircleOutline } from "react-icons/md";
import { useTradeModal } from "../../hooks";

const TradeJournal = ({ metrix }) => {
  const [openEdit, setOpenEdit] = useState(false);
  const [tradeId, setTradeId] = useState("");
  const trademodal = useTradeModal();
  const date = "2023-02-98 01-10";
  return (
    <div className="flex-col bg-black shadow flex relative w-full rounded-[12px] max-[700px]:rounded-none max-[700px]:pb-[5.5rem]">
      <FlexBox className="p-[1rem]">
        <p className="text-white font-kanit">Trading Journal</p>
        <div
          className="flex cursor-pointer bg-slate-800 gap-2 p-[8px] rounded-[5px]"
          onClick={trademodal.onOpen}
        >
          <MdAddCircleOutline size={25} color="#fff" />
          <p className="text-white font-kanit">Add trade</p>
        </div>
      </FlexBox>
      <BottomDivider />
      <FlexBox className="p-[5px] text-white font-poppins relative text-[14px] max-[700px]:text-[11px] pl-[2rem] pr-[2rem] max-[700px]:pl-0 max-[700px]:pr-0">
        <p className="max-[700px]:w-[10%]">Saved</p>
        <p className="max-[700px]:w-[10%]">Type</p>
        <p className="max-[700px]:w-[10%]">Lots</p>
        <p className="max-[700px]:w-[10%]">Pair</p>
        <p className="max-[700px]:w-[10%]">Profit</p>
        <p className="max-[700px]:w-[10%]">Edit</p>
      </FlexBox>
      <BottomDivider />
      <div className="flex flex-col p-[1rem] relative">
        {metrix?.trades.map((item, index) => {
          const timestamp = new Date(item.createdAt); // Replace this with your actual timestamp

          const formattedDate = timestamp.toLocaleString("en-US", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
          });

          return (
            <>
              <FlexBox
                className="p-[5px] text-white font-poppins text-[14px] pl-[1rem] pr-[1rem] max-[700px]:pl-0 max-[700px]:pr-0"
                key={index}
              >
                <p className="w-full max-[700px]:w-[50%] max-[700px]:text-[11px]">
                  {formattedDate}
                </p>
                <p
                  className={`${
                    item.type === "SELL" ? "text-red-600" : "text-green-500"
                  } w-full max-[700px]:w-[50%] max-[700px]:text-[11px]`}
                >
                  {item.type}
                </p>
                <p className="w-full max-[700px]:w-[50%] max-[700px]:text-[11px]">
                  {item.lotSize}
                </p>
                <p className="w-full max-[700px]:w-[50%] max-[700px]:text-[11px]">
                  {item.symbol}
                </p>
                <p
                  className={`${
                    item.loss !== 0
                      ? "text-red-600"
                      : item.profit !== 0
                      ? "text-green-500"
                      : ""
                  } w-full`}
                >
                  {item.loss !== 0 ? "-" : ""}{" "}
                  {item.profit !== 0
                    ? item.profit
                    : item.loss !== 0
                    ? item.loss
                    : 0}
                </p>
                <div className="flex flex-col">
                  <LuClipboardEdit
                    size={25}
                    onClick={() => {
                      setOpenEdit(true);
                      setTradeId(item._id);
                    }}
                    className={`cursor-pointer ${
                      item.edited ? "text-blue-600" : "text-white"
                    }`}
                  />
                </div>
              </FlexBox>
              <BottomDivider />
            </>
          );
        })}
      </div>
      {openEdit && (
        <EditTradeModal
          open={openEdit}
          setOpen={setOpenEdit}
          tradeId={tradeId}
        />
      )}
    </div>
  );
};

export default TradeJournal;
