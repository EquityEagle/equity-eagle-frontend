import React, { useState } from "react";
import SelectOptionIII from "./SelectOption";
import { outcomedata } from "../../../constants/setup";
import { IoClose } from "react-icons/io5";
import CustomTitle from "../CustomTitle";
import { FlexBetween } from "../../../styles/Global";

const SetupOutcome = ({ data, setData }) => {
  const [value, setValue] = useState("");
  const [isHoverd, setIsHoverd] = useState(false);

  // useEffect(() => {
  //   setData({ ...data, confluence: value });
  // }, [value]);

  const lost = value === "Loss";
  const profit = value === "Profit";

  return (
    <div className="flex flex-col w-full">
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
        <div className="flex flex-col relative gap-[6px]">
          <FlexBetween>
            <h2 className="text-red-600 font-kanit">Amount lost</h2>
            <IoClose
              color="#fff"
              size={20}
              className="cursor-pointer"
              onMouseEnter={() => setIsHoverd(true)}
              onMouseLeave={() => setIsHoverd(false)}
              onClick={() => setValue("")}
            />
          </FlexBetween>
          {isHoverd && <CustomTitle title="Close Input" />}
          <input
            type="number"
            value={data.loss}
            onChange={(e) => setData({ ...data, loss: e.target.value })}
            className="bg-slate-800 w-full outline-none caret-blue-600 text-white focus:border-blue-600 focus:border rounded-[8px] p-2"
            placeholder="$Amount Lost"
          />
        </div>
      )}
      {profit && (
        <div className="flex flex-col relative gap-[6px]">
          <FlexBetween>
            <h2 className="text-green-500 font-kanit">Profit made</h2>
            <IoClose
              color="#fff"
              size={20}
              className="cursor-pointer"
              onMouseEnter={() => setIsHoverd(true)}
              onMouseLeave={() => setIsHoverd(false)}
              onClick={() => setValue("")}
            />
          </FlexBetween>
          {isHoverd && <CustomTitle title="Close Input" />}
          <input
            type="number"
            value={data.profit}
            onChange={(e) => setData({ ...data, profit: e.target.value })}
            className="bg-slate-800 w-full outline-none caret-blue-600 text-white focus:border-blue-600 focus:border rounded-[8px] p-2"
            placeholder="$Profit"
          />
        </div>
      )}
    </div>
  );
};

export default SetupOutcome;
