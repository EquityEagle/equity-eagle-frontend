import React from "react";
import { Flex } from "../../styles/components/styled";
import { Placeholder } from "../../assets";

const Messages = ({ message }) => {
  const sent = "11-22-2023";
  const timestamp = new Date(sent);
  const formattedDate = timestamp.toLocaleString("en-US", {
    month: "short",
    year: "numeric",
  });

  return (
    <div className="flex flex-col p-3 relative overflow-y-auto mt-16 z-0">
      <div className="gap-2 flex relative">
        <img
          src={Placeholder}
          alt="user profie"
          className="w-[35px] h-[35px] rounded-full self-end"
        />
        <div className="flex flex-col gap-[-2px] bg-slate-800 w-[auto] h-auto p-2 relative rounded-t-[12px] rounded-br-[12px]">
          <p className="text-blue-600 font-kanit text-[14px] translate-y-[2px]">
            Kingrashy
          </p>
          <div className="flex gap-3">
            <p className="font-poppins text-white font-[400px] text-[14px]">
              How is the challenage going on
            </p>
            <p className="text-neutral-500 font-kanit text-[12px] self-end mt-2">
              {formattedDate}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;
