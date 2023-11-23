import React from "react";
import { StyledCommunityHeader } from "../../styles/components/styled";
import { communitydata } from "../../constants/community";
import { Placeholder } from "../../assets";
import CommunityItem from "./CommunityItem";
import { useMobileModal } from "../../hooks";
import { FlexBetween } from "../../styles/Global";

const CommunityFeed = () => {
  const mobilemodal = useMobileModal();
  return (
    <div className="flex flex-col relative w-full">
      <StyledCommunityHeader className="max-[700px]:fixed z-[100]">
        <div className="max-[700px]:flex hidden justify-between gap-[10px] w-full">
          <img
            src={Placeholder}
            alt="User profile"
            onClick={mobilemodal.onOpen}
            className="w-[40px] h-[40px] rounded-full hidden max-[700px]:block"
          />
          <input
            type="text"
            placeholder="Search"
            className="bg-slate-800 outline-none pl-2 text-white font-poppins text-[14px] border-none p-1 rounded-[9px] w-full"
          />
        </div>
        <input
          type="text"
          placeholder="Search"
          className="bg-slate-800 max-[700px]:hidden outline-none pl-2 text-white font-poppins text-[14px] border-none p-1 rounded-[9px] w-full"
        />
      </StyledCommunityHeader>
      <div className="flex flex-col gap-[1px] relative mt-[1rem] max-[700px]:mt-[4.5rem] max-[700px]:pb-[2rem] max-[350px]:pb-[3rem]">
        {communitydata.map((item, index) => (
          <CommunityItem item={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default CommunityFeed;
