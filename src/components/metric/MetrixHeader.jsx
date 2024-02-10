import React, { useState } from "react";
import { Flex } from "../../styles/components/styled";
import { CiShare1 } from "react-icons/ci";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDeleteModelMetrix } from "../../hooks";
import { LuRefreshCw } from "react-icons/lu";
import { BsArrowLeftShort } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const MetrixHeader = () => {
  const metrixmodel = useDeleteModelMetrix();
  const [ref, setRef] = useState(false);
  const navigate = useNavigate();

  function handleRef() {
    setRef(true);
    setTimeout(() => {
      setRef(false);
    }, 3000);
  }
  return (
    <div className="flex items-center gap-5 p-2 relative mt-5">
      <Flex className="gap-2 cursor-pointer hover:bg-neutral-800 p-2 rounded-[8px]">
        <BsArrowLeftShort
          size={30}
          color="#fff"
          className="cursor-pointer"
          onClick={(e) => {
            e.stopPropagation();
            navigate(-1);
          }}
        />
      </Flex>
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
      <Flex
        onClick={handleRef}
        className="gap-2 cursor-pointer hover:bg-neutral-800 p-2 rounded-[8px]"
      >
        <LuRefreshCw size={25} color="#fff" className={ref ? "ref" : ""} />
        <p className="text-white font-poppins font-medium text-[14px]">
          Refresh
        </p>
      </Flex>
    </div>
  );
};

export default MetrixHeader;
