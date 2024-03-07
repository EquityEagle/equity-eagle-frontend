import React from "react";
import { useSelector } from "react-redux";
import { Placeholder } from "../../assets";
import { LuSettings2 } from "react-icons/lu";
import { useMobileModal, usePairFilterModal } from "../../hooks";
import StoryContainer from "./StoryContainer";

const HomeHeader = () => {
  const user = useSelector((state) => state.AUTH);
  const mobilemodal = useMobileModal();
  const pairmodal = usePairFilterModal();
  return (
    <div className="w-full h-auto relative border-b border-b-neutral-800 flex flex-col">
      <div className="flex items-center justify-between bg-black border-b border-b-neutral-800 p-3">
        <img
          src={user.profile?.url || Placeholder}
          onClick={mobilemodal.onOpen}
          alt="User"
          className="w-[40px] h-[40px] rounded-full hidden max-[700px]:block -translate-y-1"
        />
        <LuSettings2
          onClick={pairmodal.onOpen}
          size={25}
          className="cursor-pointer"
          color="white"
        />
      </div>
      <div className="flex flex-col gap-4 relative p-4 mt-2 overflow-x-auto w-full h-full">
        <div className="flex justify-between items-center">
          <h1 className="text-white font-kanit text-[20px]">Stories</h1>
        </div>
        <StoryContainer />
      </div>
    </div>
  );
};

export default HomeHeader;
