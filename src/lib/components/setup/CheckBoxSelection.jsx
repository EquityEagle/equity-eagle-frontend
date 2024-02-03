import React, { useEffect, useState } from "react";
import { setupconfirmationdata } from "../../../constants/setup";
import { Checkbox } from "@mui/joy";

const CheckBoxSelection = ({ data, setData }) => {
  const [checkedItems, setCheckedItems] = useState([]);
  const [selected, setSelected] = useState(false);
  const [selectedItem, setSelectedItem] = useState("");
  console.log("Items:", selectedItem);

  useEffect(() => {
    setData({ ...data, confluence: checkedItems });
  }, [selectedItem, checkedItems, setData, data]);

  // const handleCheckboxChange = (value) => {
  //   setCheckedItems({
  //     ...checkedItems,
  //     [value]: !checkedItems[value],
  //   });
  // };

  const handleCheckboxChange = (value) => {
    // Use spread operator to create a new array with the updated value
    setCheckedItems((prevCheckedItems) => {
      const newCheckedItems = [...prevCheckedItems];
      const index = newCheckedItems.indexOf(value);
      if (index !== -1) {
        newCheckedItems.splice(index, 1);
      } else {
        newCheckedItems.push(value);
      }
      return newCheckedItems;
    });
  };

  return (
    <div className="flex flex-col gap-2 cursor-pointer">
      <p
        onClick={() => setSelected(!selected)}
        className="text-white font-roboto cursor-pointer p-1 w-auto rounded-[4px] bg-slate-800"
      >
        Trade Confluence
      </p>
      {selected && (
        <>
          {setupconfirmationdata.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => {
                handleCheckboxChange(item.value);
                setSelectedItem(item.value);
              }}
            >
              <Checkbox size="sm" checked={checkedItems.includes(item.value)} />
              <p className="text-white font-roboto">{item.value}</p>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default CheckBoxSelection;
