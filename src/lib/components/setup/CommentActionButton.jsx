import React, { useEffect, useState } from "react";
import { FlexBetween } from "../../../styles/Global";
import IconWrap from "./IconWrap";
import { formatNumberWithK } from "../../functions";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
// import { FaStar } from "react-icons/fa";
import { getSetupCommentLikes } from "../../../helper/fetch";
import { LikeSetupcomments } from "../../../helper/post";
import { useSelector } from "react-redux";

const CommentActionButton = ({ comment }) => {
  const commentId = comment._id;
  const userId = useSelector((state) => state.AUTH.id);
  const [Likes, setLikes] = useState([]);
  useEffect(() => {
    const getlikes = async () => {
      const data = await getSetupCommentLikes(commentId);
      setLikes(data);
    };
    getlikes();
  }, [Likes, commentId]);

  async function likeSetupComments() {
    await LikeSetupcomments(commentId, userId);
  }

  const likes = Likes?.length;
  const formattedLikes = formatNumberWithK(likes);
  const liked = Likes.includes(userId);
  // const stared = true;

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
        bg="hover:bg-red-900 max-[800px]:hover:bg-transparent"
        title="Likes"
        onClick={likeSetupComments}
      />
      {/* <IconWrap
        icon={
          stared ? (
            <FaStar className="text-yellow-400 cursor-pointer" size={25} />
          ) : (
            <AiOutlineHeart
              className="text-yellow-400 cursor-pointer"
              size={25}
            />
          )
        }
        color="text-yellow-400"
        text={formattedLikes}
        bg="hover:bg-yellow-700 max-[800px]:hover:bg-transparent"
        title="Star"
        // onClick={}
      /> */}
    </FlexBetween>
  );
};

export default CommentActionButton;
