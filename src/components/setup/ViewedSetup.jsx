import React, { useEffect, useState } from "react";
import TopHeader from "../Layout/TopHeader";
import { Empty, ScaleInLoader } from "../../lib";
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
  // const [empty, setEmpy] = useState(false);

  useEffect(() => {
    const getViewd = async () => {
      setLoading(true);
      const data = await getViewdSetup(setupId, user.id);
      setData(data);
      setLoading(false);
    };
    getViewd();
  }, [setupId, user.id]);

  // useEffect(() => {
  //   if (!data) {
  //     setLoading(false);
  //     setEmpy(true);
  //   }
  // }, [setupId]);

  return (
    <div
      className={`flex flex-col relative w-full ${
        empty ? "" : "overflow-x-hidden"
      }  ${
        loading
          ? ""
          : "border-l border-l-neutral-800 border-r border-r-neutral-800"
      } h-full `}
    >
      <TopHeader label="Idea" />
      {empty ? (
        <Empty text="Idea was not found, might have been deleted" />
      ) : loading ? (
        <ScaleInLoader size={110} className="mt-[25%] max-[800px]:mt-[80%]" />
      ) : (
        <div className="mt-[4rem]">
          <SetupItem item={data && data} />
          <Comments item={data && data} />
          <SetupComments item={data && data} />
        </div>
      )}
    </div>
  );
};

export default ViewedSetup;
