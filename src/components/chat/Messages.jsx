import React, { useEffect, useRef, useState } from "react";
import { TypingEffect } from "../../lib";
import { useSelector } from "react-redux";
import { getMessages } from "../../helper/fetch";

const Messages = ({ message, setMessage, isTyping }) => {
  const chatId = useSelector((state) => state.CHATS.chat._id);
  const [messages, setMessages] = useState([]);
  const userId = useSelector((state) => state.AUTH.id);
  const messagesContainerRef = useRef();

  useEffect(() => {
    const getmsg = async () => {
      const data = await getMessages(chatId);
      setMessages(data);
    };
    getmsg();
  }, [chatId, messages]);

  useEffect(() => {
    // Scroll to the bottom when messages change
    // messagesContainerRef.current.scrollTop =
    //   messagesContainerRef.current.scrollHeight;
    messagesContainerRef.current.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div
      // ref={messagesContainerRef}
      className="w-full flex flex-col relative overflow-x-auto overflow-y-auto mt-16 hide-scroll h-full pb-20 z-0"
    >
      <div
        ref={messagesContainerRef}
        className="flex flex-col p-3 relative overflow-y-auto hide-scroll mt-1 z-0 gap-5 h-full"
      >
        {messages.map((message, index) => {
          const logged = message.senderId === userId;
          return (
            <div
              className={`flex flex-col gap-[-2px] w-[auto] h-auto p-3 relative ${
                logged ? "reciever bg-blue-600 self-end" : "sender"
              } max-w-[200px]`}
              key={index}
            >
              <p className="text-white font-poppins">{message.text}</p>
            </div>
          );
        })}
        {isTyping && <TypingEffect />}
      </div>
    </div>
  );
};

export default Messages;
