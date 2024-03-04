import React, { useState } from "react";
import { GoMoon } from "react-icons/go";
import { RiArrowDownSLine } from "react-icons/ri";
import { IoMdSunny } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { changeMode } from "../../../redux/system";
import SystemBackground__ from "./SystemBackground__";

const Personalization = () => {
  const [openMode, setOpemMode] = useState(false);
  const systemconfig = useSelector((state) => state.SYSTEM);
  const islight = systemconfig.mode === "light";
  const isdark = systemconfig.mode === "dark";
  const dispatch = useDispatch();

  function switchLight(e) {
    e.stopPropagation();
    dispatch(changeMode("light"));
    setOpemMode(false);
  }
  function switchDark(e) {
    e.stopPropagation();
    dispatch(changeMode("dark"));
    setOpemMode(false);
  }

  return (
    <div
      onClick={() => setOpemMode(false)}
      className={`w-full h-full ${
        islight ? "bg-neutral-500" : "bg-neutral-800"
      } rounded-tr-[7px] rounded-br-[7px] p-3`}
    >
      <h1 className="text-white font-kanit text-xl">Personalization</h1>
      <div className="flex flex-col gap-2 mt-2 w-full p-2">
        <p className="font-poppins text-white font-[400]">Theme</p>
        <p className="font-poppins text-[14px] text-white font-[400]">
          App theme color
        </p>
        <div className="relative">
          <div
            onClick={(e) => {
              e.stopPropagation();
              setOpemMode(true);
            }}
            className="flex items-center justify-between bg-neutral-900  p-2 rounded-[8px] cursor-pointer"
          >
            <div className="flex gap-2 items-center">
              {isdark ? (
                <GoMoon size={20} color="white" />
              ) : (
                <IoMdSunny size={20} color="white" />
              )}
              <p className="text-white font-poppins text-[14px]">
                {isdark ? "Dark" : "Light"}
              </p>
            </div>
            <RiArrowDownSLine size={25} color="white" />
          </div>
          {openMode && (
            <div
              onClick={(e) => e.stopPropagation()}
              className="bg-neutral-900 p-2 rounded-[8px] absolute flex flex-col gap-3 w-full -top-10"
            >
              <div
                onClick={switchLight}
                className="flex gap-2 items-center bg-neutral-700 p-2 rounded-[6px] cursor-pointer"
              >
                {islight && (
                  <div className="bg-blue-600 h-[16px] absolute translate-x-[8px] left-0 w-[4px] rounded-[6px]" />
                )}
                <IoMdSunny size={20} color="white" />
                <p className="text-white font-poppins text-[14px]">Light</p>
              </div>
              <div
                onClick={switchDark}
                className="flex gap-2 items-center bg-neutral-700 p-2 rounded-[6px] cursor-pointer"
              >
                {isdark && (
                  <div className="bg-blue-600 h-[16px] absolute translate-x-[8px] left-0 w-[4px] rounded-[6px]" />
                )}
                <GoMoon size={20} color="white" />
                <p className="text-white font-poppins text-[14px]">Dark</p>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-col gap-2 mt-2 w-full p-2">
        <p className="font-poppins text-white font-[400]">Background Color</p>
        <SystemBackground__ />
      </div>
    </div>
  );
};

export default Personalization;
