import React, { useState } from "react";
import ChatHeader from "./ChatHeader";
import { ChatSender } from "../../lib";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { BsArrowLeftShort } from "react-icons/bs";
import Messages from "./Messages";

const MessageContainer = ({ setChats }) => {
  const chats = useSelector((state) => state.CHATS.chat);
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  return (
    <div
      className={`flex${
        chats.length !== 0 ? "max-[700px]:flex" : "max-[700px]:hidden"
      } flex-col relative w-[850px] max-[700px]:w-full h-full`}
    >
      <BsArrowLeftShort
        size={45}
        color="#fff"
        onClick={() => navigate(-1)}
        className="absolute left-4 top-5 cursor-pointer hidden max-[1024px]:flex max-[700px]:hidden bg-neutral-800 p-2 rounded-[9px]"
      />
      {chats.length !== 0 ? (
        <div className={`flex flex-col relative w-full h-full `}>
          <ChatHeader chats={chats} setChats={setChats} message={message} />
          <Messages message={message} />
          <ChatSender message={message} setMessage={setMessage} />
        </div>
      ) : (
        <h1
          className={`items-center text-neutral-400 w-full max-[700px]:hidden h-full justify-center text-[18px] font-medium flex font-poppins text-center`}
        >
          Select a chat
        </h1>
      )}
    </div>
  );
};

export default MessageContainer;
