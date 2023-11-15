import React from "react";

const FixedLeftDivider = ({ className }) => {
  return (
    <div
      className={`${className} border-l border-l-neutral-700 top-0 bottom-0 fixed h-full`}
    />
  );
};

export default FixedLeftDivider;
