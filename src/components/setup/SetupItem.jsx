import React, { useState } from "react";
import { StyledSetupItem } from "../../styles/components/styled";
import { Placeholder } from "../../assets";
import { ActionButton, BackDrop, BottomDivider, CustomTitle } from "../../lib";
import { FlexBetween } from "../../styles/Global";
import { HiDotsHorizontal } from "react-icons/hi";
import TruncatedText from "../../lib/components/TruncatedText";
import { TestText } from "../../constants";
import { useLocation, useNavigate } from "react-router-dom";
import SetupMenuModal from "../../modal/SetupMenuModal";

const SetupItem = ({ item }) => {
  const setupId = item?._id;
  const navigate = useNavigate();
  const [max, setMax] = useState(80);
  const [less, setLess] = useState(false);
  const [open, setOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const path = useLocation();

  function show(event) {
    event.stopPropagation();
    setMax(1000);
    setLess(true);
  }
  function hide(event) {
    event.stopPropagation();
    setMax(70);
    setLess(false);
  }

  const [openViewImg, setOpenViewImg] = useState(false);
  const [clickedImg, setClickedImg] = useState("");

  function viewImg() {
    setClickedImg(item?.image?.url);
    setOpenViewImg(!openViewImg);
  }

  function goToSetup() {
    if (path.pathname === `/ideas/statusId/${setupId}`) {
      return null;
    } else {
      navigate(`/ideas/statusId/${setupId}`);
    }
  }

  const s = (
    <p className="text-white hover:underline ml-5 w-[auto]" onClick={show}>
      See more
    </p>
  );
  const h = (
    <p className="text-white hover:underline ml-5 w-[auto]" onClick={hide}>
      See less
    </p>
  );

  return (
    <StyledSetupItem>
      <BottomDivider />
      <FlexBetween className="p-[10px] max-[700px]:p-0 max-[700px]:mt-3">
        <div
          className="flex gap-2 items-center cursor-pointer"
          onClick={() => navigate(`/account/${item.username}`)}
        >
          <img
            src={item.profile?.url || Placeholder}
            alt="placeholder"
            className="w-10 rounded-full max-[700px]:ml-2"
          />
          <p className="text-white font-roboto">{item?.username}</p>
        </div>
        <div className="flex flex-col relative">
          <HiDotsHorizontal
            size={30}
            color="#fff"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => setOpen(!open)}
            className="p-1 rounded-full hover:bg-slate-700 cursor-pointer max-[700px]:mr-2"
          />
          {isHovered && <CustomTitle title="More" className="/top-[35px]" />}
          {open && <SetupMenuModal item={item} />}
        </div>
      </FlexBetween>
      <div className="flex flex-col relative gap-3 h-full p-[12px] max-[700px]:p-[10px]">
        <TruncatedText
          text={item?.desc}
          className="text-neutral-200 font-[300] cursor-pointer flex text-sm font-poppins"
          maxLength={max}
          underText={less ? h : s}
          onClick={goToSetup}
        />
        <img
          src={item?.image?.url}
          alt="Image"
          className="w-full h-[400px] rounded-[9px] cursor-pointer max-[700px]:h-[300px]"
          onClick={viewImg}
        />
      </div>
      <div className="flex flex-col">
        <ActionButton setup={item} />
      </div>
      {openViewImg && (
        <BackDrop
          className="cursor-pointer"
          onClick={() => setOpenViewImg(false)}
          chaild={
            <img
              src={clickedImg}
              className="w-[70%] max-[700px]:w-full max-[700px]:h-[50%] z-[200] relative cursor-pointer"
            />
          }
        />
      )}
    </StyledSetupItem>
  );
};

export default SetupItem;
