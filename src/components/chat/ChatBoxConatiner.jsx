import React from "react";
import ChatContainer from "./ChatContainer";
import MessageContainer from "./MessageContainer";

const ChatBoxConatiner = ({ chats, setChats }) => {
  return (
    <div className="bg-black w-full h-[100vh] flex relative p-5 max-[700px]:h-full max-[700px]:p-0">
      <ChatContainer setChats={setChats} />
      <MessageContainer chats={chats} setChats={setChats} />
    </div>
  );
};

export default ChatBoxConatiner;
