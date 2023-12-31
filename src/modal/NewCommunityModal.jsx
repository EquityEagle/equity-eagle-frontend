import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { BackDrop, BottomDivider, Button } from "../lib";
import { FlexBetween } from "../styles/Global";
import { IoClose } from "react-icons/io5";
import { FaCamera } from "react-icons/fa";

const NewCommunityModal = () => {
  const path = useLocation();
  const open = path.pathname === "/new-community";
  const navigate = useNavigate();
  const body = (
    <div
      onClick={(e) => e.stopPropagation()}
      className="flex flex-col bg-black w-[400px] delayIn shadow shadow-slate-600 max-[700px]:bottom-0 max-[700px]:fixed max-[700px]:w-full max-[700px]:rounded-b-[0] max-[700px]:rounded-t-[12px] rounded-[10px] h-[auto] z-[150]"
    >
      <FlexBetween className="p-[12px]">
        <h1 className="text-white font-kanit text-[25px]">New community</h1>
        <IoClose
          size={25}
          color="#fff"
          className="cursor-pointer"
          onClick={() => navigate("/dashboard")}
        />
      </FlexBetween>
      <BottomDivider />
      <div className="flex flex-col w-full p-[10px] gap-5">
        <div className="flex flex-col w-full rounded-[9px] items-center justify-center h-[100px] bg-blue-400 hover:bg-blue-500 cursor-pointer">
          <FaCamera size={70} color="#fff" />
        </div>
        <div className="flex-col flex gap-[6px] items-start">
          <h2 className="text-white font-kanit">Name</h2>
          <input
            type="text"
            className="bg-slate-800 w-full outline-none caret-blue-600 text-white focus:border-blue-600 focus:border rounded-[8px] p-2"
          />
        </div>
        <div className="flex-col flex gap-[6px] items-start">
          <h2 className="text-white font-kanit">Description</h2>
          <input
            type="text"
            className="bg-slate-800 w-full outline-none caret-blue-600 text-white focus:border-blue-600 focus:border rounded-[8px] p-2"
          />
        </div>
        <Button secondary text="Submit" />
      </div>
    </div>
  );
  return (
    <div>{open && <BackDrop onClick={() => navigate(-1)} chaild={body} />}</div>
  );
};

export default NewCommunityModal;
