import React, { useEffect, useState } from "react";
import { AiOutlineUserAdd } from "react-icons/ai";
import { GoReport } from "react-icons/go";
import { useDispatch, useSelector } from "react-redux";
import { getUserById } from "../helper/fetch";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { deleteIdea } from "../redux/setup";

const SetupMenuModal = ({ item }) => {
  const userId = useSelector((state) => state.AUTH.id);
  const delState = useSelector((state) => state.SETUPS);
  const isLoading = delState.DELETE_STATUS === "Pending";
  const name = item?.username;
  const truncatedName =
    name && name.length > 2 ? name.slice(0, 2) + "..." : name;
  const itemUserId = item.userId;
  const dispatch = useDispatch();
  const ideaId = item._id;

  const [user, setUser] = useState([]);
  useEffect(() => {
    const getUser = async () => {
      const data = getUserById(itemUserId);
      setUser(data);
    };
    getUser();
  }, [itemUserId]);

  const hasFollowed = user.networks?.includes(userId);
  const isOwner = item.userId === userId;

  function Delete() {
    dispatch(deleteIdea(ideaId));
  }

  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className="flex flex-col absolute gap-2 bg-black w-[200px] h-auto shadow z-[150] shadow-slate-500 top-[20px] right-[1rem] p-[5px] rounded-[6px]"
    >
      {item.userId === userId ? (
        ""
      ) : (
        <p className="text-white font-roboto flex w-full hover:bg-slate-800 p-2 gap-2 cursor-pointer rounded-[4px]">
          <AiOutlineUserAdd size={25} className="cursor-pointer" color="#fff" />

          <p>
            {hasFollowed
              ? "You're now network"
              : `Connect with ${truncatedName}`}
          </p>
        </p>
      )}
      {isOwner && (
        <p
          onClick={Delete}
          className="text-red-600 font-roboto flex w-full hover:bg-slate-800 p-2 gap-2 cursor-pointer rounded-[4px]"
        >
          <RiDeleteBin2Fill size={25} className="cursor-pointer" />
          <p>Delete</p>
        </p>
      )}
      <p className="text-red-600 font-roboto flex w-full hover:bg-slate-800 p-2 gap-2 cursor-pointer rounded-[4px]">
        <GoReport size={25} className="cursor-pointer" />
        <p>Report</p>
      </p>
    </div>
  );
};

export default SetupMenuModal;
