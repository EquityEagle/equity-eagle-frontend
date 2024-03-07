import React from "react";
import { storiesdata } from "../../constants/stories";
import StoryItem from "./StoryItem";

const StroryContainerUsers = () => {
  return (
    <div className="flex items-center gap-2">
      {storiesdata.map((story, index) => (
        <StoryItem story={story} key={index} />
      ))}
    </div>
  );
};

export default StroryContainerUsers;
