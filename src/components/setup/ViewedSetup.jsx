import React, { useEffect } from "react";
import TopHeader from "../Layout/TopHeader";
import { ScaleInLoader } from "../../lib";
import { useDispatch, useSelector } from "react-redux";
import SetupItem from "./SetupItem";
import { useParams } from "react-router-dom";
import { viewSetup } from "../../redux/setup";
import Comments from "../input/Comments";

const ViewedSetup = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.SETUPS);
  const loading = data.VIEWD_STATUS === "loading";
  const empty = data.VIEWD_IDEA.length === 0;
  const { setupId } = useParams();

  useEffect(() => {
    dispatch(viewSetup(setupId));
  }, [setupId]);

  return (
    <div
      className={`flex flex-col relative w-full overflow-x-hidden ${
        loading
          ? ""
          : "border-l border-l-neutral-700 border-r border-r-neutral-700"
      } h-full `}
    >
      <TopHeader label="Setup" />
      {loading ? (
        <ScaleInLoader size={110} className="mt-[25%] max-[800px]:mt-[80%]" />
      ) : empty ? (
        <div className="flex flex-col items-center w-full mt-[3rem] justify-center">
          <p className="text-neutral-400 font-kanit">No setup avaliable</p>
        </div>
      ) : (
        <div className="mt-[4rem]">
          <SetupItem item={data.VIEWD_IDEA} />
          <Comments item={data.VIEWD_IDEA} />
        </div>
      )}
    </div>
  );
};

export default ViewedSetup;
