import React, { useState } from "react";
import { BsEmojiFrown } from "react-icons/bs";
import { TbPhotoPlus } from "react-icons/tb";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";

const MessageBox = ({ message, setMessage }) => {
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  function addEmoji(emoji) {
    setMessage((prevMessage) => prevMessage + emoji.native);
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
      <div className="max-[700px]:flex max-[700px]:w-full justify-between pr-[17px] w-[700px] flex pl-[15px] items-center border-t border-t-neutral-800 bottom-0 bg-black p-[10px]">
        <div className="flex gap-[10px] items-center w-full">
          <BsEmojiFrown
            size={25}
            // onMouseEnter={() => setShowEmojiPicker(true)}
            // onMouseLeave={() => setShowEmojiPicker(false)}
            className={`${
              showEmojiPicker ? "text-blue-600" : "text-neutral-600"
            } cursor-pointer hover:text-blue-600`}
            onClick={() => setShowEmojiPicker(!showEmojiPicker)}
          />
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type message"
            className="bg-transparent p-1 outline-none border-none text-white w-full"
          />
        </div>
        <TbPhotoPlus
          size={25}
          className="text-neutral-600 cursor-pointer hover:text-blue-600"
        />
      </div>
    </div>
  );
};

export default MessageBox;
