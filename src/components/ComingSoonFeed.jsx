import React from "react";
import { MdOutlinePendingActions } from "react-icons/md";

const ComingSoonFeed = () => {
  return (
    <div className="flex flex-col w-full relative h-full items-center justify-center">
      <div className="flex flex-col p-3 items-center justify-center gap-2 h-full w-full translate-y-52">
        <MdOutlinePendingActions size={60} color="#fff" />
        <h1 className="text-neutral-500 font-poppins font-[500] text-lg">
          Coming soon
        </h1>
      </div>
    </div>
  );
};

export default ComingSoonFeed;
