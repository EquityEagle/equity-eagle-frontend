import React, { useState } from "react";
import { useCreateModal, useTrackModal } from "../hooks";
import { BackDrop, BottomDivider, Button, CustomTitle } from "../lib";
import { IoClose } from "react-icons/io5";
import { FaCircleInfo } from "react-icons/fa6";

const TrackModal = () => {
  const usetrackmodal = useTrackModal();
  const createmodal = useCreateModal();
  const open = usetrackmodal.isOpen;
  const [HoverType, setHoverType] = useState(false);

  function Closetrack() {
    usetrackmodal.onClose();
    createmodal.onOpen();
  }

  const body = (
    <div className="flex flex-col bg-black w-[400px] shadow shadow-slate-600 max-[700px]:bottom-0 max-[700px]:fixed max-[700px]:w-full max-[700px]:rounded-b-[0] max-[700px]:rounded-t-[12px] rounded-[10px] h-[auto] z-[150]">
      <div className="flex p-[1rem] justify-between items-center">
        <h1 className="font-kanit text-[25px] text-white">Track growth</h1>
        <IoClose
          size={35}
          color="#fff"
          onClick={Closetrack}
          className="cursor-pointer hover:bg-slate-800 p-1 rounded-full"
        />
      </div>
      <BottomDivider />
      <div className="p-[12px] gap-[16px] relative flex flex-col">
        <div className="flex-col flex gap-[6px] items-start">
          <div className="flex gap-2 relative items-center w-full">
            <h2 className="text-white font-kanit">Account Type</h2>
            <FaCircleInfo
              size={15}
              className="cursor-pointer"
              color="#fff"
              onMouseEnter={() => setHoverType(true)}
              onMouseLeave={() => setHoverType(false)}
            />
            {HoverType && (
              <CustomTitle title="Demo, Propfirm or Live account" />
            )}
          </div>
          <input
            type="text"
            className="bg-slate-800 w-full outline-none caret-blue-600 text-white focus:border-blue-600 focus:border rounded-[8px] p-2"
          />
        </div>
        <div className="flex-col flex gap-[6px] items-start">
          <h2 className="text-white font-kanit">Account size</h2>
          <input
            type="number"
            className="bg-slate-800 w-full outline-none caret-blue-600 text-white focus:border-blue-600 focus:border rounded-[8px] p-2"
          />
        </div>
        <Button text="Save" secondary />
      </div>
    </div>
  );

  return <div>{open && <BackDrop chaild={body} />}</div>;
};

export default TrackModal;
