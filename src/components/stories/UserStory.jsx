import React from "react";
import { useSelector } from "react-redux";
import { Placeholder } from "../../assets";
import { IoMdAdd } from "react-icons/io";
import { StoryWidget } from "../../styles/components/fixedStyles";

const UserStory = () => {
  const user = useSelector((state) => state.AUTH);
  const seen = false;
  const noStory = true;
  return (
    <>
      <img
        src={user.profile?.url || Placeholder}
        alt="Story"
        className={`w-[80px] h-[80px] rounded-full cursor-pointer hover:opacity-75`}
      />
      {noStory && (
        <IoMdAdd
          size={25}
          color="#fff"
          className="absolute bottom-[25%] p-1 bg-blue-600 cursor-pointer border border-black hover:opacity-75 rounded-full left-[76px]"
        />
      )}
      {/* <p className="text-white font-roboto text-[15px]">My Story</p> */}
    </>
  );
};

export default UserStory;
