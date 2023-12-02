import React from "react";

const BackDrop = ({ chaild, open, onlyM, className, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`${className} bg-[rgb(0,0,0,0.5)] delayIn items-center justify-center ${
        onlyM && "hidden max-[700px]:flex"
      } flex-col flex fixed w-full z-[110] bottom-0 top-0 left-0 right-0`}
    >
      {chaild}
    </div>
  );
};

export default BackDrop;
