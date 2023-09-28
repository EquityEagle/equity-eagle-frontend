import React from "react";
import { BeatLoader } from "react-spinners";

const Button = ({
  Onclick,
  className,
  secondary,
  outlined,
  fullWidth,
  primary,
  isLoading,
  text,
  disabled,
  size,
}) => {
  return (
    <button
      onClick={Onclick}
      disabled={disabled}
      className={`${className} disabled:opacity-75 disabled:cursor-not-allowed font-kanit flex items-center p-[5px] hover:opacity-75 cursor-pointer rounded-[4px] ${
        secondary ? "bg-blue-600 text-white" : ""
      } ${primary ? "text-white border-white-border hover:bg-slate-800" : ""}`}
    >
      {isLoading ? <BeatLoader color="#fff" size={size} /> : text}
    </button>
  );
};

export default Button;
