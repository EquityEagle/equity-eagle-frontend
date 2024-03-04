import React from "react";
import { BiSolidMessageSquareEdit } from "react-icons/bi";
import { FiHelpCircle } from "react-icons/fi";
import { MdAccountBox, MdDataUsage, MdSecurity } from "react-icons/md";
import { TbBell } from "react-icons/tb";
import { useSelector } from "react-redux";

const Nav = ({
  account,
  privacy,
  help,
  personal,
  noti,
  storage,
  setAccount,
  setHelp,
  setPersonal,
  setNoti,
  setPrivacy,
  setStorage,
}) => {
  const systemconfig = useSelector((state) => state.SYSTEM);
  const islight = systemconfig.mode === "light";
  const isdark = systemconfig.mode === "dark";

  function switchAccount() {
    setHelp(false);
    setStorage(false);
    setPersonal(false);
    setNoti(false);
    setPrivacy(false);
    setAccount(true);
  }
  function switchPrivacy() {
    setHelp(false);
    setStorage(false);
    setPersonal(false);
    setNoti(false);
    setAccount(false);
    setPrivacy(true);
  }
  function switchNoti() {
    setHelp(false);
    setStorage(false);
    setPersonal(false);
    setAccount(false);
    setPrivacy(false);
    setNoti(true);
  }
  function switchPersonal() {
    setHelp(false);
    setStorage(false);
    setAccount(false);
    setPrivacy(false);
    setNoti(false);
    setPersonal(true);
  }
  function switchStore() {
    setHelp(false);
    setAccount(false);
    setPrivacy(false);
    setNoti(false);
    setPersonal(false);
    setStorage(true);
  }
  function switchHelp() {
    setAccount(false);
    setPrivacy(false);
    setNoti(false);
    setPersonal(false);
    setStorage(false);
    setHelp(true);
  }
  return (
    <div
      className={`w-[290px] relative ${
        islight ? "text-black" : "text-white"
      } flex flex-col gap-3 p-2`}
    >
      <div
        onClick={switchAccount}
        className={`flex items-center gap-2 p-1 ${
          account && "bg-neutral-700 text-white"
        } ${
          isdark
            ? "hover:bg-neutral-800"
            : "hover:bg-neutral-500 hover:text-white"
        } rounded-[4px] cursor-pointer`}
      >
        {account ? (
          <div className="bg-blue-600 h-[16px] -translate-x-1 w-[4px] rounded-[6px]" />
        ) : (
          <div className="bg-b h-[16px] -translate-x-1 w-[4px] rounded-[6px]" />
        )}
        <MdAccountBox size={20} />
        <p className="font-roboto text-[14px]">Accounts</p>
      </div>
      <div
        onClick={switchPrivacy}
        className={`flex items-center gap-2 p-1 ${
          privacy && "bg-neutral-700 text-white"
        } ${
          isdark
            ? "hover:bg-neutral-800"
            : "hover:bg-neutral-500 hover:text-white"
        } rounded-[4px] cursor-pointer`}
      >
        {privacy ? (
          <div className="bg-blue-600 h-[16px] -translate-x-1 w-[4px] rounded-[6px]" />
        ) : (
          <div className="bg-b h-[16px] -translate-x-1 w-[4px] rounded-[6px]" />
        )}
        <MdSecurity size={20} />
        <p className="font-roboto text-[14px]">Privacy</p>
      </div>
      <div
        onClick={switchNoti}
        className={`flex items-center gap-2 p-1 ${
          noti && "bg-neutral-700 text-white"
        } ${
          isdark
            ? "hover:bg-neutral-800"
            : "hover:bg-neutral-500 hover:text-white"
        } rounded-[4px] cursor-pointer`}
      >
        {noti ? (
          <div className="bg-blue-600 h-[16px] -translate-x-1 w-[4px] rounded-[6px]" />
        ) : (
          <div className="bg-b h-[16px] -translate-x-1 w-[4px] rounded-[6px]" />
        )}
        <TbBell size={20} />
        <p className="font-roboto text-[14px]">Notifications</p>
      </div>
      <div
        onClick={switchPersonal}
        className={`flex items-center gap-2 p-1 ${
          personal && "bg-neutral-700 text-white"
        } ${
          isdark
            ? "hover:bg-neutral-800"
            : "hover:bg-neutral-500 hover:text-white"
        } rounded-[4px] cursor-pointer`}
      >
        {personal ? (
          <div className="bg-blue-600 h-[16px] -translate-x-1 w-[4px] rounded-[6px]" />
        ) : (
          <div className="bg-b h-[16px] -translate-x-1 w-[4px] rounded-[6px]" />
        )}
        <BiSolidMessageSquareEdit size={20} />
        <p className="font-roboto text-[14px]">Personalization</p>
      </div>
      <div
        onClick={switchStore}
        className={`flex items-center gap-2 p-1 ${
          storage && "bg-neutral-700 text-white"
        } ${
          isdark
            ? "hover:bg-neutral-800"
            : "hover:bg-neutral-500 hover:text-white"
        } rounded-[4px] cursor-pointer`}
      >
        {storage ? (
          <div className="bg-blue-600 h-[16px] -translate-x-1 w-[4px] rounded-[6px]" />
        ) : (
          <div className="bg-b h-[16px] -translate-x-1 w-[4px] rounded-[6px]" />
        )}
        <MdDataUsage size={20} />
        <p className="font-roboto text-[14px]">Storage and data</p>
      </div>
      <div
        onClick={switchHelp}
        className={`flex items-center gap-2 p-1 ${
          help && "bg-neutral-700 text-white"
        } ${
          isdark
            ? "hover:bg-neutral-800"
            : "hover:bg-neutral-500 hover:text-white"
        } rounded-[4px] cursor-pointer`}
      >
        {help ? (
          <div className="bg-blue-600 h-[16px] -translate-x-1 w-[4px] rounded-[6px]" />
        ) : (
          <div className="bg-b h-[16px] -translate-x-1 w-[4px] rounded-[6px]" />
        )}
        <FiHelpCircle size={20} />
        <p className="font-roboto text-[14px]">Help</p>
      </div>
    </div>
  );
};

export default Nav;
