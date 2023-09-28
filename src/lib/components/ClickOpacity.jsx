import React, { useEffect, useState } from "react";

const ClickOpacity = ({ child, className }) => {
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    if (clicked) {
      setTimeout(() => {
        setClicked(false);
      }, 900);
    }
  }, [clicked]);
  return (
    <div
      className={`${className}${
        clicked ? "bg-slate-800 transition-all duration-100" : "  "
      } p-[6px] relative rounded-full transition-all duration-100`}
      onClick={() => setClicked(true)}
    >
      {child}
    </div>
  );
};

export default ClickOpacity;
