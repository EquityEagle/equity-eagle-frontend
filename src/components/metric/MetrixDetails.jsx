import React, { useEffect, useState } from "react";
import { LineChart } from "../../lib";
import { getAccountsProfitData } from "../../helper/fetch";

const MetrixDetails = ({ metrix }) => {
  const metrixId = metrix._id;
  const [profitdata, setProfitData] = useState([]);

  useEffect(() => {
    const gettrades = async () => {
      const data = await getAccountsProfitData(metrixId);
      setProfitData(data);
    };
    if (metrix._id) {
      gettrades();
    } else return;
  }, []);

  return (
    <div className="flex">{profitdata && <LineChart data={profitdata} />}</div>
  );
};

export default MetrixDetails;
