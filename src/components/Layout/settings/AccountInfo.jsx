import React from "react";
import { HiMiniArrowLeft } from "react-icons/hi2";
import { useSelector } from "react-redux";
import { useAccountInfoModal } from "../../../hooks";

const AccountInfo = ({ setInfo }) => {
  const systemconfig = useSelector((state) => state.SYSTEM);
  const islight = systemconfig.mode === "light";
  const user = useSelector((state) => state.AUTH);
  const accountinfomodal = useAccountInfoModal();

  return (
    <div
      className={`w-full h-full ${
        islight ? "bg-neutral-500" : "bg-neutral-800"
      } rounded-tr-[7px] rounded-br-[7px] p-3`}
    >
      <div className="flex items-center gap-2">
        <HiMiniArrowLeft
          onClick={() => setInfo(false)}
          size={25}
          color="#fff"
          className="cursor-pointer"
        />
        <h1 className="text-white font-kanit text-xl">Account information</h1>
      </div>
      <div className="flex flex-col gap-4 mt-2 w-full p-2">
        <div className="flex flex-col cursor-pointer">
          <p className="font-poppins text-white font-[400]">Username</p>
          <p className="font-poppins text-[14px] text-neutral-400 font-[400]">
            @{user.username}
          </p>
        </div>
        <div className="flex flex-col cursor-pointer">
          <p className="font-poppins text-white font-[400]">Email</p>
          <p className="font-poppins text-[14px] text-neutral-400 font-[400]">
            {user.email}
          </p>
        </div>
        <div className="flex flex-col cursor-pointer">
          <p className="font-poppins text-white font-[400]">Name</p>
          <p className="font-poppins text-[14px] text-neutral-400 font-[400]">
            {user.name}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AccountInfo;
