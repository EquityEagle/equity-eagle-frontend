import React, { useEffect, useState } from "react";
import SelectOptionIII from "./SelectOption";
import { outcomedata } from "../../../constants/setup";

const SetupOutcome = ({ data, setData }) => {
  const [value, setValue] = useState("");

  // useEffect(() => {
  //   setData({ ...data, confluence: value });
  // }, [value]);

  const lost = value === "Loss";
  const profit = value === "Profit";

  return (
    <div className="flex flex-col">
      {lost || profit ? (
        ""
      ) : (
        <SelectOptionIII
          data={outcomedata}
          placeholder="Trade outcome"
          setValue={setValue}
        />
      )}
      {lost && (
        <input
          type="text"
          value={data.loss}
          onChange={(e) => setData({ ...data, loss: e.target.value })}
          className="border-red-500 border p-1 font-kanit rounded-[6px] outline-none"
          placeholder="$Amount Lost"
        />
      )}
      {profit && (
        <input
          type="text"
          value={data.profit}
          onChange={(e) => setData({ ...data, profit: e.target.value })}
          className="border-green-500 border p-1 font-kanit rounded-[6px] outline-none"
          placeholder="$Profit"
        />
      )}
    </div>
  );
};

export default SetupOutcome;
