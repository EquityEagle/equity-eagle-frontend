import React from "react";
import { usePairFilterModal } from "../hooks";
import { BackDrop } from "../lib";
import { IoClose } from "react-icons/io5";
import { traded } from "../constants/pairs";
import { PairPreference } from "../components";

const PairFilter = () => {
  const pairmodal = usePairFilterModal();
  const open = pairmodal.isOpen;

  function close() {
    pairmodal.onClose();
  }

  const body = (
    <div
      onClick={(e) => e.stopPropagation()}
      className={`bg-black w-[300px] h-[400px] flex flex-col gap-3 max-[700px]:w-[90%] rounded-[8px] shadow shadow-slate-700`}
    >
      <div className="flex items-center z-[100] justify-between w-[300px] max-[700px]:w-[90%] p-3 bg-black border-b border-b-neutral-800 fixed">
        <h1 className="text-white font-kanit text-[20px]">Select preference</h1>
        <IoClose
          size={30}
          className="cursor-pointer p-1 rounded-full bg-neutral-600 hover:bg-neutral-700"
          color="white"
          onClick={close}
        />
      </div>
      <div className="flex flex-wrap w-full relative mt-3 overflow-y-auto">
        {traded.map((pair, index) => (
          <PairPreference pair={pair} key={index} />
        ))}
      </div>
    </div>
  );

  return <div>{open && <BackDrop onClick={close} chaild={body} />}</div>;
};

export default PairFilter;
