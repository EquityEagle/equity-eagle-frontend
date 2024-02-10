import React from "react";
import { BackDrop } from "../lib";
import { useTypeModal } from "../hooks";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

const TypeModal = ({ setSelectedType, data, setData }) => {
  const typemodal = useTypeModal();

  function close() {
    typemodal.onClose();
  }

  const body = (
    <div
      onClick={(e) => e.preventDefault()}
      className="bg-black w-[400px] h-auto max-[700px]:bottom-0 max-[700px]:w-full max-[700px]:fixed rounded-[9px] flex flex-col gap-3 relative shadow shadow-slate-600"
    >
      <div
        onClick={() => {
          setData({ ...data, type: "Buy" });
          setSelectedType("Buy");
        }}
        className="flex items-center justify-between p-3 cursor-pointer hover:bg-slate-700 rounded-t-[9px]"
      >
        <p className="text-blue-500 font-kanit">Buy</p>
        <FaArrowUp size={25} color="blue" />
      </div>
      <div
        onClick={() => {
          setData({ ...data, type: "Sell" });
          setSelectedType("Sell");
        }}
        className="flex items-center justify-between p-3 cursor-pointer hover:bg-slate-700 rounded-b-[9px]"
      >
        <p className="text-red-500 font-kanit">Sell</p>
        <FaArrowDown size={25} color="red" />
      </div>
    </div>
  );

  return <BackDrop onClick={close} chaild={body} />;
};

export default TypeModal;
