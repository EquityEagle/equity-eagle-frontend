import React from "react";
import { BackDrop, BottomDivider } from "../lib";

const TradeDetails = ({ setOpen, open, trade }) => {
  const body = (
    <div
      onClick={(e) => e.stopPropagation()}
      className="flex flex-col bg-black relative w-[400px] shadow shadow-slate-600 max-[700px]:bottom-0 max-[700px]:fixed max-[700px]:w-full max-[700px]:rounded-b-[0] max-[700px]:rounded-t-[12px] rounded-[10px] h-[auto] z-[150]"
    >
      <h1 className="text-white font-kanit p-3 text-[25px]">Trade Details</h1>
      <BottomDivider />
      <div className="flex flex-col p-3 gap-2">
        {trade.setupImg && (
          <img
            src={trade.setupImg?.url}
            alt="Setup"
            className="w-full rounded-[9px]"
          />
        )}
        <h1 className="text-white font-kanit">{trade.symbol}</h1>
      </div>
    </div>
  );
  return (
    <div>
      {open && <BackDrop chaild={body} onClick={() => setOpen(false)} />}
    </div>
  );
};

export default TradeDetails;
