import React, { useState } from "react";
import { StyledSetupItem } from "../../styles/components/styled";
import { BackDrop, BottomDivider, CommentActionButton } from "../../lib";
import { FlexBetween } from "../../styles/Global";
import { Placeholder } from "../../assets";
import TruncatedText from "../../lib/components/TruncatedText";
import { TestText } from "../../constants";

const SetupCommentsList = ({ comment }) => {
  const [max, setMax] = useState(80);
  const [less, setLess] = useState(false);
  const [openViewImg, setOpenViewImg] = useState(false);
  const [clickedImg, setClickedImg] = useState("");

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

  function viewImg() {
    setClickedImg(comment?.image?.url);
    setOpenViewImg(!openViewImg);
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
      <FlexBetween>
        <div className="flex gap-2 items-center cursor-pointer p-[1rem] max-[700px]:p-[10px]">
          <img
            src={comment.profile?.url || Placeholder}
            alt="placeholder"
            className="w-10 rounded-full max-[700px]:ml-2"
          />
          <p className="text-white font-roboto">{comment.username}</p>
        </div>
      </FlexBetween>
      <div className="flex flex-col relative gap-3 h-full p-[12px] max-[700px]:p-[10px]">
        <TruncatedText
          text={comment.desc}
          className="text-neutral-200 font-[300] cursor-pointer flex text-sm font-poppins"
          maxLength={max}
          underText={less ? h : s}
        />
        {comment.image && (
          <img
            src={comment.image?.url}
            alt="Image"
            className="w-full h-[400px] rounded-[9px] cursor-pointer max-[700px]:h-[300px]"
            onClick={viewImg}
          />
        )}
      </div>
      <div className="flex flex-col">
        <CommentActionButton comment={comment} />
      </div>
      {openViewImg && (
        <BackDrop
          className="cursor-pointer"
          onClick={() => setOpenViewImg(false)}
          chaild={
            <img
              src={clickedImg}
              className="w-[70%] max-[700px]:w-full max-[700px]:h-[50%] z-[200] relative cursor-pointer"
              //   onClick={() => setOpenViewImg(false)}
            />
          }
        />
      )}
    </StyledSetupItem>
  );
};

export default SetupCommentsList;