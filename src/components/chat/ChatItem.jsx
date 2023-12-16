import React from "react";
import { Flex } from "../../styles/components/styled";
import { MessageIcon } from "../../lib";
import { useDispatch } from "react-redux";
import { chatUser } from "../../redux/chats";

const ChatItem = ({ user, setChats }) => {
  const dispatch = useDispatch();
  return (
    <Flex
      className="gap-2 p-2 cursor-pointer hover:bg-neutral-800 rounded-[9px] max-[1024px]:w-[70px] max-[700px]:w-full"
      onClick={() => dispatch(chatUser(user))}
    >
      <img
        src={user.img}
        alt="User image"
        className="w-[40px] h-[40px] rounded-full"
      />
      <p className="text-white font-poppins text-[16px] font-medium max-[1024px]:hidden max-[700px]:block">
        {user.username}
      </p>
      <MessageIcon
        value={user.totalMsg}
        className="max-[1024px]:left-10 max-[700px]:right-4"
      />
    </Flex>
  );
};

export default ChatItem;
