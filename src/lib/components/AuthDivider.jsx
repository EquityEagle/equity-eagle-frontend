import React from "react";

const AuthDivider = () => {
  return (
    <div className="flex items-center gap-[1rem]">
      <div className="text-white w-[100%] bg-neutral-500 h-[1px]" />
      <p className="text-white text-[15px]">OR</p>
      <div className="text-white w-[100%] bg-neutral-500 h-[1px]" />
    </div>
  );
};

export default AuthDivider;
