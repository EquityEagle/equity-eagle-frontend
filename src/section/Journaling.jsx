import React from "react";
import { StyledJournalSection } from "../styles/section/styled";
import { journaldata } from "../constants";
import { Button } from "../lib";
import { BsArrowRightShort } from "react-icons/bs";
import { Record } from "../assets";

const Journaling = () => {
  return (
    <StyledJournalSection id="journaling">
      <div className="flex flex-col w-[80%] relative p-[1rem] max-[800px]:w-full max-[700px]:p-[9px]">
        <h1 className="text-[40px] w-[450px] max-[800px]:w-full max-[700px]:text-[25px] max-[700px]:w-full font-semibold relative z-[90] font-kanit text-white">
          Journaling
        </h1>
        <p className="text-white text-[19px] font-normal font-kanit max-[700px]:text-[15px] select-none">
          Revolutionize Your Trading Experience: With Equity Eagle's
          user-friendly journaling feature, traders can effortlessly log and
          analyze their trades, saving precious time and boosting productivity.
          Say goodbye to tedious manual record-keeping and welcome a smarter,
          more efficient way to optimize your trades!
        </p>
        <img
          src={Record}
          className="w-[500px] self-center flex -mt-[7rem] max-[800px]:-mt-[5rem]"
          alt=""
        />
        <p className="text-white text-[19px] font-normal font-kanit max-[700px]:text-[15px] select-none">
          {journaldata.secondText}
        </p>
      </div>
    </StyledJournalSection>
  );
};

export default Journaling;
