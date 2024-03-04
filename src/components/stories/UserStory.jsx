import React from "react";
import { useSelector } from "react-redux";
import { Placeholder } from "../../assets";
import { IoMdAdd } from "react-icons/io";

const UserStory = () => {
  const user = useSelector((state) => state.AUTH);
  const seen = false;
  const noStory = false;
  return (
    <div className="flex flex-col relative items-center ">
      <img
        src={user.profile?.url || Placeholder}
        alt="Story"
        className={`w-[80px] ${
          seen ? "" : "border-[2px] border-blue-600"
        } h-[80px] rounded-[9px] cursor-pointer p-[2px] hover:opacity-75 max-[700px]:w-[70px] max-[700px]:h-[70px]`}
      />
      {noStory && (
        <IoMdAdd
          size={25}
          color="#fff"
          className="absolute bottom-[25%] p-1 bg-blue-600 cursor-pointer border border-white hover:opacity-75 rounded-full -right-2"
        />
      )}
      {/* <p className="text-white font-roboto text-[15px]">My Story</p> */}
    </div>
  );
};

export default UserStory;
