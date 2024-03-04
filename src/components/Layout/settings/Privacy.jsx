import React from "react";
import { BiMessageSquareDetail } from "react-icons/bi";
import { FaBrain } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { MdBlock } from "react-icons/md";
import { useSelector } from "react-redux";

const Privacy = () => {
  const systemconfig = useSelector((state) => state.SYSTEM);
  const islight = systemconfig.mode === "light";
  // const isdark = systemconfig.mode === "dark";

  return (
    <div
      className={`w-full h-full ${
        islight ? "bg-neutral-500" : "bg-neutral-800"
      } rounded-tr-[7px] rounded-br-[7px] p-3`}
    >
      <h1 className="text-white font-kanit text-xl">Privacy</h1>
      <p className="text-neutral-400 font-roboto mt-1 text-[15px]">
        Manage what information you see and share equityeagle
      </p>
      <div className="flex flex-col gap-4 mt-2 w-full p-2">
        <div
          // onClick={() => setInfo(true)}
          className="flex flex-col cursor-pointer"
        >
          <div className="flex items-center gap-1">
            <FaBrain size={20} color="#fff" />
            <p className="text-white text-[16px] font-poppins">Idea</p>
          </div>
          <p className="text-neutral-400 font-roboto mt-1 text-[14px]">
            Manage who can see your ideas, and ideas you see
          </p>
        </div>
        <div
          // onClick={() => setPass(true)}
          className="flex flex-col cursor-pointer"
        >
          <div className="flex items-center gap-1">
            <FaPeopleGroup size={20} color="#fff" />
            <p className="text-white text-[16px] font-poppins">Community</p>
          </div>
          <p className="text-neutral-400 font-roboto mt-1 text-[14px]">
            Manage the people you search and who can find you
          </p>
        </div>
        <div className="flex flex-col cursor-pointer">
          <div className="flex items-center gap-1">
            <BiMessageSquareDetail size={20} color="#fff" />
            <p className="text-white text-[16px] font-poppins">
              Direct messages
            </p>
          </div>
          <p className="text-neutral-400 font-roboto mt-1 text-[14px]">
            Manage who can message you directly
          </p>
        </div>
        <div className="flex flex-col cursor-pointer">
          <div className="flex items-center gap-1">
            <MdBlock size={20} color="red" />
            <p className="text-red-600 text-[16px] font-poppins">
              Block account
            </p>
          </div>
          <p className="text-neutral-400 font-roboto mt-1 text-[14px]">
            Manage the accounts that you've blocked
          </p>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
