import React from "react";
import { Flex } from "../../styles/components/styled";
import { CiShare1 } from "react-icons/ci";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDeleteModelMetrix } from "../../hooks";

const MetrixHeader = () => {
  const metrixmodel = useDeleteModelMetrix();
  return (
    <div className="flex items-center gap-5 p-2 relative mt-5">
      <Flex className="gap-2 cursor-pointer hover:bg-neutral-800 p-2 rounded-[8px]">
        <CiShare1 size={25} color="#fff" />
        <p className="text-white font-poppins font-[400] text-[14px]">Share</p>
      </Flex>
      <Flex
        onClick={metrixmodel.onOpen}
        className="gap-2 cursor-pointer hover:bg-neutral-800 p-2 rounded-[8px]"
      >
        <RiDeleteBin6Line size={25} color="#fff" />
        <p className="text-red-600 font-poppins font-medium text-[14px]">
          Delete account
        </p>
      </Flex>
    </div>
  );
};

export default MetrixHeader;
