import React from "react";
import { SelectWithDropDown } from "../../lib";
import { SelectOptionII } from "../../lib/components/SelectOption";

const SectionOne = ({ data, setData, type }) => {
  return (
    <div className="flex-col flex gap-[1rem] items-start w-full">
      <SelectWithDropDown data={data} setData={setData} text="Pair" />
      <SelectOptionII
        placeholder="Trade Type"
        data={type}
        setTypeClick={setData}
        stateData={data}
      />
      <div className="flex-col flex gap-[6px] items-start w-full">
        <h2 className="text-white font-kanit">Lots size</h2>
        <input
          type="number"
          value={data.lotSize}
          onChange={(e) => setData({ ...data, lotSize: e.target.value })}
          className="bg-slate-800 w-full outline-none caret-blue-600 text-white focus:border-blue-600 focus:border rounded-[8px] p-2"
        />
      </div>
      <div className="flex-col flex gap-[6px] items-start w-full">
        <h2 className="text-white font-kanit">Reason for trade</h2>
        <input
          type="text"
          value={data.why}
          onChange={(e) => setData({ ...data, why: e.target.value })}
          className="bg-slate-800 w-full outline-none caret-blue-600 text-white focus:border-blue-600 focus:border rounded-[8px] p-2"
        />
      </div>
    </div>
  );
};

export default SectionOne;
