import React from "react";
import { IoLogOutOutline, IoSettingsOutline } from "react-icons/io5";
import { MdReportGmailerrorred } from "react-icons/md";

const AdminMenuModal = ({ openSettins }) => {
  return (
    <div className="flex flex-col bg-black rounded-[5px] w-[210px] h-auto z-[100] shadow select-none shadow-slate-700 absolute top-7 right-2">
      <div
        className="flex gap-2 items-center cursor-pointer p-2 hover:bg-neutral-700 rounded-t-[5px]"
        onClick={(e) => {
          e.stopPropagation();
          openSettins(true);
        }}
      >
        <IoSettingsOutline color="#fff" size={25} />
        <p className="font-poppins text-[14px] text-white">Setting</p>
      </div>
      <div className="flex gap-2 items-center cursor-pointer p-2 hover:bg-neutral-700">
        <MdReportGmailerrorred color="#fff" size={25} />
        <p className="font-poppins text-[14px] text-white">Report</p>
      </div>
      <div className="flex gap-2 items-center text-red-600 cursor-pointer p-2 hover:bg-neutral-700 rounded-b-[5px]">
        <IoLogOutOutline size={25} />
        <p className="font-poppins text-[14px]">Leave community</p>
      </div>
    </div>
  );
};

export default AdminMenuModal;
