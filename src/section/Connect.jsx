import React, { useEffect, useState } from "react";
import { StyledConnectsection } from "../styles/section/styled";
import { FaArrowUpRightFromSquare, FaUsersLine } from "react-icons/fa6";
import { Button, DarkLoader } from "../lib";
import DraftModel from "../modal/DraftModel";

const Connect = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [opendraft, setOpendraft] = useState(false);

  function learnmore() {
    setIsClicked(true);
    setTimeout(() => {
      setIsClicked(false);
      setClicked(true);
    }, 1000);
  }

  useEffect(() => {
    if (clicked) {
      setIsLoading(true);
      setTimeout(() => {
        setClicked(false);
        setIsLoading(false);
        setOpendraft(true);
      }, 2000);
    }
  }, [clicked]);

  const lmbtn = (
    <div className="flex gap-2 items-center">
      <p>Learn more</p>
      <FaArrowUpRightFromSquare szie={25} />
    </div>
  );
  return (
    <StyledConnectsection>
      <FaUsersLine color="#fff" size={40} />
      <div className="flex gap-1">
        <h1 className="text-blue-600 text-[40px] max-[700px]:text-[35px] font-kanit">
          Discover
        </h1>
        <h1 className="text-white text-[40px] max-[700px]:text-[35px] font-kanit">
          the world
        </h1>
      </div>
      <p className="text-white font-poppins text-[20px] max-[700px]:text-[17px] max-[700px]:w-[300px] w-[600px]">
        Connect with Other Traders, let the shared passion for trading propel
        you to new heights you'll want to convey the excitement of exploring the
        world of trading and the benefits of connecting with fellow traders
      </p>
      <Button
        Onclick={learnmore}
        secondary
        text={lmbtn}
        className="mt-[2rem]"
        padding="10px"
        width="180px"
        isLoading={isClicked}
      />
      {isLoading && <DarkLoader />}
      {opendraft && <DraftModel open={opendraft} setOpen={setOpendraft} />}
    </StyledConnectsection>
  );
};

export default Connect;
