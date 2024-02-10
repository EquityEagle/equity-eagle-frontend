import React, { useState } from "react";
import { IoMdAddCircleOutline } from "react-icons/io";
import { useTypeModal } from "../../../hooks";
import { TypeModal } from "../../../modal";

const TypeOptions = ({ data, setData }) => {
  const typemodal = useTypeModal();
  const open = typemodal.isOpen;
  const [selectedType, setSelectedType] = useState("");
  return (
    <div className="relative w-full">
      <div
        onClick={typemodal.onOpen}
        className="flex items-center gap-3 cursor-pointer p-2 rounded-[7px] bg-slate-600 hover:bg-slate-800"
      >
        <IoMdAddCircleOutline size={25} color="#fff" />
        <p className="text-white font-kanit">
          {selectedType ? selectedType : "Select type"}
        </p>
      </div>
      {open && (
        <TypeModal
          data={data}
          setData={setData}
          setSelectedType={setSelectedType}
        />
      )}
    </div>
  );
};

export default TypeOptions;
