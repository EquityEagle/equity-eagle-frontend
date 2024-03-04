import React from "react";
import {
  useCreateModal,
  useSetupModal,
  useTrackModal,
  // useTradeModal,
} from "../hooks";
import { BackDrop } from "../lib";
import { IoClose } from "react-icons/io5";
// import { SiLivejournal } from "react-icons/si";
import { FaBrain } from "react-icons/fa";
import { FaChartBar } from "react-icons/fa";
import { useSelector } from "react-redux";

const CreateModal = () => {
  const createmodal = useCreateModal();
  const setupmodal = useSetupModal();
  const open = createmodal.isOpen;
  const trackmodal = useTrackModal();
  const systemconfig = useSelector((state) => state.SYSTEM);
  const islight = systemconfig.mode === "light";
  // const isdark = systemconfig.mode === "dark";

  function closeModel() {
    createmodal.onClose();
  }
  function openSet() {
    createmodal.onClose();
    setupmodal.onOpen();
  }
  function openTrackModal() {
    createmodal.onClose();
    trackmodal.onOpen();
  }

  function close() {
    createmodal.onClose();
  }

  const body = (
    <div
      className={`flex flex-col ${
        islight ? "bg-white" : "bg-black"
      } w-[400px] delayIn shadow ${
        islight ? "shadow-black" : "shadow-slate-600"
      } max-[700px]:bottom-0 max-[700px]:fixed max-[700px]:w-full max-[700px]:rounded-b-[0] max-[700px]:rounded-t-[12px] rounded-[10px] h-[auto] z-[150]`}
    >
      <div className="flex p-[1rem] justify-between items-center">
        <h1
          className={`font-kanit text-[25px] ${
            islight ? "text-black" : "text-white"
          }`}
        >
          Create
        </h1>
        <IoClose
          size={35}
          color={islight ? "#000" : "#fff"}
          onClick={closeModel}
          className={`cursor-pointer ${
            islight ? "hover:bg-slate-600 text-white" : "hover:bg-slate-800"
          } p-1 rounded-full`}
        />
      </div>
      <div className="bg-neutral-500 h-[1px] w-full" />
      <div className="flex flex-col mt-1 p-[6px] gap-2">
        <div
          onClick={openTrackModal}
          className={`flex gap-3 ${islight ? "text-black" : "text-white"} ${
            islight
              ? "hover:bg-neutral-500 hover:text-white"
              : "hover:bg-neutral-800"
          } rounded-[9px] cursor-pointer p-[13px] items-center`}
        >
          <FaChartBar size={25} />
          <p className="font-kanit">Track your growth</p>
        </div>

        <div
          onClick={openSet}
          className={`flex gap-3 ${islight ? "text-black" : "text-white"} ${
            islight
              ? "hover:bg-neutral-500 hover:text-white"
              : "hover:bg-neutral-800"
          } rounded-[9px] cursor-pointer p-[13px] items-center`}
        >
          <FaBrain size={25} />
          <p className="font-kanit">Share Trade Idea</p>
        </div>
      </div>
    </div>
  );
  return <div>{open && <BackDrop onClick={close} chaild={body} />}</div>;
};

export default CreateModal;
