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
  }, [metrixId, metrix._id]);

  return (
    <div className="flex flex-col w-full overflow-x-auto border-[6px] /border-blue-600 relative">
      {profitdata && <LineChart data={profitdata} />}
    </div>
  );
};

export default MetrixDetails;
