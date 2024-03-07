import React from "react";
import { BsArrowLeftShort } from "react-icons/bs";
import { RiSearchLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const PageHeader = ({ label, onClick, navBack, hasSearchBar, barClick }) => {
  const navigate = useNavigate();
  return (
    <div className="items-center flex top-0 max-[700px]:hidden border-b border-neutral-800 z-[120] p-3 h-[50px] gap-2 bg-[rgb(0,0,0,0.5)] w-full">
      <BsArrowLeftShort
        size={37}
        onClick={navBack ? () => navigate(-1) : onClick()}
        color="#fff"
        className="cursor-pointer hover:bg-neutral-700 rounded-[8px] p-1"
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

export default PageHeader;
