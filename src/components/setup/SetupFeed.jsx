import React, { useEffect, useState } from "react";
import { BackDrop, Empty, Error, ScaleInLoader } from "../../lib";
import { useDispatch, useSelector } from "react-redux";
import { getSetups, updateIdeaState } from "../../redux/setup";
import SetupItem from "./SetupItem";
import HomeHeader from "./HomeHeader";
import ScrollToNewIdea from "../ScrollToNewIdea";
import { getIdeas } from "../../helper/fetch";

const SetupFeed = () => {
  const dispatch = useDispatch();

  const data = useSelector((state) => state.SETUPS);
  const loading = data.FETCH_STATUS === "loading";
  const empty = data.IDEAS.length === 0;
  const delState = useSelector((state) => state.SETUPS);
  const isLoading = delState.DELETE_STATUS === "Pending";
  const [ideas, setIdeas] = useState([]);
  const [ideaState, setIdeaState] = useState(data.IDEAS);
  const error = data.FETCH_STATUS === "failed";
  const [newArr, setNewArr] = useState(false);

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

  useEffect(() => {
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
      className={`flex flex-col relative w-full h-full hide-scroll /overflow-x-hidden max-[700px]:pb-[4rem] ${
        loading
          ? ""
          : "border-l border-l-neutral-800 border-r border-r-neutral-800"
      } h-full mt-[1rem] max-[700px]:mt-0 `}
    >
      <HomeHeader />
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
        ideaState &&
        ideaState.map((item, index) => <SetupItem key={index} item={item} />)
      )}
      {isLoading && <BackDrop chaild={<ScaleInLoader />} className="z-[200]" />}
    </div>
  );
};

export default SetupFeed;
