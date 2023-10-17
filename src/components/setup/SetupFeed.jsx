import React, { useEffect } from "react";
import { HashLoader, ScaleLoader } from "react-spinners";
import { ScaleInLoader } from "../../lib";
import { useDispatch, useSelector } from "react-redux";
import { getSetups } from "../../redux/setup";
import SetupItem from "./SetupItem";

const SetupFeed = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSetups());
  }, []);
  const data = useSelector((state) => state.SETUPS);
  const loading = data.FETCH_STATUS === "loading";
  const empty = data.IDEAS.length === 0;
  return (
    <div
      className={`flex flex-col relative w-full overflow-x-hidden max-[700px]:pb-[4rem] ${
        loading
          ? ""
          : "border-l border-l-neutral-700 border-r border-r-neutral-700"
      } h-full mt-[1rem] `}
    >
      {loading ? (
        <ScaleInLoader size={110} className="mt-[25%] max-[800px]:mt-[80%]" />
      ) : empty ? (
        <div className="flex flex-col items-center w-full justify-center">
          <p className="text-neutral-400 font-kanit">No setup avaliable</p>
        </div>
      ) : (
        data.IDEAS.map((item, index) => <SetupItem key={index} item={item} />)
      )}
    </div>
  );
};

export default SetupFeed;
