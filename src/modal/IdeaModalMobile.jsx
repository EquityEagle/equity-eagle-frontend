import React, { useEffect, useState } from "react";
import { MdEditSquare } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { getUserById } from "../helper/fetch";
import { FiTrash } from "react-icons/fi";
import { BsBookmark, BsBookmarkCheckFill } from "react-icons/bs";
import { saveIdea } from "../redux/saved";
import { FaUserCheck, FaUserPlus } from "react-icons/fa";
import { deleteIdea } from "../redux/setup";
import { BiLoaderAlt } from "react-icons/bi";
import { BackDrop } from "../lib";

const IdeaMenuModalMobile = ({ item, setOpen, open }) => {
  const userId = useSelector((state) => state.AUTH.id);
  const ideaState = useSelector((state) => state.SAVED.Saved);
  const IdeaActionState = useSelector((state) => state.SETUPS.DELETE_STATUS);
  const itemUserId = item.userId;
  const name = item?.username;
  const deleteLoad = IdeaActionState === "Pending";
  const truncatedName =
    name && name.length > 4 ? name.slice(0, 4) + "..." : name;
  const [user, setUser] = useState(null);
  const mobileOnly = window.innerWidth < 800;

  useEffect(() => {
    const getUser = async () => {
      const data = await getUserById(itemUserId);
      setUser(data);
      // console.log("userItem:", data);
    };

    getUser();
  }, []); // Assuming itemUserId is a dependency required to fetch user data

  const hasFollowed = user?.networks?.includes(userId);
  const isOwner = item.userId === userId;
  const savedidea = ideaState.find((idea) => idea._id === item._id);
  const dispatch = useDispatch();
  const ideaId = item._id;

  const connectText = (
    <>
      <p className="font-roboto font-[400]">
        {hasFollowed ? "You're now connected" : `Connect with ${truncatedName}`}
      </p>
      {hasFollowed ? <FaUserCheck size={25} /> : <FaUserPlus size={25} />}
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

  function Delete() {
    dispatch(deleteIdea(ideaId));
  }

  const modal = (
    <div
      onClick={(e) => e.stopPropagation()}
      className="hidden max-[700px]:flex h-[260px]  rounded-b-none p-5 pt-6 rounded-tl-[16px] rounded-tr-[16px] fixed bottom-0 w-full right-0 left-0 gap-3 flex-col z-[200] bg-neutral-800 shadow-slate-700 shadow"
    >
      {isOwner && (
        <div className="flex items-center justify-between text-white p-3 cursor-pointer rounded-[13px] bg-neutral-700 hover:bg-neutral-600">
          <p className="font-roboto font-[400]">Edit</p>
          <MdEditSquare size={25} />
        </div>
      )}
      <div className="flex flex-col gap-2 text-white cursor-pointer rounded-[13px] bg-neutral-700">
        {isOwner ? null : (
          <div className="flex justify-between items-center hover:bg-neutral-600 p-3 hover:rounded-t-[13px]">
            {connectText}
          </div>
        )}
        {isOwner ? null : <div className="w-full h-[1px] bg-neutral-600" />}
        <div
          onClick={() => dispatch(saveIdea(item))}
          className={`flex justify-between items-center hover:bg-neutral-600 p-3 ${
            isOwner ? "hover:rounded-[13px]" : "hover:rounded-b-[13px]"
          }`}
        >
          {savedText}
        </div>
      </div>
      {isOwner && (
        <div
          onClick={Delete}
          className="flex items-center justify-between text-red-600 p-3 cursor-pointer rounded-[13px] bg-neutral-700 hover:bg-neutral-600"
        >
          <p className="font-roboto font-[400]">Delete</p>
          {deleteLoad ? (
            <BiLoaderAlt size={25} className="loader" />
          ) : (
            <FiTrash size={25} />
          )}
        </div>
      )}
    </div>
  );

  return (
    <div>
      {open && mobileOnly && (
        <BackDrop onClick={() => setOpen(false)} chaild={modal} />
      )}
    </div>
  );
};

export default IdeaMenuModalMobile;
