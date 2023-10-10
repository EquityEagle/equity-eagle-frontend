import React from "react";
import { ScaleLoader } from "react-spinners";

const ScaleInLoader = ({ className, size }) => {
  return (
    <ScaleLoader
      color="blue"
      size={size}
      className={`${className} flex justify-center items-center`}
    />
  );
};

export default ScaleInLoader;
