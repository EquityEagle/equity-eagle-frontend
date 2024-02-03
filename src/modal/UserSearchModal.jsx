import React from "react";
import { useUserSearchModal } from "../hooks";
import { BackDrop } from "../lib";
import { BsArrowLeftShort } from "react-icons/bs";
import { Flex } from "../styles/components/styled";
// import { useNavigate } from "react-router-dom";

const UserSearchModal = () => {
  const usersearch = useUserSearchModal();
  const open = usersearch.isOpen;
  // const navigate = useNavigate();

  function close() {
    usersearch.onClose();
  }

  const body = (
    <div
      className="hidden max-[700px]:flex flex-col bg-black w-full h-full fixed z-[150]"
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
          className="outline-none border-none w-full p-2 rounded-2xl pl-4 text-white placeholder:text-white font-poppins bg-slate-800"
        />
      </Flex>
    </div>
  );
  return <div>{open && <BackDrop chaild={body} onlyM />}</div>;
};

export default UserSearchModal;
