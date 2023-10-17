import React from "react";

const IconWrap = ({ className, icon, text, color, bg, title, onClick }) => {
  return (
    <div
      title={title}
      onClick={onClick}
      className={`${className} flex gap-1 items-center p-1 justify-center rounded-[3px] cursor-pointer ${bg}`}
    >
      {icon}
      <p className={`font-roboto ${color} text-sm`}>{text}</p>
    </div>
  );
};

export default IconWrap;
