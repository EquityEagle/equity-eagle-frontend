import React from "react";
import {
  StoryWidget,
  StoryXContainer,
} from "../../styles/components/fixedStyles";
import UserStory from "../stories/UserStory";
import { Placeholder } from "../../assets";
import StroryContainerUsers from "../stories/StroryContainer";

const StoryContainer = () => {
  return (
    <StoryXContainer className="hide-scroll">
      <UserStory />
      <StroryContainerUsers />
    </StoryXContainer>
  );
};

export default StoryContainer;
