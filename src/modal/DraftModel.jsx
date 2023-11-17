import React from "react";
import { BackDrop, BottomDivider } from "../lib";
import { IoClose } from "react-icons/io5";
import { draftdata } from "../constants";

const DraftModel = ({ open, setOpen }) => {
  const body = (
    <div className="flex flex-col relative m-0 bg-black w-[400px] overflow-y-auto max-[700px]:w-[90%] max-[700px]:h-[70%] hide-scroll rounded-[10px] h-[500px] z-[150] shadow shadow-slate-600">
      <div className="flex justify-between border-b border-b-neutral-700 fixed z-[100] w-[400px] max-[700px]:w-[90%] p-[12px] bg-black">
        <h1 className="text-white font-kanit">Discover the World</h1>
        <IoClose
          size={35}
          color="#fff"
          onClick={() => setOpen(false)}
          className="cursor-pointer hover:bg-slate-800 p-1 rounded-full"
        />
      </div>

      <div className="flex flex-col mt-[3.5rem] p-[12px] gap-2 text-[16px] text-justify relative w-full justify-center">
        <p className="text-white font-poppins text-justify text-[14px] p-0 m-0">
          <p className="text-blue-600">Welcome to a vibrant community:</p>
          {draftdata.wel}
        </p>
        <BottomDivider />
        <p className="text-white font-poppins text-justify text-[14px] p-0 m-0">
          <p className="text-blue-600">Connect with Like-Minded Traders::</p>
          {draftdata.connect}
        </p>
        <BottomDivider />
        <p className="text-white font-poppins text-justify text-[14px] p-0 m-0">
          <p className="text-blue-600">Share Your Journey:</p> {draftdata.share}
        </p>
        <BottomDivider />
        <p className="text-blue-600 font-kanit text-justify text-[15px] p-0 m-0">
          The journey is yours to unfold.
        </p>
      </div>
    </div>
  );

  return <div>{open && <BackDrop chaild={body} />}</div>;
};

export default DraftModel;
