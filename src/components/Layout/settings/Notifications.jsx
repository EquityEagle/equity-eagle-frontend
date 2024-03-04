import React from "react";
import { LuSettings2 } from "react-icons/lu";
import { PiBellRingingFill } from "react-icons/pi";
import { useSelector } from "react-redux";

const Notifications = () => {
  const systemconfig = useSelector((state) => state.SYSTEM);
  const islight = systemconfig.mode === "light";
  // const isdark = systemconfig.mode === "dark";

  return (
    <div
      className={`w-full h-full ${
        islight ? "bg-neutral-500" : "bg-neutral-800"
      } rounded-tr-[7px] rounded-br-[7px] p-3`}
    >
      <h1 className="text-white font-kanit text-xl">Notifications</h1>
      <p className="text-neutral-400 font-roboto mt-1 text-[15px]">
        Select the types of notifications you get about your activities
      </p>
      <div className="flex flex-col gap-4 mt-2 w-full p-2">
        <div
          // onClick={() => setInfo(true)}
          className="flex flex-col cursor-pointer"
        >
          <div className="flex items-center gap-1">
            <LuSettings2 size={20} color="#fff" />
            <p className="text-white text-[16px] font-poppins">Filters</p>
          </div>
          <p className="text-neutral-400 font-roboto mt-1 text-[14px]">
            Choose the notifications you'd like to see and those you don't
          </p>
        </div>
        <div
          // onClick={() => setInfo(true)}
          className="flex flex-col cursor-pointer"
        >
          <div className="flex items-center gap-1">
            <PiBellRingingFill size={20} color="#fff" />
            <p className="text-white text-[16px] font-poppins">Preferences</p>
          </div>
          <p className="text-neutral-400 font-roboto mt-1 text-[14px]">
            Select your preferences by notification type
          </p>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
