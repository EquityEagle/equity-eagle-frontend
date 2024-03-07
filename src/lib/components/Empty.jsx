import React from "react";
import { RiFolderHistoryLine } from "react-icons/ri";

const Empty = ({ text }) => {
  return (
    <div className="flex flex-col w-full h-full translate-y-80 relative justify-center items-center">
      <RiFolderHistoryLine
        size={45}
        className="items-center text-neutral-700"
      />
      <p className="text-neutral-600 font-roboto">{text}</p>
    </div>
  );
};

export default Empty;
