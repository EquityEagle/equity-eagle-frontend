import React from "react";
import { BsArrowLeftShort } from "react-icons/bs";
import { RiSearchLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const MobileHeader = ({ label, onClick, navBack, hasSearchBar, barClick }) => {
  const navigate = useNavigate();
  return (
    <div className="items-center hidden top-0 max-[700px]:flex border-b border-neutral-700 fixed z-[120] p-3 h-[50px] gap-2 bg-[rgb(0,0,0,0.5)] w-full">
      <BsArrowLeftShort
        size={35}
        onClick={navBack ? () => navigate(-1) : onClick()}
        color="#fff"
        className="cursor-pointer"
      />
      <p className="text-white font-kanit text-[17px] font-medium">{label}</p>
      {hasSearchBar && (
        <RiSearchLine
          size={25}
          color="#fff"
          onClick={barClick}
          className="absolute right-4"
        />
      )}
    </div>
  );
};

export default MobileHeader;
