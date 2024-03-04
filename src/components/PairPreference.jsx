import React from "react";
import { MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { setPairPref } from "../redux/system";

const PairPreference = ({ pair }) => {
  const dispatch = useDispatch();
  const pairPref = useSelector((state) => state.SYSTEM.pref);

  const selected = pairPref?.find((p) => p === pair.pair);
  return (
    <div
      onClick={() => dispatch(setPairPref(pair.pair))}
      className={`flex items-center cursor-pointer mb-2 gap-2 ${
        selected ? "bg-slate-800" : "hover:bg-slate-800"
      } p-3 w-[45%] rounded-[8px] ml-2`}
    >
      {selected ? (
        <MdCheckBox size={25} color="blue" />
      ) : (
        <MdCheckBoxOutlineBlank size={25} color="white" />
      )}
      <p className="text-white font-roboto">{pair.pair}</p>
    </div>
  );
};

export default PairPreference;
