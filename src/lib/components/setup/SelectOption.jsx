import React from "react";
import Select, { selectClasses } from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";

const SelectOptionIII = ({ data, placeholder, setValue }) => {
  return (
    <Select
      className="max-[700px]:w-full"
      placeholder={placeholder}
      indicator={<KeyboardArrowDown />}
      sx={{
        width: 240,
        [`& .${selectClasses.indicator}`]: {
          transition: "0.2s",
          [`&.${selectClasses.expanded}`]: {
            transform: "rotate(-180deg)",
          },
        },
      }}
    >
      {data.map((item) => (
        <Option
          className="max-[700px]:w-full"
          value={item.value}
          onClick={() => {
            setValue(item.value);
            console.log(item.value);
          }}
        >
          {item.value}
        </Option>
      ))}
    </Select>
  );
};

export default SelectOptionIII;
