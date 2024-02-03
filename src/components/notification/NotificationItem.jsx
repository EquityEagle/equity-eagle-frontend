import React from "react";
import { Flex } from "../../styles/components/styled";
import { Placeholder } from "../../assets";
import { FlexBetween } from "../../styles/Global";
import { BottomDivider } from "../../lib";
// import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { ReadNotification } from "../../helper/post";
import { toast } from "react-toastify";
import { formatDate } from "../../lib/functions";

const NotificationItem = ({ notification }) => {
  const timestamp = new Date(notification.createdAt);
  // const navigate = useNavigate();
  const userId = useSelector((state) => state.AUTH.id);
  const noteId = notification._id;

  const formattedDate = formatDate(timestamp);

  async function read(e) {
    await ReadNotification(userId, noteId);
    toast.success("Success", {
      position: "top-center",
      className: "toast__alert",
    });
  }

  return (
    <>
      <FlexBetween
        onClick={read}
        className={`cursor-pointer p-[16px] hover:bg-neutral-800 select-none ${
          !notification.seen && "bg-slate-600"
        }`}
      >
        <Flex className="gap-2">
          <img
            src={notification.image?.url || Placeholder}
            alt="Not"
            className="w-[45px] h-[45px] rounded-full"
          />
          <p className="text-white font-poppins text-[16px]">
            {notification.body}
          </p>
        </Flex>
        <p className="text-neutral-300 font-kanit text-[14px] absolute bottom-0 right-4">
          {formattedDate}
        </p>
      </FlexBetween>
      <BottomDivider />
    </>
  );
};

export default NotificationItem;
