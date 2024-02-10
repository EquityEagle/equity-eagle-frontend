import React, { useState } from "react";
import { BackDrop } from "../lib";
import { usePairOptionsModal } from "../hooks";
import { IoSearch } from "react-icons/io5";
import { traded } from "../constants/pairs";

const PiarOptionsModal = ({ data, setData, setSelectedPair }) => {
  const pairmodal = usePairOptionsModal();

  function close() {
    pairmodal.onClose();
  }

  const [pairQuery, setPairQuery] = useState("");

  const body = (
    <div
      onClick={(e) => e.preventDefault()}
      className="bg-black w-[400px] h-[480px] rounded-[9px] flex flex-col gap-3 relative overflow-y-auto hide-scroll shadow shadow-slate-600"
    >
      <div className="flex p-3 w-[400px] fixed -translate-y-1 h-auto z-50 bg-black border-b border-b-neutral-700">
        <div className="bg-slate-800 rounded-[8px] items-center flex p-3 gap-2 w-full relative justify-between">
          <IoSearch color="white" size={25} />
          <input
            type="text"
            value={pairQuery}
            onClick={(e) => e.preventDefault()}
            onChange={(e) => setPairQuery(e.target.value)}
            placeholder="Search"
            className="text-white font-kanit w-full bg-transparent outline-none border-none"
          />
        </div>
      </div>
      <div className="flex flex-col gap-2 mt-4">
        {traded
          .filter((p) => {
            const searchTerm = pairQuery.toLowerCase();
            const searched = p.pair.toLowerCase();

            return (
              //   searchTerm &&
              searched.includes(searchTerm) && searched !== searchTerm
            );
          })
          .map((pair, index) => (
            <p
              key={index}
              onClick={() => {
                setData({ ...data, pair: pair.pair });
                setSelectedPair(pair.pair);
              }}
              className="text-white font-kanit p-3 cursor-pointer hover:bg-slate-700"
            >
              {pair.pair}
            </p>
          ))}
      </div>
    </div>
  );
  return <BackDrop onClick={close} chaild={body} />;
};

export default PiarOptionsModal;
