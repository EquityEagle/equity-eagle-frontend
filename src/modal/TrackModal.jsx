import React, { useState } from "react";
import { useCreateModal, useTrackModal } from "../hooks";
import { BackDrop, BottomDivider, Button, CustomTitle } from "../lib";
import { IoClose } from "react-icons/io5";
import { FaCircleInfo } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { SaveTrack } from "../redux/accountmetrix";

const TrackModal = () => {
  const usetrackmodal = useTrackModal();
  const createmodal = useCreateModal();
  const open = usetrackmodal.isOpen;
  const [HoverType, setHoverType] = useState(false);
  const user = useSelector((state) => state.AUTH);
  const accState = useSelector((state) => state.Acc);
  const isLoading = accState.TRACK_STATUS === "Pending";
  const dispatch = useDispatch();
  const [data, setData] = useState({
    userId: user.id,
    accountsize: "",
    accounttype: "",
  });
  const systemconfig = useSelector((state) => state.SYSTEM);
  const islight = systemconfig.mode === "light";
  const isdark = systemconfig.mode === "dark";

  function Closetrack() {
    usetrackmodal.onClose();
    createmodal.onOpen();
  }

  function close() {
    usetrackmodal.onClose();
  }

  function trackacc(e) {
    e.stopPropagation();
    dispatch(SaveTrack(data));
    setTimeout(() => {
      setData({
        accountsize: "",
        accounttype: "",
      });
    }, 5000);
  }

  const body = (
    <div
      className={`flex flex-col ${
        islight ? "bg-white" : "bg-black"
      } w-[400px] shadow ${
        islight ? "shadow-black" : "shadow-slate-600"
      } delayIn max-[700px]:bottom-0 max-[700px]:fixed max-[700px]:w-full max-[700px]:rounded-b-[0] max-[700px]:rounded-t-[12px] rounded-[10px] h-[auto] z-[150]`}
    >
      <div className="flex p-[1rem] justify-between items-center">
        <h1
          className={`font-kanit text-[25px] ${
            islight ? "text-black" : "text-white"
          }`}
        >
          Track growth
        </h1>
        <IoClose
          size={35}
          color={islight ? "#000" : "#fff"}
          onClick={Closetrack}
          className={`cursor-pointer ${
            islight ? "hover:bg-slate-600 text-white" : "hover:bg-slate-800"
          } p-1 rounded-full`}
        />
      </div>
      <BottomDivider />
      <div className="p-[12px] gap-[16px] relative flex flex-col">
        <div className="flex-col flex gap-[6px] items-start">
          <div className="flex gap-2 relative items-center w-full">
            <h2
              className={`${islight ? "text-black" : "text-white"} font-kanit`}
            >
              Account Type
            </h2>
            <FaCircleInfo
              size={15}
              className="cursor-pointer"
              color={islight ? "#000" : "#fff"}
              onMouseEnter={() => setHoverType(true)}
              onMouseLeave={() => setHoverType(false)}
              onClick={(e) => e.stopPropagation()}
            />
            {HoverType && (
              <CustomTitle title="Demo, Propfirm or Live account" />
            )}
          </div>
          <input
            type="text"
            value={data.accounttype}
            onClick={(e) => e.stopPropagation()}
            onChange={(e) => {
              setData({ ...data, accounttype: e.target.value });
            }}
            disabled={isLoading}
            className="bg-slate-800 w-full outline-none caret-blue-600 text-white focus:border-blue-600 focus:border rounded-[8px] p-2"
          />
        </div>
        <div className="flex-col flex gap-[6px] items-start">
          <h2 className={`${islight ? "text-black" : "text-white"} font-kanit`}>
            Account size
          </h2>
          <input
            type="number"
            value={data.accountsize}
            onClick={(e) => e.stopPropagation()}
            onChange={(e) => {
              setData({ ...data, accountsize: e.target.value });
            }}
            disabled={isLoading}
            className="bg-slate-800 w-full outline-none caret-blue-600 text-white focus:border-blue-600 focus:border rounded-[8px] p-2"
          />
        </div>
        <Button
          text="Save"
          secondary={isdark}
          light={islight}
          disabled={isLoading}
          isLoading={isLoading}
          Onclick={trackacc}
        />
      </div>
    </div>
  );

  return <div>{open && <BackDrop onClick={close} chaild={body} />}</div>;
};

export default TrackModal;
