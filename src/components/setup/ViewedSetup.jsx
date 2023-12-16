import React, { useEffect, useState } from "react";
import TopHeader from "../Layout/TopHeader";
import { ScaleInLoader } from "../../lib";
import { useSelector } from "react-redux";
import SetupItem from "./SetupItem";
import { useParams } from "react-router-dom";
import Comments from "../input/Comments";
import SetupComments from "../comments/SetupComments";
import { getViewdSetup } from "../../helper/fetch";

const ViewedSetup = () => {
  const { setupId } = useParams();
  const user = useSelector((state) => state.AUTH);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const empty = data.length === 0;

  useEffect(() => {
    const getViewd = async () => {
      setLoading(true);
      const data = await getViewdSetup(setupId, user.id);
      setData(data);
      setLoading(false);
    };
    getViewd();
  }, [setupId, user.id]);

  return (
    <div
      className={`flex flex-col relative w-full overflow-x-hidden ${
        loading
          ? ""
          : "border-l border-l-neutral-700 border-r border-r-neutral-700"
      } h-full `}
    >
      <TopHeader label="Idea" />
      {loading ? (
        <ScaleInLoader size={110} className="mt-[25%] max-[800px]:mt-[80%]" />
      ) : empty ? (
        <div className="flex flex-col items-center w-full mt-[3rem] justify-center">
          <p className="text-neutral-400 font-kanit">No setup avaliable</p>
        </div>
      ) : (
        <div className="mt-[4rem]">
          <SetupItem item={data} />
          <Comments item={data} />
          <SetupComments item={data} />
        </div>
      )}
    </div>
  );
};

export default ViewedSetup;
