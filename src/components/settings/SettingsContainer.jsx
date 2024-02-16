import React from "react";
import { useSelector } from "react-redux";
import { Placeholder } from "../../assets";
import LinkContainer from "./LinkContainer";
import { MobileHeader } from "../../lib";

const SettingsContainer = () => {
  const user = useSelector((state) => state.AUTH);
  return (
    <div className="w-full bg-black h-full flex flex-col gap-3 relative">
      <MobileHeader navBack />
      <div className="flex gap-4 p-4 border-b border-b-neutral-800 max-[700px]:mt-[3rem]">
        <img
          src={user?.profile?.url || Placeholder}
          alt="User"
          className="w-[100px] h-[100px] max-[700px]:w-[90px] max-[700px]:h-[90px] rounded-full"
        />
        <div className="flex flex-col">
          <p className="text-white text-[20px] font-[500]">{user.name}</p>
          <p className="text-neutral-500 text-[17px] font-[500]">
            @{user.username}
          </p>
        </div>
      </div>
      <LinkContainer />
    </div>
  );
};

export default SettingsContainer;
