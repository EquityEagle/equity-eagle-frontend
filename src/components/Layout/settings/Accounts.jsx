import React from "react";
import { FcCancel } from "react-icons/fc";
import { HiUser } from "react-icons/hi";
import { RiLockPasswordLine } from "react-icons/ri";
import { useSelector } from "react-redux";

const Accounts = ({ setPass, setInfo }) => {
  const systemconfig = useSelector((state) => state.SYSTEM);
  const islight = systemconfig.mode === "light";
  // const isdark = systemconfig.mode === "dark";

  return (
    <div
      className={`w-full h-full ${
        islight ? "bg-neutral-500" : "bg-neutral-800"
      } rounded-tr-[7px] rounded-br-[7px] p-3`}
    >
      <h1 className="text-white font-kanit text-xl">Account</h1>
      <p className="text-neutral-400 font-roboto mt-1 text-[15px]">
        See information about your account, learn about your account
        deactivtation option
      </p>
      <div className="flex flex-col gap-4 mt-2 w-full p-2">
        <div
          onClick={() => setInfo(true)}
          className="flex flex-col cursor-pointer"
        >
          <div className="flex items-center gap-1">
            <HiUser size={20} color="#fff" />
            <p className="text-white text-[16px] font-poppins">
              Account information
            </p>
          </div>
          <p className="text-neutral-400 font-roboto mt-1 text-[14px]">
            See your account information, email address, username
          </p>
        </div>
        <div
          onClick={() => setPass(true)}
          className="flex flex-col cursor-pointer"
        >
          <div className="flex items-center gap-1">
            <RiLockPasswordLine size={20} color="#fff" />
            <p className="text-white text-[16px] font-poppins">
              Change your password
            </p>
          </div>
          <p className="text-neutral-400 font-poppins mt-1 text-[13px]">
            Change your password at any time
          </p>
        </div>
        <div className="flex flex-col cursor-pointer">
          <div className="flex items-center gap-1">
            <FcCancel size={20} color="#fff" />
            <p className="text-red-600 text-[16px] font-poppins">
              Deactivate account
            </p>
          </div>
          <p className="text-neutral-400 font-roboto mt-1 text-[14px]">
            Find out how you can deactivate your account.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Accounts;
