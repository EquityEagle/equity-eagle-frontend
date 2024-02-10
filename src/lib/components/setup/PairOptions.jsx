import React, { useState } from "react";
import { IoMdAddCircleOutline } from "react-icons/io";
import { usePairOptionsModal } from "../../../hooks";
import { PiarOptionsModal } from "../../../modal";

const PairOptions = ({ data, setData }) => {
  const pairmodal = usePairOptionsModal();
  const [selectedPiar, setSelectedPair] = useState("");
  const open = pairmodal.isOpen;
  return (
    <div className="relative w-full">
      <div
        onClick={pairmodal.onOpen}
        className="flex items-center gap-3 cursor-pointer p-2 rounded-[7px] bg-slate-600 hover:bg-slate-800"
      >
        <IoMdAddCircleOutline size={25} color="#fff" />
        <p className="text-white font-kanit">
          {selectedPiar ? selectedPiar : "Select pair"}
        </p>
      </div>
      {open && (
        <PiarOptionsModal
          data={data}
          setData={setData}
          setSelectedPair={setSelectedPair}
        />
      )}
    </div>
  );
};

export default PairOptions;
