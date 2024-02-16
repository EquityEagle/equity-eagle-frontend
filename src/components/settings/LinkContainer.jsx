import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { settinglinks } from "../../constants/settings";

const LinkContainer = () => {
  return (
    <div className="flex flex-col gap-4 pb-[17rem]">
      {settinglinks.map((link, index) => (
        <div
          key={index}
          className="flex justify-between items-center cursor-pointer p-3 hover:bg-neutral-800"
        >
          <div className="flex gap-3 items-center">
            {link.icon}
            <div className="flex flex-col gap-0">
              <p className="text-white font-[500] text-[18px]">{link.title}</p>
              <p className="text-neutral-400 text-[14px] font-poppins">
                {link.subtitle}
              </p>
            </div>
          </div>
          <FaArrowRight size={20} color="white" />
        </div>
      ))}
      {/* <h1 className="text-white text-[12rem]">EE</h1> */}
    </div>
  );
};

export default LinkContainer;
