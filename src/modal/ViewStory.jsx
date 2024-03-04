import React, { useEffect, useState } from "react";
import { useViewStory } from "../hooks";
import { BackDrop, StoryLoader } from "../lib";
import { useSelector } from "react-redux";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

const ViewStory = () => {
  const storymodal = useViewStory();
  const open = storymodal.isOpen;
  const [num, setNum] = useState(0);
  const story = useSelector((state) => state.Story.story);
  const [currentStory, setCurrentStory] = useState([]);
  const [stories, setStories] = useState([]);
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);
  const [currentId, setCurrentId] = useState("");

  // console.log("cIndex", currentStoryIndex);

  useEffect(() => {
    setStories(story.story);
  }, [story]);

  useEffect(() => {
    if (stories) {
      // Find the index of the first story that meets a condition (e.g., index === 0)
      const firstIndex = stories.findIndex((sty, index) => index === 0);

      // If the index is found
      if (firstIndex !== -1) {
        // Set the current story and its ID
        setCurrentStory(stories[firstIndex]);
        setCurrentStoryIndex(0);
        // setCurrentId(stories[firstIndex].id);
      }
    }
  }, [stories]); // Run the effect whenever the 'stories' state changes

  function nextStory() {
    if (stories && stories.length > 0) {
      // Find the index of the current story
      const currentIndex = stories.findIndex(
        (_, index) => index === currentStoryIndex
      );

      // If the current story index is found
      if (currentIndex !== -1) {
        // Calculate the index of the next story
        const nextIndex = currentIndex + 1;

        // Check if the next story index is within bounds
        if (nextIndex < stories.length) {
          // Set the current story index to the next index
          setCurrentStoryIndex(nextIndex);
          setCurrentStory(stories[nextIndex]);

          // Log the index of the next story
          // console.log("Next story index:", nextIndex);
        } else {
          // Handle case when there is no next story
          // console.log("No next story available");
        }
      }
    } else {
      // Handle case when there are no stories
      // console.log("No stories available");
    }
  }

  function prevStory() {
    if (stories && stories.length > 0) {
      // Find the index of the current story
      const currentIndex = stories.findIndex(
        (_, index) => index === currentStoryIndex
      );

      // If the current story index is found
      if (currentIndex !== -1) {
        // Calculate the index of the previous story
        const prevIndex = currentIndex - 1;

        // Check if the previous story index is within bounds
        if (prevIndex >= 0) {
          // Set the current story index to the previous index
          setCurrentStoryIndex(prevIndex);
          setCurrentStory(stories[prevIndex]);

          // Log the index of the previous story
          // console.log("Previous story index:", prevIndex);
        } else {
          // Handle case when there is no previous story
          // console.log("No previous story available");
        }
      }
    } else {
      // Handle case when there are no stories
      // console.log("No stories available");
    }
  }

  // console.log("stories", stories);
  // console.log("currentSty", currentStory);

  function totalLength() {
    const length = story?.story?.length;
    setNum(length);
  }

  useEffect(() => {
    totalLength();
  }, [story]);

  function close() {
    storymodal.onClose();
  }

  function Loader() {
    if (num !== 0) {
      return stories?.map((sty, index) => {
        return <StoryLoader loaded={index === currentStoryIndex} />;
      });
    }
  }

  const bodyContent = (
    <div
      onClick={(e) => e.stopPropagation()}
      className={`fixed h-full w-[500px] max-[700px]:w-full shadow shadow-slate-700 bg-black`}
    >
      <div className="flex items-center gap-2 p-2">
        <Loader />
      </div>
      <div className="flex items-center gap-3 p-3">
        <FiArrowLeft
          className="hidden max-[700px]:block"
          color="white"
          size={25}
          onClick={storymodal.onClose}
        />
        <img
          src={story.img}
          alt="Story"
          className="w-[50px] h-[50px] rounded-full"
        />
        <div className="flex flex-col">
          <p className="text-white font-poppins text-[18px] font-[500]">
            {story.username}
          </p>
          <p className="text-neutral-300 font-[500] text-[13px] -translate-y-[1px] font-roboto">
            Today, 1:30 pm
          </p>
        </div>
      </div>
      {story?.story?.map((sty, index) => (
        <div
          key={index}
          className="fex flex-col items-center justify-center h-full"
        >
          {currentStory.img && (
            <img src={currentStory.img} alt="Story" className="w-full" />
          )}
          <div
            className={`flex bg-[rgb(0,0,0,0.5)] p-2 absolute ${
              currentStory.img ? "bottom-[30%]" : "bottom-[50%]"
            } items-center w-full justify-center`}
          >
            <p className="text-white font-poppins text-[19px]">
              {currentStory.text}
            </p>
          </div>
          {story?.story?.length > 1 && (
            <div className="flex items-center absolute w-full p-2 bottom-[50%]">
              <FiArrowLeft
                size={30}
                onClick={prevStory}
                className="cursor-pointer bg-black p-1 rounded-full"
                color="white"
              />
              <FiArrowRight
                size={30}
                onClick={nextStory}
                className="cursor-pointer bg-black p-1 rounded-full absolute right-0"
                color="white"
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );

  return (
    <>{open && <BackDrop open={open} onClick={close} chaild={bodyContent} />}</>
  );
};

export default ViewStory;
