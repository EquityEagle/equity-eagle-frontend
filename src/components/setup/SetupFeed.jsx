import React, { useEffect } from "react";
import { BackDrop, Error, ScaleInLoader } from "../../lib";
import { useDispatch, useSelector } from "react-redux";
import { getSetups } from "../../redux/setup";
import SetupItem from "./SetupItem";

const SetupFeed = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSetups());
  }, [dispatch]);
  const data = useSelector((state) => state.SETUPS);
  const loading = data.FETCH_STATUS === "loading";
  const empty = data.IDEAS.length === 0;
  const delState = useSelector((state) => state.SETUPS);
  const isLoading = delState.DELETE_STATUS === "Pending";
  return (
    <div
      className={`flex flex-col relative w-full h-full hide-scroll overflow-x-hidden max-[700px]:pb-[4rem] ${
        loading
          ? ""
          : "border-l border-l-neutral-700 border-r border-r-neutral-700"
      } h-full mt-[1rem] `}
    >
      {loading ? (
        <ScaleInLoader size={110} className="mt-[25%] max-[800px]:mt-[80%]" />
      ) : empty ? (
        <div className="flex flex-col items-center relative mt-[30%] max-[800px]:mt-[55%] h-full w-full justify-center">
          <Error
            // networks
            text="Cannot retieve ideas at this time. Please try again later"
            btnText="Retry"
            onClick={() => dispatch(getSetups())}
          />
        </div>
      ) : (
        data.IDEAS.map((item, index) => <SetupItem key={index} item={item} />)
      )}
      {isLoading && <BackDrop chaild={<ScaleInLoader />} className="z-[200]" />}
    </div>
  );
};

export default SetupFeed;
