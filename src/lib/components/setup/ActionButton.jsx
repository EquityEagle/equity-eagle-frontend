import React, { useEffect, useState } from "react";
import { FlexEven } from "../../../styles/Global";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { BiSolidCommentDetail } from "react-icons/bi";
import IconWrap from "./IconWrap";
import { copyToClipboardFallback, formatNumberWithK } from "../../functions";
import { useDispatch, useSelector } from "react-redux";
import { LikeSetup, StarSetup } from "../../../helper/post";
import { getSetupActions } from "../../../helper/fetch";
import { FaRegStar, FaStar } from "react-icons/fa";
import { FiShare2 } from "react-icons/fi";
import { useLocation, useNavigate } from "react-router-dom";
import { MdInsertChartOutlined } from "react-icons/md";
import { LiaComment } from "react-icons/lia";
import { BsBookmark, BsBookmarkCheckFill } from "react-icons/bs";
import { saveIdea } from "../../../redux/saved";

const ActionButton = ({ setup }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const path = useLocation();
  const [actiondata, setActiondata] = useState([]);
  const userId = useSelector((state) => state.AUTH.id);
  const setupId = setup?._id;
  const [likes, setLikes] = useState(actiondata?.likes?.length || 0);
  const [comments, setComments] = useState(actiondata?.comments?.length || 0);
  const [views, setViews] = useState(actiondata?.views?.length || 0);
  const [stars, setStars] = useState(actiondata?.star?.length || 0);
  const stared =
    actiondata?.star?.includes(userId) || setup.star?.includes(userId);

  const liked =
    actiondata?.likes?.includes(userId) || setup?.likes?.includes(userId);

  const ideaState = useSelector((state) => state.SAVED.Saved);
  const savedidea = ideaState.find((idea) => idea._id === setup._id);

  // Get idea action info througth redux state
  const Ilikes = setup?.likes?.length;
  const IComments = setup?.comments?.length;
  const IStars = setup?.star?.length;
  const IViews = setup?.views?.length;

  useEffect(() => {
    const fetchLikes = async () => {
      const ldata = await getSetupActions(setupId);
      setActiondata(ldata);
    };
    fetchLikes();
  }, [actiondata, setupId]);

  useEffect(() => {
    if (!actiondata || actiondata?.length === 0) {
      setLikes(Ilikes);
      setComments(IComments);
      setViews(IViews);
      setStars(IStars);
    } else {
      setLikes(actiondata?.likes?.length);
      setComments(actiondata?.comments?.length);
      setViews(actiondata?.views?.length);
      setStars(actiondata?.star?.length);
    }
  }, [actiondata]);

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

  function share() {
    const ideaPage = `/statusId/${setup._id}`;
    const url = window.location.href + ideaPage;
    copyToClipboardFallback(url);
    console.log("url:", url);
  }

  return (
    <FlexEven
      className="p-[12px] max-[700px]:p-[9px]"
      onClick={(e) => e.stopPropagation()}
    >
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
        icon={<LiaComment className="text-blue-600 cursor-pointer" size={25} />}
        color="text-blue-500"
        text={formattedcomment}
        onClick={goToSetup}
        title="Comments"
      />
      <IconWrap
        icon={
          <MdInsertChartOutlined
            className="text-white cursor-pointer"
            size={25}
          />
        }
        color="text-white"
        text={formattedviews}
        title="Views"
      />
      <IconWrap
        icon={
          savedidea ? (
            <BsBookmarkCheckFill
              className="text-blue-600 cursor-pointer"
              size={22}
            />
          ) : (
            <BsBookmark className="text-blue-600 cursor-pointer" size={22} />
          )
        }
        color="text-white"
        onClick={() => dispatch(saveIdea(setup))}
        title="Save"
      />
      <IconWrap
        icon={<FiShare2 className="text-white cursor-pointer" size={22} />}
        color="text-white"
        onClick={share}
        title="Share"
      />
    </FlexEven>
  );
};

export default ActionButton;
