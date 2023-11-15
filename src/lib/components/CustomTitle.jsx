import React from "react";

const CustomTitle = ({ title, shadow, className }) => {
  return (
    <p
      className={`${className} text-white bg-black p-1 rounded-[4px] z-[90] ${
        shadow && "shadow shadow-slate-500"
      } w-auto top-[33px] absolute items-center flex text-[12px] font-roboto font-[400]`}
    >
      {title}
    </p>
  );
};

export default CustomTitle;
