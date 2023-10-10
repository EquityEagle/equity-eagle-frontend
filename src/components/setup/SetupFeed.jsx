import React, { useEffect } from "react";
import { HashLoader, ScaleLoader } from "react-spinners";
import { ScaleInLoader } from "../../lib";
import { useDispatch, useSelector } from "react-redux";
import { getSetups } from "../../redux/setup";

const SetupFeed = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSetups());
  }, []);
  const data = useSelector((state) => state.SETUPS);
  const loading = data.FETCH_STATUS === "loading";
  const empty = data.IDEAS.length === 0;
  return (
    <div className="flex flex-col relative w-full h-full">
      {loading ? (
        <ScaleInLoader size={110} className="mt-[25%] max-[800px]:mt-[80%]" />
      ) : empty ? (
        <div className="flex flex-col items-center w-full justify-center">
          <p className="text-neutral-400 font-kanit">No setup avaliable</p>
        </div>
      ) : (
        data.IDEAS.map((item, index) => <div>Okk</div>)
      )}
    </div>
  );
};

export default SetupFeed;
