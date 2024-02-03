import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Placeholder } from "../../../assets";
import { Button } from "../../../lib";
import { FaBrain, FaRegCalendarAlt } from "react-icons/fa";
import { Flex } from "../../../styles/components/styled";
import { GiThreeFriends } from "react-icons/gi";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import ProfileModal from "./ProfieModal";
import ProfileUpdateModal from "./ProfileUpdateModal";
import { ChatUser, ConnectUser } from "../../../helper/post";
import { toast } from "react-toastify";
import { IoMdChatbubbles } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const Hero = ({
  openProfileModal,
  setOpenProfileModal,
  setOpenUpdateModal,
  openUpdateModal,
  user,
}) => {
  // const [photoHover, setPhotoHover] = useState(false);
  const [Loading, setIsLoading] = useState(false);
  const userId = user._id;
  const connectorsId = useSelector((state) => state.AUTH.id);
  const hasConnect = user?.networks?.includes(connectorsId);
  const navigate = useNavigate();

  const senderId = connectorsId;
  const receiverId = user._id;

  async function Chat() {
    await ChatUser(senderId, receiverId);
    setTimeout(() => {
      navigate("/messages");
    }, 2000);
  }

  async function connect() {
    try {
      setIsLoading(true);
      await ConnectUser(userId, connectorsId);
    } catch (error) {
      toast.error(error.message, {
        position: "top-center",
        className: "toast__alert",
      });
    } finally {
      toast.success(`Success`, {
        position: "top-center",
        className: "toast__alert",
      });
      setIsLoading(false);
    }
  }
  const timestamp = new Date(user.createdAt);
  const formattedDate = timestamp.toLocaleString("en-US", {
    month: "short",
    year: "numeric",
    day: "2-digit",
  });
  return (
    <div className="flex items-center w-full relative gap-10 p-2 mt-10 pb-8 max-[700px]:gap-5 select-none">
      <img
        src={user.profile?.url || Placeholder}
        onClick={(e) => {
          setOpenProfileModal(true);
          e.stopPropagation();
        }}
        alt="User profile"
        className="w-[150px] h-[150px] border-2 border-blue-600 cursor-pointer rounded-full max-[800px]:w-[90px] max-[800px]:h-[90px] max-[700px]:w-[80px] max-[700px]:h-[80px]"
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
              {user.networks?.length}
            </p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <SiHomeassistantcommunitystore
              size={20}
              className="text-neutral-500"
            />
            <p className="text-neutral-500 font-kanit text-[14px] -mt-2">
              {user.community?.length}
            </p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <FaBrain size={20} className="text-neutral-500" />
            <p className="text-neutral-500 font-kanit text-[14px] -mt-2">
              {user.ideas?.length}
            </p>
          </div>
          {hasConnect || user._id === connectorsId ? (
            ""
          ) : (
            <Button
              secondary
              text="Connect"
              isLoading={Loading}
              disabled={Loading}
              Onclick={connect}
              className="max-[700px]:hidden absolute -right-[9rem] max-[1024px]:-right-[5rem] max-[800px]:-right-[10rem]"
            />
          )}
          <IoMdChatbubbles
            onClick={Chat}
            size={40}
            color="#fff"
            className="p-2 rounded-[9px] hover:bg-neutral-800 cursor-pointer -left-4"
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
          user={user}
          open={openProfileModal}
          closeModal={setOpenProfileModal}
          setOpenUpdateModal={setOpenUpdateModal}
        />
      )}
    </div>
  );
};

export default Hero;
