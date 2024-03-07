import React from "react";
import { useViewStory } from "../../hooks";
import { useDispatch } from "react-redux";
import { viewStory } from "../../redux/story";

const StoryItem = ({ story }) => {
  const storymodal = useViewStory();
  const dispatch = useDispatch();
  const seen = story.seen;

  function View() {
    storymodal.onOpen();
    dispatch(viewStory(story));
  }

  return (
    <>
      <img
        src={story.img}
        onClick={View}
        alt="Story"
        className={`w-[80px] h-[80px] rounded-full`}
        // className={`w-[80px] hover:opacity-75 h-[80px] ${
        //   story.seen ? "" : "border-[2px] border-blue-600"
        // } rounded-[9px] cursor-pointer p-[2px] max-[700px]:w-[60px] max-[700px]:h-[60px]`}
      />
      {/* <p className="text-white font-poppins">{story.username}</p> */}
    </>
  );
};

export default StoryItem;
