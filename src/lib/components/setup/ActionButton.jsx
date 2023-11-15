import React, { useEffect, useState } from "react";
import { FlexBetween, FlexEven } from "../../../styles/Global";
import { AiFillHeart, AiOutlineFundView, AiOutlineHeart } from "react-icons/ai";
import { BiSolidCommentDetail } from "react-icons/bi";
import { RiShoppingBag3Fill, RiShoppingBag3Line } from "react-icons/ri";
import IconWrap from "./IconWrap";
import { formatNumberWithK } from "../../functions";
import { useSelector } from "react-redux";
import { BagSetup, LikeSetup, StarSetup } from "../../../helper/post";
import { getSetupActions } from "../../../helper/fetch";
import { FaRegStar, FaStar } from "react-icons/fa";
import { FiShare, FiShoppingBag } from "react-icons/fi";
import { useLocation, useNavigate } from "react-router-dom";

const ActionButton = ({ setup }) => {
  const navigate = useNavigate();
  const path = useLocation();
  const [actiondata, setActiondata] = useState([]);
  const userId = useSelector((state) => state.AUTH.id);
  const setupId = setup?._id;
  const Liked = actiondata.likes;
  const liked = Liked?.includes(userId);
  const stared = actiondata.star?.includes(userId);

  useEffect(() => {
    const fetchLikes = async () => {
      const ldata = await getSetupActions(setupId);
      setActiondata(ldata);
    };
    fetchLikes();
  }, [actiondata]);

  const likes = actiondata.likes?.length || 0;
  const comments = actiondata.comments?.length || 0;
  const views = actiondata.views?.length || 0;
  const stars = actiondata.star?.length || 0;
  const formattedLikes = formatNumberWithK(likes);
  const formattedcomment = formatNumberWithK(comments);
  const formattedviews = formatNumberWithK(views);
  const formattedStar = formatNumberWithK(stars);

  async function likeSetup() {
    await LikeSetup(setupId, userId);
  }

  function goToSetup() {
    if (path.pathname === `/ideas/statusId/${setupId}`) {
      return null;
    } else {
      navigate(`/ideas/statusId/${setupId}`);
    }
  }

  async function starsetup() {
    await StarSetup(setupId, userId);
  }

  async function bagsetup() {
    await BagSetup(setupId, userId);
  }

  return (
    <FlexEven className="p-[12px] max-[700px]:p-[9px]">
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
        onClick={likeSetup}
        title="Like"
      />
      <IconWrap
        icon={
          stared ? (
            <FaStar className="text-yellow-400 cursor-pointer" size={25} />
          ) : (
            <FaRegStar className="text-yellow-400 cursor-pointer" size={25} />
          )
        }
        color="text-yellow-400"
        text={formattedStar}
        onClick={starsetup}
        title="Star"
      />
      <IconWrap
        icon={<FiShare className="text-white cursor-pointer" size={25} />}
        color="text-white"
        // onClick={bagsetup}
        title="Share"
      />
      <IconWrap
        icon={
          <AiOutlineFundView className="text-white cursor-pointer" size={25} />
        }
        color="text-white"
        text={formattedviews}
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
        onClick={goToSetup}
        title="Comments"
      />
    </FlexEven>
  );
};

export default ActionButton;
