import React from "react";
import { StyledWhySection } from "../styles/section/styled";
import { whydata } from "../constants";
import { BottomDivider } from "../lib";
// import { SiLivejournal } from "react-icons/si";
import { BsJournals } from "react-icons/bs";

const WhySection = () => {
  return (
    <StyledWhySection id="journaling">
      <div className="flex flex-col gap-[-4px] items-center relative">
        <BsJournals size={20} className="text-blue-600" />
        {/* <SiLivejournal size={20} className="text-blue-600" /> */}
        <h1 className="text-[40px] text-center w-[450px] max-[800px]:w-full max-[700px]:text-[25px] max-[700px]:w-full font-semibold relative z-[90] font-kanit text-white">
          Journaling
        </h1>
      </div>
      <div className="flex flex-col gap-[1rem] mt-[2rem] w-[600px] max-[700px]:w-[95%] max-[800px]:w-[90%]">
        {whydata.map((item, index) => (
          <>
            <div className="flex gap-[6px] items-center" key={index}>
              {item.icon}
              <h2 className="text-white font-kanit font-[605] max-[700px]:text-[14px]">
                {item.sub}
              </h2>
            </div>
            <p className="text-white font-kanit max-[700px]:text-[13px]">
              {item.text}
            </p>
            <BottomDivider />
          </>
        ))}
      </div>
    </StyledWhySection>
  );
};

export default WhySection;
