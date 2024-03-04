import React from "react";
import { Flex } from "../../styles/components/styled";
import { Placeholder } from "../../assets";
import { BottomDivider } from "../../lib";
// import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { ReadNotification } from "../../helper/post";
import { toast } from "react-toastify";
import { formatDate } from "../../lib/functions";
import { AiFillHeart } from "react-icons/ai";
import { FaBrain, FaStar, FaUserPlus } from "react-icons/fa";
import { HiOutlineSpeakerphone, HiSpeakerphone } from "react-icons/hi";
import { LiaComment } from "react-icons/lia";
import { useNavigate } from "react-router-dom";

const NotificationItem = ({ notification }) => {
  const timestamp = new Date(notification.createdAt);
  const navigate = useNavigate();
  const userId = useSelector((state) => state.AUTH.id);
  const noteId = notification._id;

  const formattedDate = formatDate(timestamp);

  async function read(e) {
    await ReadNotification(userId, noteId);
    // toast.success("Success", {
    //   position: "top-center",
    //   className: "toast__alert",
    // });
    if (notification?.objectId) {
      navigate(`/ideas/statusId/${notification.objectId}`);
    }
  }

  const unread = !notification.seen;

  const like = notification.type === "like";
  const follow = notification.type === "follow";
  const comment = notification.type === "comment";
  const idea = notification.type === "idea";
  const star = notification.type === "star";
  const annoucement = notification.type === "annoucement";
  return (
    <>
      <div
        onClick={read}
        className={`cursor-pointer gap-5 ${
          unread && "bg-slate-800 border-b border-b-neutral-700"
        } flex p-5 hover:bg-neutral-800 items-center w-full relative h-full`}
      >
        <Flex className="gap-5 -translate-y-9">
          {like && <AiFillHeart className="text-red-600" size={25} />}
          {comment && <LiaComment size={25} className="text-blue-600" />}
          {follow && <FaUserPlus size={25} color="white" />}
          {idea && <FaBrain size={25} color="white" />}
          {annoucement && <HiOutlineSpeakerphone size={25} color="white" />}
          {star && (
            <FaStar className="text-yellow-400 cursor-pointer" size={25} />
          )}
        </Flex>
        <div className="flex flex-col gap-3 items-start relative h-full">
          {notification?.hasIcon ? (
            <HiSpeakerphone className="text-blue-600" size={25} />
          ) : (
            <img
              // src={notification.img}
              src={notification.image?.url || Placeholder}
              alt="Not"
              className="w-[35px] h-[35px] rounded-full"
            />
          )}
          <p className="text-white font-poppins text-[15px]">
            {notification.body}
          </p>

          <p className="text-white font-roboto text-[14px]">
            {notification?.text}
          </p>
        </div>
      </div>
      <BottomDivider />
    </>
  );
};

export default NotificationItem;
