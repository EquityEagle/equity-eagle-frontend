import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeBackground } from "../../../redux/system";
import { systemColors } from "../../../styles/styled";

const SystemBackground__ = () => {
  const dispatch = useDispatch();
  const systemConfig = useSelector((state) => state.SYSTEM);
  const bg = systemConfig.backgroudColor;

  function changeDefault() {
    dispatch(changeBackground(systemColors.default));
  }
  function changeNeutral() {
    dispatch(changeBackground(systemColors.neutral));
  }
  function changeSlate900() {
    dispatch(changeBackground(systemColors.slate900));
  }
  function changeLime() {
    dispatch(changeBackground(systemColors.lime));
  }
  function changeSlate600() {
    dispatch(changeBackground(systemColors.slate600));
  }

  const defaultColor = systemColors.default === bg;
  const neutralColor = systemColors.neutral === bg;
  const slate900 = systemColors.slate900 === bg;
  const limeColor = systemColors.lime === bg;
  const slate600 = systemColors.slate600 === bg;

  return (
    <div className="flex flex-wrap w-full relative gap-2">
      <div
        onClick={changeDefault}
        className={`bg-[rgba(0,0,0,0.91)] w-[60px] h-[60px] rounded-[8px] cursor-pointer ${
          defaultColor
            ? "border-[3px] border-blue-600"
            : "hover:border-slate-300 hover:border-[3px]"
        }`}
      />
      <div
        onClick={changeNeutral}
        // onMouseEnter={changeNeutral}
        // onMouseLeave={changeDefault}
        className={`bg-neutral-700 w-[60px] h-[60px] rounded-[8px] cursor-pointer  ${
          neutralColor
            ? "border-[3px] border-blue-600"
            : "hover:border-slate-300 hover:border-[3px]"
        }`}
      />
      <div
        onClick={changeSlate900}
        // onMouseEnter={changeSlate900}
        // onMouseLeave={changeDefault}
        className={`bg-slate-900 w-[60px] h-[60px] rounded-[8px] cursor-pointer  ${
          slate900
            ? "border-[3px] border-blue-600"
            : "hover:border-slate-300 hover:border-[3px]"
        }`}
      />
      <div
        onClick={changeLime}
        // onMouseEnter={changeLime}
        // onMouseLeave={changeDefault}
        className={`bg-lime-300 w-[60px] h-[60px] rounded-[8px] cursor-pointer  ${
          limeColor
            ? "border-[3px] border-blue-600"
            : "hover:border-slate-300 hover:border-[3px]"
        }`}
      />
      <div
        onClick={changeSlate600}
        // onMouseEnter={changeSlate600}
        // onMouseLeave={changeDefault}
        className={`w-[60px] bg-slate-600 h-[60px] rounded-[8px] cursor-pointer  ${
          slate600
            ? "border-[3px] border-blue-600"
            : "hover:border-slate-300 hover:border-[3px]"
        }`}
      />
    </div>
  );
};

export default SystemBackground__;
