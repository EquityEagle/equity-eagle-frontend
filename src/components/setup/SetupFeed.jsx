import React, { useCallback, useEffect, useState } from "react";
import { BackDrop, Empty, Error, ScaleInLoader } from "../../lib";
import { useDispatch, useSelector } from "react-redux";
import { getSetups, updateIdeaState } from "../../redux/setup";
import SetupItem from "./SetupItem";
import HomeHeader from "./HomeHeader";
import ScrollToNewIdea from "../ScrollToNewIdea";
import { getIdeas } from "../../helper/fetch";
import StoryContainer from "./StoryContainer";

const SetupFeed = () => {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getSetups());
  // }, []);

  const data = useSelector((state) => state.SETUPS);
  const loading = data.FETCH_STATUS === "loading";
  const empty = data.IDEAS.length === 0;
  const [ideas, setIdeas] = useState([]);
  const [ideaState, setIdeaState] = useState(data.IDEAS);
  const error = data.FETCH_STATUS === "failed";
  const [newArr, setNewArr] = useState(false);
  const preference = useSelector((state) => state.SYSTEM.pref);
  const mapPref = preference.map((pair) => pair);
  const filteredSetups = ideaState.filter((item) =>
    mapPref.includes(item.pair)
  );

  const [onState, setOnState] = useState([]);

  useEffect(() => {
    if (preference.length === 0) {
      setOnState(data.IDEAS);
    } else {
      setOnState(filteredSetups);
    }
  }, [preference]);

  useEffect(() => {
    if (ideas && ideas.length > ideaState.length) {
      setNewArr(true);
    } else {
      setNewArr(false);
    }
  }, [ideas]);

  function getNewIdeas() {
    dispatch(updateIdeaState(ideas));
    setTimeout(() => {
      setNewArr(false);
    }, 500);
  }

  useCallback(() => {
    const getideas = async () => {
      const data = await getIdeas();
      setIdeas(data);
      // setNewIdea(true);
    };

    // Fetch new ideas only if there are more ideas than before
    getideas();
  }, [ideas]);

  return (
    <div
      className={`flex flex-col relative w-full h-full hide-scroll max-[700px]:pb-[4rem] ${
        loading
          ? ""
          : "border-l border-l-neutral-800 border-r border-r-neutral-800"
      } h-full mt-[1rem] max-[700px]:mt-0 `}
    >
      <HomeHeader />
      {/* <StoryContainer /> */}
      {newArr && <ScrollToNewIdea clickEvent={getNewIdeas} />}
      {loading ? (
        <ScaleInLoader size={110} className="mt-[25%] max-[800px]:mt-[80%]" />
      ) : empty ? (
        <Empty text="No ideas available be the first to shares" />
      ) : error ? (
        <div className="flex flex-col items-center relative mt-[30%] max-[800px]:mt-[55%] h-full w-full justify-center">
          <Error
            // networks
            text="Cannot retieve ideas at this time. Please try again later"
            btnText="Retry"
            onClick={() => dispatch(getSetups())}
          />
        </div>
      ) : (
        onState &&
        onState.map((item, index) => <SetupItem key={index} item={item} />)
      )}
    </div>
  );
};

export default SetupFeed;
