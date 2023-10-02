import React from "react";

const Input = ({ type, className, onChange, value, placeholder }) => {
  return (
    <input
      type={type}
      className={`${className} p-2 outline-none rounded-[4px] border w-full font-roboto placeholder:text-neutral-700 border-blue-500`}
      onChange={onChange}
      value={value}
      placeholder={placeholder}
    />
  );
};

export default Input;
