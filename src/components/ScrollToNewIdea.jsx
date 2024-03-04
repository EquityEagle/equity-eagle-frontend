import React from "react";
import { LuArrowUp } from "react-icons/lu";

const ScrollToNewIdea = ({ clickEvent, ideaUser }) => {
  function scrollToTop() {
    // Scroll to the top of the page
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  function scroll() {
    scrollToTop();
    clickEvent();
  }

  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className="fixed h-full/ justify-center items-center top right-0 left-0 w-full z-[100] flex"
    >
      <div
        onClick={scroll}
        className="flex cursor-pointer bg-blue-600 items-center hover:opacity-75 top-3 fixed p-[11px] rounded-[8px] h-[30px] w-auto"
      >
        <LuArrowUp color="white" size={19} className="" />
        <p className="font-roboto text-white text-[14px]">New Idea</p>
      </div>
    </div>
  );
};

export default ScrollToNewIdea;
