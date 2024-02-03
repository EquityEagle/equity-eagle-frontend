import React, { useEffect } from "react";
// import { chatsdata } from "../../constants/chats";
import ChatItem from "./ChatItem";
import { BottomDivider, Error, MobileHeader, ScaleInLoader } from "../../lib";
import { useDispatch, useSelector } from "react-redux";
import { fetchChats } from "../../redux/chats";

const ChatContainer = ({ setChats, chat }) => {
  const chats = useSelector((state) => state.CHATS);
  const userId = useSelector((state) => state.AUTH.id);
  const hasChat = chats.chat.length !== 0;
  const dispatch = useDispatch();
  const isLoading = chats.FETCH_STATUS === "Pending";
  const empty =
    chats.FETCH_STATUS === "Success" && chats.chatsdata?.length === 0;
  const chatsdata = chats?.chatsdata;

  const error = chats.FETCH_STATUS === "Rejected";

  useEffect(() => {
    dispatch(fetchChats(userId));
  }, [dispatch, userId]);

  return (
    <div
      className={`flex flex-col relative w-[300px] h-full max-[700px]:w-full max-[1024px]:w-[120px] ${
        hasChat ? "max-[700px]:hidden" : "max-[700px]:flex"
      }`}
    >
      <MobileHeader navBack label="Chats" hasSearchBar />
      <div className="flex flex-col w-[250px] max-[1024px]:w-[120px] max-[700px]:mt-7 fixed h-full p-3 max-[700px]:-translate-x-0 -translate-x-3 bg-black border-r border-neutral-800 max-[700px]:w-full">
        {isLoading ? (
          ""
        ) : (
          <h1 className="text-white max-[700px]:hidden font-kanit font-medium text-[20px] items-center text-center">
            Chats
          </h1>
        )}
        {isLoading ? "" : <BottomDivider className="mb-2 mt-2" />}
        <div className="flex flex-col gap-3 overflow-y-auto h-full w-full">
          {error ? (
            <Error text="Cannot retrieve chats Please try again" />
          ) : isLoading ? (
            <ScaleInLoader className="translate-y-32" />
          ) : empty ? (
            <p className="text-white text-[18px]">Empty</p>
          ) : (
            chatsdata.map((chat, index) => (
              <ChatItem chat={chat} key={index} setChats={setChats} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatContainer;
