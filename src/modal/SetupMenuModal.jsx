import React from "react";
import { AiOutlineUserAdd } from "react-icons/ai";
import { GoReport } from "react-icons/go";

const SetupMenuModal = ({ item }) => {
  return (
    <div className="flex flex-col absolute gap-2 bg-black w-[200px] h-auto shadow z-[150] shadow-slate-500 top-[20px] right-[1rem] p-[5px] rounded-[6px]">
      <p className="text-white font-roboto flex w-full hover:bg-neutral-700 p-1 gap-2 cursor-pointer rounded-[4px]">
        <AiOutlineUserAdd size={25} className="cursor-pointer" color="#fff" />
        <p>Fellow {item?.username}</p>
      </p>
      <p className="text-white font-roboto flex w-full hover:bg-neutral-700 p-1 gap-2 cursor-pointer rounded-[4px]">
        <GoReport size={25} className="cursor-pointer" color="#fff" />
        <p>Report</p>
      </p>
    </div>
  );
};

export default SetupMenuModal;
