import React, { useEffect, useState } from "react";
import { FlexBetween } from "../../../styles/Global";
import { AiFillHeart, AiOutlineFundView, AiOutlineHeart } from "react-icons/ai";
import { BiSolidCommentDetail } from "react-icons/bi";
import { RiShoppingBag3Fill, RiShoppingBag3Line } from "react-icons/ri";
import IconWrap from "./IconWrap";
import { formatNumberWithK } from "../../functions";
import { useSelector } from "react-redux";
import { LikeSetup } from "../../../helper/post";
import { getSetupActions } from "../../../helper/fetch";

const ActionButton = ({ setup }) => {
  const [actiondata, setActiondata] = useState([]);
  const userId = useSelector((state) => state.AUTH.id);
  const setupId = setup._id;
  const Liked = actiondata.likes;
  const liked = Liked?.includes(userId);
  // const liked = true;
  console.log("actiondata:", actiondata);

  useEffect(() => {
    const fetchLikes = async () => {
      const ldata = await getSetupActions(setupId);
      setActiondata(ldata);
    };
    fetchLikes();
  }, [actiondata]);

  const likes = actiondata.likes?.length;
  const comments = actiondata.comments?.length;
  const formattedLikes = formatNumberWithK(likes);
  const formattedcomment = formatNumberWithK(comments);

  async function likeSetup() {
    await LikeSetup(setupId, userId);
  }

  return (
    <FlexBetween className="p-[12px] max-[700px]:p-[9px]">
      <IconWrap
        icon={
          liked ? (
            <AiFillHeart className="text-red-600 cursor-pointer" size={25} />
          ) : (
            <AiOutlineHeart className="text-red-600 cursor-pointer" size={25} />
          )
        }
        color="text-red-500"
        text={formattedLikes}
        bg="hover:bg-red-300 max-[800px]:hover:bg-transparent"
        title="Likes"
        onClick={likeSetup}
      />
      <IconWrap
        icon={
          <RiShoppingBag3Fill className="text-white cursor-pointer" size={25} />
        }
        color="text-white"
        text="126"
        bg="hover:bg-neutral-600 max-[800px]:hover:bg-transparent"
        title="Bagged"
      />
      <IconWrap
        icon={
          <AiOutlineFundView className="text-white cursor-pointer" size={25} />
        }
        color="text-white"
        text="1.17k"
        bg="hover:bg-neutral-600 max-[800px]:hover:bg-transparent"
        title="Views"
      />
      <IconWrap
        icon={
          <BiSolidCommentDetail
            className="text-blue-600 cursor-pointer"
            size={25}
          />
        }
        color="text-blue-500"
        text={formattedcomment}
        bg="hover:bg-blue-200 hover:text-blue-600 max-[800px]:hover:bg-transparent"
        title="Comments"
      />
    </FlexBetween>
  );
};

export default ActionButton;
