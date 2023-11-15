import React, { useState } from "react";
// import { FlexBetween } from "../../styles/Global";
import { IoClose, IoSearch } from "react-icons/io5";
import { traded } from "../../constants/pairs";

const SelectWithDropDown = ({ text, data, setData }) => {
  const [openSelect, setOpenSelect] = useState(false);
  const [selectedText, setSelectedText] = useState("");
  const [value, setValue] = useState("");

  return (
    <div className="flex flex-col relative w-full">
      {openSelect ? (
        ""
      ) : (
        <p
          onClick={() => setOpenSelect(true)}
          className="text-white font-roboto cursor-pointer p-1 w-full rounded-[4px] bg-slate-800"
        >
          {selectedText ? selectedText : `Select ${text}`}
        </p>
      )}
      {openSelect && (
        <div className="flex flex-col bg-slate-600 rounded-[7px] relative p-[10px] w-full max-[700px]:w-[295px] h-[400px] overflow-x-auto hide-scroll">
          <div className="gap-[10px] flex border-b-[2px] flex-1 border-b-black p-1 w-[280px] -translate-y-[10px] z-[130] fixed bg-slate-600">
            <IoSearch size={25} color="white" />
            <input
              type="text"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              className="w-full outline-none font-roboto bg-transparent"
            />
            <IoClose
              color="white"
              className="cursor-pointer"
              onClick={() => setOpenSelect(false)}
              size={25}
            />
          </div>
          <div className="flex flex-col mt-[2.1rem] w-full relative">
            {traded
              .filter((p) => {
                const searchTerm = value.toLowerCase();
                const pair = p.pair.toLowerCase();

                return pair.includes(searchTerm) && pair !== searchTerm;
              })
              .map((item, index) => (
                <p
                  className="text-white cursor-pointer font-roboto"
                  onClick={() => {
                    setSelectedText(item.pair);
                    setOpenSelect(false);
                    setData({ ...data, symbol: item.pair });
                  }}
                  key={index}
                >
                  {item.pair}
                </p>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SelectWithDropDown;
