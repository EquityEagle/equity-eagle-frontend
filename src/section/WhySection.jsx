import React from "react";
import { StyledWhySection } from "../styles/section/styled";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { whydata } from "../constants";

const WhySection = () => {
  return (
    <StyledWhySection id="why">
      <h1 className="text-[40px] text-center w-[450px] max-[800px]:w-full max-[700px]:text-[25px] max-[700px]:w-full font-semibold relative z-[90] font-kanit text-white">
        Why use Equity Eagle?
      </h1>
      <div className="flex flex-col gap-[2rem] mt-[2rem] /w-[1000px]">
        {whydata.map((item, index) => (
          <div className="flex gap-[1rem]">
            <IoIosCheckmarkCircle size={25} className="text-blue-500" />
            <h2 className="text-white font-kanit font-[605] max-[700px]:text-[14px]">
              {item.sub}
            </h2>
            <p className="text-white font-kanit max-[700px]:text-[13px]">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </StyledWhySection>
  );
};

export default WhySection;
