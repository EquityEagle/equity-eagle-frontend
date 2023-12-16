import React from "react";
import { Placeholder } from "../../assets";
import { IoMdArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MemberMenuModal } from "../../components";

const ProfieViewHeader = ({ data, setViewProfie, openMenu, setOpenMenu }) => {
  const navigate = useNavigate();

  return (
    <div className="flex gap-[10px] fixed items-center z-[120] border-b border-neutral-800 max-[700px]:w-full w-[700px] bg-black p-[10px]">
      <IoMdArrowBack
        size={35}
        className="cursor-pointer hover:bg-neutral-800 p-2 rounded-[9px]"
        color="#fff"
        onClick={() => navigate(-1)}
      />
      <img
        src={data.profile || Placeholder}
        alt="Community profile"
        className="w-[40px] h-[40px] rounded-full cursor-pointer"
        onClick={() => setViewProfie(true)}
      />
      <p
        className="text-white font-poppins cursor-pointer"
        onClick={() => setViewProfie(true)}
      >
        {data.name}
      </p>
      <div className="flex flex-col absolute right-4">
        <BsThreeDotsVertical
          size={35}
          onClick={(e) => {
            setOpenMenu(!openMenu);
            e.stopPropagation();
          }}
          className="cursor-pointer hover:bg-neutral-800 p-2 rounded-[9px]"
          color="#fff"
        />
        {openMenu && <MemberMenuModal setViewProfie={setViewProfie} />}
      </div>
    </div>
  );
};

export default ProfieViewHeader;
