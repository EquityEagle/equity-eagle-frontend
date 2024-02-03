import React, { useState } from "react";
import { useUserSearchModal } from "../hooks";
import { BackDrop } from "../lib";
import { BsArrowLeftShort } from "react-icons/bs";
import { Flex } from "../styles/components/styled";
import { useSelector } from "react-redux";
import { Placeholder } from "../assets";
import { SearchedUser } from "../components";
// import { useNavigate } from "react-router-dom";

const UserSearchModal = () => {
  const usersearch = useUserSearchModal();
  const open = usersearch.isOpen;
  const users = useSelector((state) => state.USERS.TRADES);
  const userId = useSelector((state) => state.AUTH.id);
  // const navigate = useNavigate();

  function close() {
    usersearch.onClose();
  }

  const [value, setValue] = useState("");

  const body = (
    <div
      className="hidden max-[700px]:flex flex-col bg-black w-full h-full fixed z-[150] select-none"
      onClick={(e) => e.stopPropagation()}
    >
      <Flex className="gap-3 border-b border-b-neutral-700 p-2">
        <BsArrowLeftShort
          size={35}
          color="#fff"
          className="cursor-pointer"
          onClick={close}
        />
        <input
          type="text"
          placeholder="Search"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="outline-none border-none w-full p-2 rounded-2xl pl-4 text-white placeholder:text-white font-poppins bg-slate-800"
        />
      </Flex>
      <div className="flex flex-col gap-2">
        {users
          ?.filter((user) => {
            const nologged = user._id !== userId;
            const searchTerm = value.toLowerCase();
            const name = user.name.toLowerCase();

            return (
              searchTerm &&
              name.includes(searchTerm) &&
              name !== searchTerm &&
              nologged
            );
          })
          .map((user, index) => (
            <SearchedUser user={user} key={index} />
          ))}
      </div>
    </div>
  );
  return <div>{open && <BackDrop chaild={body} onlyM />}</div>;
};

export default UserSearchModal;
