import React from "react";
import { FadeLoader } from "react-spinners";

const DarkLoader = () => {
  return (
    <div className="fixed top-0 w-full h-full bottom-0 bg-[rgb(0,0,0,0.5)] z-[100] flex flex-col items-center justify-center">
      <FadeLoader color="blue" size={150} />
    </div>
  );
};

export default DarkLoader;
