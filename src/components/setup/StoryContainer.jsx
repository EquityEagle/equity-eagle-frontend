import React from "react";
import {
  StoryWidget,
  StoryXContainer,
} from "../../styles/components/fixedStyles";
import UserStory from "../stories/UserStory";
import { Placeholder } from "../../assets";

const StoryContainer = () => {
  return (
    <StoryXContainer className="hide-scroll">
      <UserStory />
      <UserStory />
      <UserStory />
      <UserStory />
      <UserStory />
      <UserStory />
      <UserStory />
      <UserStory />
      <UserStory />
      <UserStory />
      <UserStory />
      <UserStory />
      <UserStory />
      <UserStory />
      <UserStory />
      <UserStory />
      <UserStory />
      <UserStory />

      {/* <img
          src={Placeholder}
          alt="User"
          className="w-[70px] h-[70px] rounded-full"
        /> */}
    </StoryXContainer>
  );
};

export default StoryContainer;
