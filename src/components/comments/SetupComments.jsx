import React, { useEffect, useState } from "react";
import SetupCommentsList from "./SetupCommentsList";
import { getSetupComments } from "../../helper/fetch";

const SetupComments = ({ item }) => {
  const [comment, setComment] = useState([]);
  // const empty = comment.length === 0;

  useEffect(() => {
    const getcomments = async () => {
      const data = await getSetupComments(item._id);
      setComment(data);
    };
    getcomments();
  }, [comment, item._id]);

  return (
    <div className="flex flex-col w-full relative max-[700px]:pb-[5rem]">
      {comment.map((item, index) => (
        <SetupCommentsList comment={item} key={index} />
      ))}
    </div>
  );
};

export default SetupComments;
