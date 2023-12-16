import React from "react";
import { HiArrowLeft, HiDotsVertical } from "react-icons/hi";
import { Placeholder } from "../../assets";
import { useDispatch, useSelector } from "react-redux";
import { removeCurrentchat } from "../../redux/chats";
import { TypingEffect } from "../../lib";

const ChatHeader = ({ message }) => {
  const chats = useSelector((state) => state.CHATS.chat);
  const dispatch = useDispatch();

  return (
    <div className="flex fixed bg-black items-center border-b border-neutral-700 gap-2 p-3 w-[850px] max-[700px]:w-full">
      <HiArrowLeft
        size={35}
        onClick={() => dispatch(removeCurrentchat())}
        color="#fff"
        className="cursor-pointer hover:bg-neutral-800 p-2 rounded-[9px]"
      />
      <img
        src={chats?.img || Placeholder}
        alt="User"
        className="w-[40px] h-[40px] rounded-full"
      />
      <p className="text-white font-kanit">{chats?.username}</p>
      {/* {message && <TypingEffect />} */}
      <TypingEffect />
      <HiDotsVertical
        size={35}
        color="#fff"
        className="absolute right-4 cursor-pointer hover:bg-neutral-800 p-2 rounded-[9px]"
      />
    </div>
  );
};

export default ChatHeader;
