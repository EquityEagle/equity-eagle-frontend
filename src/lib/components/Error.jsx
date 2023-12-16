import React, { useState } from "react";
import { ImFileEmpty } from "react-icons/im";
import { MdSignalWifiStatusbarNotConnected } from "react-icons/md";
import Button from "./Button";

const Error = ({
  network,
  empty,
  className,
  tryAgain,
  text,
  onClick,
  btnText,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  function loadBeforeClick() {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      onClick();
    }, 2000);
  }
  return (
    <div
      className={`flex ${className} flex-col relative gap-[2rem] items-center h-full justify-center`}
    >
      {network && (
        <MdSignalWifiStatusbarNotConnected
          size={100}
          className="text-red-600"
        />
      )}
      {empty && <ImFileEmpty size={100} className="text-neutral-500" />}
      <p className="text-neutral-500 font-poppins">{text}</p>
      <Button
        width="150px"
        Onclick={loadBeforeClick}
        secondary
        text={btnText}
        isLoading={isLoading}
      />
    </div>
  );
};

export default Error;
