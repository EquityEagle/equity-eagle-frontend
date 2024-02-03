import React, { useState } from "react";
import { BsEmojiFrown } from "react-icons/bs";
import { TbPhotoPlus } from "react-icons/tb";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import { AiFillAudio } from "react-icons/ai";

const ChatSender = ({ message, setMessage, handleKeyDown }) => {
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  // const [message, setMessage] = useState("");

  function addEmoji(emoji) {
    setMessage((prevMessage) => prevMessage + emoji.native);
    setShowEmojiPicker(false);
  }

  return (
    <div className="fixed flex flex-col w-full bottom-0">
      {showEmojiPicker && (
        <Picker
          data={data}
          onEmojiSelect={addEmoji}
          style={{
            position: "relative",
          }}
        />
      )}
      <div className="max-[700px]:flex max-[700px]:w-full justify-between pr-[17px] w-[850px] flex pl-[15px] items-center border-t border-neutral-700 bottom-0 bg-black p-[10px]">
        <div className="flex gap-[10px] items-center w-full">
          <BsEmojiFrown
            size={38}
            color="#fff"
            className={`${
              showEmojiPicker && "bg-neutral-800"
            } cursor-pointer hover:text-blue-600 hover:bg-neutral-800 p-2 rounded-[9px] w-[55px]`}
            onClick={() => setShowEmojiPicker(!showEmojiPicker)}
          />
          <TbPhotoPlus
            size={38}
            color="#fff"
            className="cursor-pointer hover:text-blue-600 hover:bg-neutral-800 p-2 rounded-[9px] w-[55px]"
          />
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type message"
            onKeyDown={handleKeyDown}
            className="bg-transparent p-1 outline-none border-none text-white w-full"
          />
          <AiFillAudio
            size={38}
            color="#fff"
            className="cursor-pointer hover:text-blue-600 hover:bg-neutral-800 p-2 rounded-[9px] w-[55px]"
          />
        </div>
      </div>
    </div>
  );
};

export default ChatSender;
