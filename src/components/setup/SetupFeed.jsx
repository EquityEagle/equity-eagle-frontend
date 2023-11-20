import React, { useEffect } from "react";
import { HashLoader, ScaleLoader } from "react-spinners";
import { Error, ScaleInLoader } from "../../lib";
import { useDispatch, useSelector } from "react-redux";
import { getSetups } from "../../redux/setup";
import SetupItem from "./SetupItem";
import { useSetupModal } from "../../hooks";

const SetupFeed = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSetups());
  }, []);
  const data = useSelector((state) => state.SETUPS);
  const loading = data.FETCH_STATUS === "loading";
  const empty = data.IDEAS.length === 0;
  const setupmodal = useSetupModal();
  return (
    <div
      className={`flex flex-col relative w-full h-full overflow-x-hidden max-[700px]:pb-[4rem] ${
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
            empty
            text="No ideas available. Be the first to share!"
            btnText="Share idea"
            onClick={setupmodal.onOpen}
          />
        </div>
      ) : (
        data.IDEAS.map((item, index) => <SetupItem key={index} item={item} />)
      )}
    </div>
  );
};

export default SetupFeed;
