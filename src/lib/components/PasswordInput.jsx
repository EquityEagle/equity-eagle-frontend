import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const PasswordInput = ({ className, onChange, value }) => {
  const [visible, setVisible] = useState(false);

  function handleToggleVisibility() {
    setVisible(!visible);
  }

  return (
    <div className="flex items-center bg-white border border-blue-500 rounded-[4px] h-[45px] justify-between p-[5px]">
      <input
        type={visible ? "text" : "password"}
        className={`${className} p-2 border-none outline-none bg-transparent w-[85%] font-roboto placeholder:text-neutral-700 `}
        onChange={onChange}
        value={value}
        placeholder="Password"
      />
      <div
        className="text-[25px] cursor-pointer"
        onClick={handleToggleVisibility}
      >
        {visible ? <FaEyeSlash /> : <FaEye />}
      </div>
    </div>
  );
};

export default PasswordInput;
