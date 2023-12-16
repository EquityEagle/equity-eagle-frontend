import React from "react";
import { chatsdata } from "../../constants/chats";
import ChatItem from "./ChatItem";
import { BottomDivider, MobileHeader } from "../../lib";
import { useSelector } from "react-redux";

const ChatContainer = ({ setChats, chat }) => {
  const chats = useSelector((state) => state.CHATS.chat);
  const hasChat = chats.length !== 0;
  return (
    <div
      className={`flex flex-col relative w-[300px] h-full max-[700px]:w-full max-[1024px]:w-[120px] ${
        hasChat ? "max-[700px]:hidden" : "max-[700px]:flex"
      }`}
    >
      <MobileHeader navBack label="Chats" hasSearchBar />
      <div className="flex flex-col w-[250px] max-[1024px]:w-[120px] max-[700px]:mt-7 fixed h-full p-3 max-[700px]:-translate-x-0 -translate-x-3 bg-black border-r border-neutral-800 max-[700px]:w-full">
        <h1 className="text-white max-[700px]:hidden font-kanit font-medium text-[20px] items-center text-center">
          Chats
        </h1>
        <BottomDivider className="mb-2 mt-2" />
        <div className="flex flex-col gap-3 overflow-y-auto">
          {chatsdata.map((user, index) => (
            <ChatItem user={user} key={index} setChats={setChats} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChatContainer;
