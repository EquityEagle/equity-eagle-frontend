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
  padding,
  width,
  light,
}) => {
  return (
    <button
      onClick={Onclick}
      disabled={disabled}
      style={{ width: width, padding: padding }}
      className={`${className} disabled:opacity-70 disabled:hover:opacity-70 disabled:cursor-not-allowed font-kanit flex items-center p-[5px] relative justify-center cursor-pointer rounded-[4px] ${
        secondary ? "bg-blue-600 text-white hover:bg-blue-500" : ""
      } ${primary ? "text-white border-white-border hover:bg-slate-800" : ""} ${
        fullWidth ? "w-full" : ""
      } ${light && "bg-black text-white hover:bg-neutral-800"}`}
    >
      {isLoading ? <BeatLoader color="#fff" size={size} /> : text}
    </button>
  );
};

export default Button;
