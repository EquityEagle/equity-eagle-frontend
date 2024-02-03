import React from "react";
import {
  Flex,
  MobileCommunityHeader,
  StyledCommunityHeader,
} from "../../styles/components/styled";
import { communitydata } from "../../constants/community";
import { Placeholder } from "../../assets";
import CommunityItem from "./CommunityItem";
import { useCommunitySearch, useMobileModal } from "../../hooks";
// import { FlexBetween } from "../../styles/Global";
import { IoSearch } from "react-icons/io5";
import { BsArrowLeftShort } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const CommunityFeed = () => {
  const mobilemodal = useMobileModal();
  const navigate = useNavigate();
  const user = useSelector((state) => state.AUTH);
  const communityModal = useCommunitySearch();

  return (
    <div className="flex flex-col relative w-full">
      <StyledCommunityHeader className="z-[100]">
        <MobileCommunityHeader>
          <Flex className="gap-3">
            <BsArrowLeftShort
              size={35}
              color="#fff"
              className="cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                navigate(-1);
              }}
            />
            <img
              src={user.profile?.url || Placeholder}
              alt="User profile"
              onClick={mobilemodal.onOpen}
              className="w-[40px] h-[40px] rounded-full"
            />
          </Flex>
          <IoSearch
            color="#fff"
            size={30}
            onClick={() => communityModal.onOpen()}
            className="cursor-pointer fixed right-3 z-[100]"
          />
        </MobileCommunityHeader>
        <div className="flex flex-col relative w-full">
          <div className="flex max-[700px]:hidden p-1 bg-slate-600 rounded-[9px] w-full w z-[100] items-center">
            <IoSearch color="#fff" size={25} className="cursor-pointer" />
            <input
              type="text"
              className="bg-transparent font-kanit w-full p-1 text-white outline-none border-none"
              placeholder="Search"
            />
          </div>
        </div>
      </StyledCommunityHeader>
      <div className="flex flex-col gap-[1px] mt-[72px] relative max-[700px]:mt-[4.5rem] max-[700px]:pb-[2rem] max-[350px]:pb-[3rem]">
        {communitydata.map((item, index) => (
          <CommunityItem item={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default CommunityFeed;
