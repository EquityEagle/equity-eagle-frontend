import React from "react";

const StoryLoader = ({ loaded }) => {
  return (
    <div
      className={`${
        loaded ? "bg-white" : "bg-neutral-700"
      } w-full h-1 max-[700px]:h-[3px] rounded-[7px]`}
    />
  );
};

export default StoryLoader;
