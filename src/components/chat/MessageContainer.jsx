import React, { useEffect, useState } from "react";
import ChatHeader from "./ChatHeader";
import { ChatSender } from "../../lib";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { BsArrowLeftShort } from "react-icons/bs";
import Messages from "./Messages";
import { sendMsg } from "../../helper/post";
import io from "socket.io-client";

const socket = io("http://localhost:3001");

const MessageContainer = ({ setChats }) => {
  const chats = useSelector((state) => state.CHATS.chat);
  const userId = useSelector((state) => state.AUTH.id);
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  // const [isTyping, setIsTyping] = useState(false);
  const [otherUserTyping, setOtherUserTyping] = useState(false);

  useEffect(() => {
    if (message) {
      socket.emit("typing");
      // Listen for other users typing
      socket.on("otherUserTyping", () => {
        setOtherUserTyping(true);

        // Reset typing status after a certain timeout
        const timeout = setTimeout(() => {
          setOtherUserTyping(false);
        }, 2000); // Adjust the timeout as needed

        return () => clearTimeout(timeout);
      });

      return () => {
        socket.off("otherUserTyping");
      };
    }
  }, [message]);

  const chatId = chats._id;
  const senderId = userId;

  async function sendmsg() {
    await sendMsg(chatId, senderId, message);
    socket.emit("typing");
    setTimeout(() => {
      setMessage("");
    }, 1000);
  }

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      sendmsg();
    }
  };

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
        <div
          className={`flex flex-col relative w-full h-full overflow-x-hidden`}
        >
          <ChatHeader
            chats={chats}
            setChats={setChats}
            message={message}
            typing={otherUserTyping}
          />
          <Messages message={message} isTyping={otherUserTyping} />
          <ChatSender
            message={message}
            setMessage={setMessage}
            handleKeyDown={handleKeyDown}
          />
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
