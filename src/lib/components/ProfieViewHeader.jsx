import React from "react";
import { Placeholder } from "../../assets";
import { IoMdArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { HiOutlineDotsHorizontal } from "react-icons/hi";

const ProfieViewHeader = ({ name, data }) => {
  const navigate = useNavigate();
  return (
    <div className="flex gap-[10px] fixed items-center border-b border-neutral-800 max-[700px]:w-full w-[700px] bg-black p-[10px]">
      <IoMdArrowBack
        size={25}
        className="cursor-pointer"
        color="#fff"
        onClick={() => navigate(-1)}
      />
      <img
        src={data.profile || Placeholder}
        alt="Community profile"
        className="w-[40px] h-[40px] rounded-full"
      />
      <p className="text-white font-poppins">{data.name}</p>
      <div className="flex flex-col absolute right-4">
        <HiOutlineDotsHorizontal
          size={25}
          className="cursor-pointer"
          color="#fff"
        />
      </div>
    </div>
  );
};

export default ProfieViewHeader;
