import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Placeholder } from "../../../assets";
import { Button, CustomTitle } from "../../../lib";
import { FaBrain, FaRegCalendarAlt, FaStar } from "react-icons/fa";
import { Flex } from "../../../styles/components/styled";
import { GiThreeFriends } from "react-icons/gi";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import ProfileModal from "./ProfieModal";
import ProfileUpdateModal from "./ProfileUpdateModal";

const Hero = ({
  openProfileModal,
  setOpenProfileModal,
  setOpenUpdateModal,
  openUpdateModal,
  user,
}) => {
  // const user = useSelector((state) => state.AUTH);
  const [photoHover, setPhotoHover] = useState(false);
  const timestamp = new Date(user.createdAt);
  const formattedDate = timestamp.toLocaleString("en-US", {
    month: "short",
    year: "numeric",
    day: "2-digit",
  });
  return (
    <div className="flex items-center w-full relative gap-10 p-2 mt-10 pb-8 max-[700px]:gap-5 select-none">
      <img
        src={Placeholder}
        onClick={(e) => {
          setOpenProfileModal(true);
          e.stopPropagation();
        }}
        alt="User profile"
        className="w-[150px] h-[150px] cursor-pointer rounded-full max-[800px]:w-[90px] max-[800px]:h-[90px] max-[700px]:w-[80px] max-[700px]:h-[80px]"
      />
      <div className="flex flex-col items-start w-full relative">
        <h1 className="text-white font-kanit text-[30px] max-[700px]:text-[25px]">
          {user.name}
        </h1>
        <p className="text-neutral-400 text-[16px] font-poppins">
          &copy;{user.username}
        </p>
        <Flex className="mt-5 gap-7 items-center flex-wrap relative w-full">
          <div className="flex flex-col items-center gap-2">
            <FaRegCalendarAlt size={20} className="text-neutral-500" />
            <p className="text-neutral-500 font-kanit text-[14px] -mt-2">
              {formattedDate}
            </p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <GiThreeFriends size={20} className="text-neutral-500" />
            <p className="text-neutral-500 font-kanit text-[14px] -mt-2">
              {user.networks.length}
            </p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <SiHomeassistantcommunitystore
              size={20}
              className="text-neutral-500"
            />
            <p className="text-neutral-500 font-kanit text-[14px] -mt-2">
              {user.community.length}
            </p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <FaBrain size={20} className="text-neutral-500" />
            <p className="text-neutral-500 font-kanit text-[14px] -mt-2">
              {user.ideas.length}
            </p>
          </div>
          <Button
            secondary
            text="Connect"
            className="max-[700px]:hidden absolute -right-[9rem]"
          />
        </Flex>
      </div>
      {openUpdateModal && (
        <ProfileUpdateModal
          open={openUpdateModal}
          keepOpen={setOpenUpdateModal}
        />
      )}
      {openProfileModal && (
        <ProfileModal
          open={openProfileModal}
          closeModal={setOpenProfileModal}
          setOpenUpdateModal={setOpenUpdateModal}
        />
      )}
    </div>
  );
};

export default Hero;
