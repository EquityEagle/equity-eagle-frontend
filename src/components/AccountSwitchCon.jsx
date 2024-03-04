import React from "react";
import { useSelector } from "react-redux";
import { FaCheckCircle } from "react-icons/fa";
import { Placeholder } from "../assets";
import AccountSwitch from "./AccountSwitch";

const AccountSwitchCon = () => {
  const user = useSelector((state) => state.AUTH);
  const accounts = user.Accounts;
  const systemconfig = useSelector((state) => state.SYSTEM);
  const islight = systemconfig.mode === "light";
  const isdark = systemconfig.mode === "dark";

  return (
    <>
      {accounts.length > 1 ? (
        <AccountSwitch />
      ) : (
        <div
          className={`flex justify-between ${
            islight ? "text-black" : "text-white"
          } items-center ${
            isdark
              ? "hover:bg-neutral-800"
              : "hover:bg-neutral-500 hover:text-white"
          } p-[8px] cursor-pointer rounded-[8px]`}
        >
          <div
            className="flex relative gap-3"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={user?.profile?.url || Placeholder}
              alt="User"
              className="w-[45px] h-[45px] rounded-full"
            />
            <div className="flex flex-col">
              <p className="font-poppins">{user.name}</p>
              <p className="text-neutral-400 text-[14px] font-poppins">
                @{user.username}
              </p>
            </div>
          </div>

          <FaCheckCircle size={20} className="text-blue-600" />
        </div>
      )}
    </>
  );
};

export default AccountSwitchCon;
