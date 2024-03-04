import React from "react";
import { useSelector } from "react-redux";

const Help = () => {
  const systemconfig = useSelector((state) => state.SYSTEM);
  const islight = systemconfig.mode === "light";
  // const isdark = systemconfig.mode === "dark";

  return (
    <div
      className={`w-full h-full ${
        islight ? "bg-neutral-500" : "bg-neutral-800"
      } rounded-tr-[7px] rounded-br-[7px] p-3`}
    >
      <h1 className="text-white font-kanit text-xl">Help</h1>
    </div>
  );
};

export default Help;
