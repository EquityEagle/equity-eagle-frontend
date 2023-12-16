import React from "react";
import { BeatLoader } from "react-spinners";

const TypingEffect = () => {
  return (
    <div className="flex p-1 rounded-[8px] bg-neutral-800 w-[65px] relative">
      <BeatLoader color="#fff" />
    </div>
  );
};

export default TypingEffect;
