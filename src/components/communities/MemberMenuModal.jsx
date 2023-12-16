import React from "react";
import { CiCircleInfo } from "react-icons/ci";
import { IoLogOutOutline } from "react-icons/io5";
import { MdReportGmailerrorred } from "react-icons/md";
import { PiBroom } from "react-icons/pi";

const MemberMenuModal = ({ setViewProfie }) => {
  return (
    <div className="flex flex-col bg-black rounded-[5px] w-[210px] z-[100] h-auto shadow select-none shadow-slate-700 absolute top-7 -right-2">
      <div
        onClick={(e) => {
          e.stopPropagation();
          setViewProfie(true);
        }}
        className="flex gap-2 items-center cursor-pointer p-2 hover:bg-neutral-800 rounded-t-[5px]"
      >
        <CiCircleInfo size={25} color="#fff" />
        <p className="font-poppins text-white text-[14px]">
          View community info
        </p>
      </div>
      <div className="flex gap-2 items-center cursor-pointer p-2 hover:bg-neutral-800">
        <MdReportGmailerrorred color="#fff" size={25} />
        <p className="font-poppins text-[14px] text-white">Report</p>
      </div>
      <div className="flex gap-2 items-center cursor-pointer p-2 hover:bg-neutral-800">
        <PiBroom color="#fff" size={25} />
        <p className="font-poppins text-[14px] text-white">Clear histroy</p>
      </div>
      <div className="flex gap-2 items-center text-red-600 cursor-pointer p-2 hover:bg-neutral-800 rounded-b-[5px]">
        <IoLogOutOutline size={25} />
        <p className="font-poppins text-[14px]">Leave community</p>
      </div>
    </div>
  );
};

export default MemberMenuModal;
