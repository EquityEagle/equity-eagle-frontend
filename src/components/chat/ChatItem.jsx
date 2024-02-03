import React, { useEffect, useState } from "react";
import { Flex } from "../../styles/components/styled";
import { MessageIcon } from "../../lib";
import { useDispatch, useSelector } from "react-redux";
import { chatUser } from "../../redux/chats";
import { getUnreadMessage, getUserById } from "../../helper/fetch";
import { Placeholder } from "../../assets";
import { getChatUser } from "../../lib/functions";

const ChatItem = ({ chat, setChats }) => {
  // const chats = useSelector((state) => state.CHATS.chatsdata);
  const dispatch = useDispatch();
  const userid = useSelector((state) => state.AUTH.id);
  const [userdata, setUserdata] = useState([]);
  const userId = getChatUser(chat, userid);
  const chatId = chat._id;
  const [unread, setUnRead] = useState([]);

  useEffect(() => {
    const getuser = async () => {
      const data = await getUserById(userId);
      setUserdata(data);
    };
    getuser();
  }, [userId]);

  useEffect(() => {
    const getunread = async () => {
      const data = await getUnreadMessage(chatId);
      setUnRead(data);
    };
    getunread();
  });

  return (
    <Flex
      className="gap-2 p-2 cursor-pointer hover:bg-neutral-800 relative rounded-[9px] max-[1024px]:w-[70px] max-[700px]:w-full"
      onClick={() => dispatch(chatUser(chat))}
    >
      <img
        src={userdata.profile?.url || Placeholder}
        alt="User Profile"
        className="w-[40px] h-[40px] rounded-full"
      />
      <p className="text-white font-poppins text-[16px] font-medium max-[1024px]:hidden max-[700px]:block">
        {userdata.username}
      </p>
      <MessageIcon
        value={unread?.length}
        className="max-[1024px]:left-10 max-[700px]:left-[91%]"
      />
    </Flex>
  );
};

export default ChatItem;
