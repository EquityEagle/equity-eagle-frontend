import React from "react";
import { BackDrop, BottomDivider } from "../../lib";
import { Flex } from "../../styles/components/styled";
import { FlexBetween } from "../../styles/Global";
import { IoClose } from "react-icons/io5";
import { TbHomeEdit } from "react-icons/tb";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const CommunitySetting = ({ open, KeepOpen }) => {
  const body = (
    <div
      onClick={(e) => e.stopPropagation()}
      className="flex flex-col bg-black shadow shadow-white w-[400px] h-auto rounded-[9px] max-[700px]:w-full max-[700px]:top-0 max-[700px]:rounded-none max-[700px]:fixed max-[700px]:h-full"
    >
      <FlexBetween className="p-[16px]">
        <h1 className="text-white font-kanit text-[20px]">Settings</h1>
        <IoClose size={25} color="#fff" className="cursor-pointer" />
      </FlexBetween>
      <BottomDivider />
      <div className="flex flex-col p-3">
        <FlexBetween className="hover:bg-neutral-700 cursor-pointer p-2 rounded-[9px]">
          <Flex className="gap-2 items-center">
            <TbHomeEdit size={25} color="#fff" />
            <p className="text-white font-poppins">Edit Community</p>
          </Flex>
          <MdOutlineKeyboardArrowRight size={25} color="#fff" />
        </FlexBetween>
        <BottomDivider className="mt-1" />
      </div>
    </div>
  );
  return (
    <div>
      {open && <BackDrop onClick={() => KeepOpen(false)} chaild={body} />}
    </div>
  );
};

export default CommunitySetting;
