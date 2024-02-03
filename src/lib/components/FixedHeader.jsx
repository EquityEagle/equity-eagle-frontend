import React from "react";
import { BsArrowLeftShort } from "react-icons/bs";
import { IoSearch } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const FixedHeader = ({ className, hasSearchBar, barClick }) => {
  const navigate = useNavigate();
  return (
    <div
      className={`${className} flex fixed w-[700px] max-[700px]:w-full gap-5 p-2 items-center bg-[rgb(0,0,0,0.5)] border-b border-b-neutral-700`}
    >
      <BsArrowLeftShort
        size={35}
        color="#fff"
        className="cursor-pointer"
        onClick={(e) => {
          e.stopPropagation();
          navigate(-1);
        }}
      />
      {hasSearchBar && (
        <IoSearch
          color="#fff"
          size={25}
          className="fixed right-3 z-[100]"
          onClick={barClick}
        />
      )}
    </div>
  );
};

export default FixedHeader;
