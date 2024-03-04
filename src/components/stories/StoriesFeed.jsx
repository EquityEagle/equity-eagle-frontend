import React from "react";
import UserStory from "./UserStory";
import StroryContainer from "./StroryContainer";

const StoriesFeed = () => {
  return (
    <div className="flex relative w-full items-center gap-2 overflow-x-auto /hide-scroll">
      <UserStory />
      <StroryContainer />
    </div>
  );
};

export default StoriesFeed;
