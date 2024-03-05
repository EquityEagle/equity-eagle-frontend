import React, { useEffect, useState } from "react";
import { AiOutlineUserAdd } from "react-icons/ai";
import { MdDelete, MdEditSquare } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { getUserById } from "../helper/fetch";
import { FiTrash } from "react-icons/fi";
import { BsBookmark, BsBookmarkCheckFill } from "react-icons/bs";
import { saveIdea } from "../redux/saved";

const IdeaMenuModal = ({ item }) => {
  const userId = useSelector((state) => state.AUTH.id);
  const ideaState = useSelector((state) => state.SAVED.Saved);
  const itemUserId = item.userId;
  const name = item?.username;
  const truncatedName =
    name && name.length > 4 ? name.slice(0, 4) + "..." : name;
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
  const savedidea = ideaState.find((idea) => idea._id === item._id);
  const dispatch = useDispatch();

  const connectText = (
    <>
      <p className="font-roboto font-[400]">
        {hasFollowed ? "You're now network" : `Connect with ${truncatedName}`}
      </p>
      <AiOutlineUserAdd size={25} />
    </>
  );

  const savedText = (
    <>
      <p className="font-roboto font-[400]">
        {savedidea ? "Remove from save" : `Save`}
      </p>
      {savedidea ? <BsBookmarkCheckFill size={22} /> : <BsBookmark size={22} />}
    </>
  );

  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className="w-[300px] max-[700px]:h-[260px] h-[245px] max-[700px]:rounded-b-none max-[700px]:p-5 max-[700px]:pt-6 max-[700px]:rounded-tl-[16px] max-[700px]:rounded-tr-[16px] max-[700px]:fixed max-[700px]:bottom-0 max-[700px]:w-full max-[700px]:right-0 max-[700px]:left-0 p-4 absolute right-5 gap-3 flex flex-col z-[200] bg-neutral-800 rounded-[9px] shadow-slate-700 shadow"
    >
      <div className="flex items-center justify-between text-white p-3 cursor-pointer rounded-[13px] bg-neutral-700">
        <p className="font-roboto font-[400]">Edit</p>
        <MdEditSquare size={25} />
      </div>
      <div className="flex flex-col gap-2 text-white p-3 cursor-pointer rounded-[13px] bg-neutral-700">
        <div className="flex justify-between items-center">{connectText}</div>
        <div className="w-full h-[1px] bg-neutral-600" />
        <div
          onClick={() => dispatch(saveIdea(item))}
          className="flex justify-between items-center"
        >
          {savedText}
        </div>
      </div>
      <div className="flex items-center justify-between text-red-600 p-3 cursor-pointer rounded-[13px] bg-neutral-700">
        <p className="font-roboto font-[400]">Delete</p>
        <FiTrash size={25} />
      </div>
    </div>
  );
};

export default IdeaMenuModal;
