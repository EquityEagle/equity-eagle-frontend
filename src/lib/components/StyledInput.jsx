import React, { useState } from "react";
import { Flex } from "../../styles/components/styled";
import { FaCircleInfo } from "react-icons/fa6";
import CustomTitle from "./CustomTitle";

const StyledInput = ({
  label,
  value,
  onChange,
  onClick,
  isLoading,
  type,
  error,
  hasInfo,
  title,
  width,
  titleClass,
}) => {
  const [hoverInfo, setHoverInfo] = useState(false);
  return (
    <div className="flex-col flex gap-[6px] items-start w-full relative">
      <Flex className="gap-2">
        <h2 className="text-white font-kanit">{label}</h2>
        {hasInfo && (
          <div className="flex-col flex relative">
            <FaCircleInfo
              size={15}
              className="cursor-pointer"
              color="#fff"
              onMouseEnter={() => setHoverInfo(true)}
              onMouseLeave={() => setHoverInfo(false)}
              onClick={(e) => e.stopPropagation()}
            />
            {hoverInfo && (
              <CustomTitle title={title} width={width} className={titleClass} />
            )}
          </div>
        )}
      </Flex>
      <input
        type={type}
        value={value}
        onClick={onClick}
        onChange={onChange}
        disabled={isLoading}
        className={`bg-slate-800 w-full outline-none ${
          error
            ? "caret-red-600 focus:border-red-600"
            : "caret-blue-600 focus:border-blue-600"
        } text-white ${
          error ? "border-red-600" : ""
        } focus:border rounded-[8px] p-2`}
      />
    </div>
  );
};

export default StyledInput;
