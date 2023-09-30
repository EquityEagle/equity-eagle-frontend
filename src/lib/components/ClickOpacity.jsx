import React, { useEffect, useState } from "react";

const ClickOpacity = ({ child, className }) => {
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    if (clicked) {
      setTimeout(() => {
        setClicked(false);
      }, 400);
    }
  }, [clicked]);
  return (
    <div
      className={`${className} ${
        clicked ? "bg-slate-800 duration-100 transition-all" : ""
      } p-[6px] relative rounded-full transition-all duration-100`}
      onClick={() => setClicked(true)}
    >
      {child}
    </div>
  );
};

export default ClickOpacity;
