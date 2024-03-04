import React, { useEffect, useState } from "react";
import { StoryLoader } from "./src/lib";

const test = ({ story }) => {
  const [num, setNum] = useState(0);

  function totalLength() {
    const length = story.story.length;
    setNum(length);
  }

  useEffect(() => {
    totalLength();
  }, [story]);

  return (
    <div>
      <StoryLoader loaded />
    </div>
  );
};

export default test;
