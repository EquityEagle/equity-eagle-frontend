import React from "react";

const BackDrop = ({ chaild, open, className }) => {
  return (
    <div
      className={`${className}bg-[rgb(0,0,0,0.6)] items-center justify-center flex flex-col fixed w-full z-[100] bottom-0 top-0 left-0 right-0`}
    >
      {chaild}
    </div>
  );
};

export default BackDrop;
