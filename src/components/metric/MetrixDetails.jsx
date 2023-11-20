import React, { useEffect, useState } from "react";
import { LineChart } from "../../lib";

const MetrixDetails = ({ metrix }) => {
  const [data, setData] = useState();

  useEffect(() => {
    if (metrix) {
      setData(metrix);
    }
  }, [metrix]);
  return (
    <div className="flex">
      {/* {data &&<LineChart data={data.profitdata} />} */}
    </div>
  );
};

export default MetrixDetails;
