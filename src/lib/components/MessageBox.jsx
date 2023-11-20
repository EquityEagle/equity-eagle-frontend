import React from "react";
import { BsEmojiFrown } from "react-icons/bs";
import { TbPhotoPlus } from "react-icons/tb";

const MessageBox = () => {
  return (
    <div className="max-[700px]:flex max-[700px]:w-full justify-between pr-[17px] w-[700px] flex pl-[15px] fixed items-center border-t border-t-neutral-800 bottom-0 bg-black p-[10px]">
      <div className="flex gap-[10px] items-center w-full">
        <BsEmojiFrown
          size={25}
          className="text-neutral-600 cursor-pointer hover:text-blue-600"
        />
        <input
          type="text"
          placeholder="Type message"
          className="bg-transparent p-1 outline-none border-none text-white w-full"
        />
      </div>
      <TbPhotoPlus
        size={25}
        className="text-neutral-600 cursor-pointer hover:text-blue-600"
      />
    </div>
  );
};

export default MessageBox;
