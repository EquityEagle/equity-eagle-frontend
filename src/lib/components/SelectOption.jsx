import React from "react";
import Select, { selectClasses } from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";

const SelectOption = ({ data, placeholder, setValue }) => {
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
          value={item.pair}
          onClick={() => {
            setValue(item.pair);
            console.log(item.pair);
          }}
        >
          {item.pair}
        </Option>
      ))}
    </Select>
  );
};

export default SelectOption;

export const SelectOptionII = ({ data, placeholder, setTypeClick }) => {
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
          value={item.pair}
          onClick={() => {
            setTypeClick(item.pair);
          }}
        >
          {item.pair}
        </Option>
      ))}
    </Select>
  );
};
