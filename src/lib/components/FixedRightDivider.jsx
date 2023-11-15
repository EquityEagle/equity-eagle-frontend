import React from "react";

const FixedRightDivider = ({ className }) => {
  return (
    <div
      className={`${className} w-[1px] top-0 bottom-0 fixed bg-neutral-700 h-full`}
    />
  );
};

export default FixedRightDivider;
