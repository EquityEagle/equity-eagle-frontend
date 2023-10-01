import React from "react";
import { StyledLast } from "../styles/section/styled";
import { MarkPNG } from "../assets";
import { Button } from "../lib";
import { BsArrowRightShort } from "react-icons/bs";

const LastSection = () => {
  const bt = (
    <div className="flex gap-[5px] items-center">
      <p>Sign Up for Free</p>
      <BsArrowRightShort size={20} />
    </div>
  );
  return (
    <StyledLast>
      <p className="text-white font-poppins flex gap-[6px] text-[25px] max-[800px]:text-[19px] max-[800px]:gap-[1px] max-[700px]:text-[13px]">
        The greatest Trading author and coach
        <p className="font-kanit underline">
          Mark Douglas, author of Trading in the Zone once said:
        </p>
      </p>
      <div className="flex mt-[1rem] gap-[3rem] max-[800px]:flex-col w-full justify-center items-center mb-[2rem] max-[700px]:mb-[3rem]">
        <h2 className="text-white font-kanit w-[500px] max-[700px]:text-[25px] text-[40px] max-[700px]:w-[330px] font-bold">
          “I am a consistent trader because I objectively define my Edge.”
        </h2>
        <img
          src={MarkPNG}
          className="w-[200px] h-[200px] rounded-full max-[700px]:w-[150px] max-[700px]:h-[150px]"
          alt=""
        />
      </div>
      <Button secondary text={bt} padding="10px" />
    </StyledLast>
  );
};

export default LastSection;
