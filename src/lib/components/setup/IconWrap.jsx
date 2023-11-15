import React, { useState } from "react";
import CustomTitle from "../CustomTitle";

const IconWrap = ({ className, icon, text, color, bg, title, onClick }) => {
  const [isHoverd, setIsHoverd] = useState(false);
  return (
    <div className="flex flex-col relative">
      <div
        onClick={onClick}
        className={`${className} flex gap-1 items-center p-1 justify-center rounded-[3px] cursor-pointer`}
        onMouseEnter={() => setIsHoverd(true)}
        onMouseLeave={() => setIsHoverd(false)}
      >
        {icon}
        <p className={`font-roboto ${color} text-sm`}>{text}</p>
      </div>
      {isHoverd && <CustomTitle title={title} className="top-[35px]" />}
    </div>
  );
};

export default IconWrap;
