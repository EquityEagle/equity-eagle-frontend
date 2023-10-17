import React, { useState } from "react";
import { BottomDivider, Button } from "../../lib";
import { FlexBetween } from "../../styles/Global";
import { Placeholder } from "../../assets";
import { useDispatch, useSelector } from "react-redux";

const Comments = ({ item }) => {
  const auth = useSelector((state) => state.AUTH);
  const dispatch = useDispatch();
  const [data, setData] = useState({
    setupId: item._id,
    userId: auth.id,
    desc: "",
  });
  return (
    <div className="flex flex-col gap-1 relative">
      <BottomDivider />
      <FlexBetween className="p-2">
        <img
          src={Placeholder}
          alt="User Image"
          className="w-[50px] h-[50px] rounded-full"
        />
        <input
          type="text"
          value={data.desc}
          placeholder="Leave a comment"
          className="bg-transparent p-2 text-white font-roboto outline-none w-[70%]"
        />
        <Button secondary text="Reply" width="100px" />
      </FlexBetween>
      <BottomDivider />
    </div>
  );
};

export default Comments;
