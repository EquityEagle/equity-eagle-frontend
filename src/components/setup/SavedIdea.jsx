import React from "react";
import { Empty, MobileHeader, PageHeader } from "../../lib";
import { useSelector } from "react-redux";
import SetupItem from "./SetupItem";

const SavedIdea = () => {
  const savedIdeas = useSelector((state) => state.SAVED.Saved);
  const empty = savedIdeas?.length === 0;

  return (
    <div className="flex flex-col relative w-full h-full hide-scroll border-l border-l-neutral-800 border-r border-r-neutral-800">
      <MobileHeader label="Saved" navBack />
      <PageHeader label="Saved" navBack />
      <div className="flex flex-col gap-3">
        {empty ? (
          <Empty text="You don't have any saved idea" />
        ) : (
          savedIdeas &&
          savedIdeas.map((idea, index) => <SetupItem item={idea} key={index} />)
        )}
      </div>
    </div>
  );
};

export default SavedIdea;
