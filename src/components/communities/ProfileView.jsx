import React, { useState } from "react";
import { communitydata, memebersdata } from "../../constants/community";
import { Placeholder } from "../../assets";
import { useNavigate, useParams } from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io";
import { HiMiniUserGroup } from "react-icons/hi2";
import { FaRegCalendarAlt } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { BsThreeDotsVertical } from "react-icons/bs";
import AdminMenuModal from "./AdminMenuModal";
import { BottomDivider } from "../../lib";
import CommunitySetting from "../settings/CommunitySetting";

const ProfileView = ({ setViewProfie }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const [openSettings, setOpenSettings] = useState(false);
  const { communityslug } = useParams();
  const community = communitydata.find((c) => c.slug === communityslug);
  const sub = 120860;
  const joined = "11-22-2023";
  const timestamp = new Date(joined);
  const formattedDate = timestamp.toLocaleString("en-US", {
    month: "short",
    year: "numeric",
  });

  return (
    <div
      onClick={() => setOpenMenu(false)}
      className="flex flex-col relative w-[700px] max-[700px]:w-full h-full bg-black select-none"
    >
      <div className="flex max-[700px]:w-full w-[700px] fixed bg-[rgb(0,0,0,0.5)] items-center z-[100] justify-between p-2">
        <IoMdArrowBack
          size={35}
          className="cursor-pointer hover:bg-neutral-800 p-2 rounded-[9px]"
          color="#fff"
          onClick={() => setViewProfie(false)}
        />
        <BsThreeDotsVertical
          size={35}
          onClick={(e) => {
            setOpenMenu(!openMenu);
            e.stopPropagation();
          }}
          className="cursor-pointer hover:bg-neutral-800 p-2 rounded-[9px]"
          color="#fff"
        />
      </div>
      {openMenu && <AdminMenuModal openSettins={setOpenSettings} />}
      <img
        src={Placeholder}
        alt="Community profie"
        className="w-[700px] max-[700px]:w-full h-[550px] max-[700px]:h-full"
      />
      <div className="flex flex-col p-[10px]">
        <h1 className="text-white font-poppins text-[25px]">
          {community.name}
        </h1>
        <div className="flex gap-5 flex-wrap mt-10 items-center">
          <div className="flex flex-col items-center gap-1">
            <HiMiniUserGroup size={25} className="text-neutral-500" />
            <p className="text-neutral-500 font-kanit text-[14px] -mt-2">{`${sub.toLocaleString()}`}</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <FaRegCalendarAlt size={20} className="text-neutral-500" />
            <p className="text-neutral-500 font-kanit text-[14px] -mt-2">
              {formattedDate}
            </p>
          </div>
        </div>
      </div>
      <BottomDivider />
      <div className="flex flex-col gap-2 mt-2 p-2">
        <div className="flex gap-3 items-center relative cursor-pointer p-2 hover:bg-neutral-700 rounded-[8px]">
          <HiMiniUserGroup size={25} className="text-white" />
          <p className="text-white font-kanit">Members</p>
          <IoSearch size={25} className="text-white absolute right-4" />
        </div>
        <div className="flex flex-col gap-3">
          {memebersdata.map((member, index) => (
            <div className="flex gap-3 relative items-center hover:bg-neutral-700 rounded-[8px] p-1 cursor-pointer">
              <img
                src={Placeholder}
                alt="member profile"
                className="h-[40px] w-[40px] rounded-full"
              />
              <div className="flex flex-col">
                <p className="text-white font-poppins">{member.name}</p>
                <p className={`font-poppins text-[13px] text-green-500`}>
                  online
                </p>
              </div>
              <p
                className={`font-kanit absolute right-4 ${
                  member.owner && "text-blue-600"
                } ${member.isAdmin && "text-green-500"}`}
              >
                {member.owner && "Founder"} {member.isAdmin && "Admin"}
              </p>
            </div>
          ))}
          {openSettings && (
            <CommunitySetting open={openSettings} KeepOpen={setOpenSettings} />
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileView;
