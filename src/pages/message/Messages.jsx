import React, { useEffect, useState } from "react";
import { ChatBoxConatiner, SideNav } from "../../components";
import { StyledMessg } from "../../styles/pages/styled";

const Messages = () => {
  const [chats, setChats] = useState([]);

  useEffect(() => {
    document.title = "Message | EquityEagle";
  });

  return (
    <StyledMessg>
      <SideNav />
      <ChatBoxConatiner chats={chats} setChats={setChats} />
    </StyledMessg>
  );
};

export default Messages;
