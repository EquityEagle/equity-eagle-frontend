import React, { useEffect, useState } from "react";
import {
  StyledNavLinksContainer,
  StyledSideNav,
  StyledSideNavContainer,
} from "../../styles/components/styled";
import { EagleLogo, EquityEagleLogo } from "../../assets";
import { Link, useLocation } from "react-router-dom";
import { sidenavdata } from "../../constants/nav";
import { HiMenu } from "react-icons/hi";
import { IoCreate } from "react-icons/io5";
import {
  useCreateModal,
  useMoreMenuModel,
  useSettingsModal,
} from "../../hooks";
import { NoteIcon } from "../../lib";
import { getUnreadNotifications } from "../../helper/fetch";
import { useSelector } from "react-redux";
import AccountSitch from "./AccountSitch";
import { IoMdSettings } from "react-icons/io";

const SideNav = () => {
  const moremodal = useMoreMenuModel();
  const open = moremodal.isOpen;
  const path = useLocation();
  const createmodal = useCreateModal();
  const notifications = useSelector((state) => state.SYSTEM.notifications);
  const userId = useSelector((state) => state.AUTH.id);
  const settingmodal = useSettingsModal();
  const openSet = settingmodal.isOpen;
  const systemconfig = useSelector((state) => state.SYSTEM);
  const islight = systemconfig.mode === "light";
  const isdark = systemconfig.mode === "dark";

  function openMore() {
    if (!open) {
      moremodal.onOpen();
    } else {
      moremodal.onClose();
    }
  }

  function createModal() {
    createmodal.onOpen();
  }

  return (
    <StyledSideNav>
      <StyledSideNavContainer
        className="border-r border-r-neutral-800"
        islight={islight}
      >
        <Link to="/dashboard" className={islight && "bg-black"}>
          <img
            src={EquityEagleLogo}
            alt="Equity-Eagle-Logo"
            className="w-[100px] ml-[3rem] max-[1024px]:hidden"
          />
          <img
            src={EagleLogo}
            alt="Equity-Eagle-Logo"
            className="w-[95px] ml-0 hidden max-[1024px]:block"
          />
        </Link>
        <StyledNavLinksContainer>
          {sidenavdata.map((item, index) => (
            <Link
              title={item.label}
              to={item.link}
              className={`${
                path.pathname === item.link &&
                `${islight ? "bg-neutral-500" : "bg-neutral-800"} text-blue-600`
              } ${
                islight
                  ? "text-black"
                  : `${
                      path.pathname === item.link
                        ? "text-blue-600"
                        : "text-white"
                    }`
              } ${
                item.showOnTab ? "hidden max-[800px]:flex" : "flex"
              } gap-2 items-center ${
                isdark
                  ? "hover:bg-neutral-800"
                  : "hover:bg-neutral-500 hover:text-white"
              } p-[11px] rounded-[6px]`}
              key={index}
            >
              {item.isNote && (
                <NoteIcon
                  item={notifications}
                  borderBlack
                  className="ml-2 -mt-3"
                />
              )}
              {item.icon}
              <p className="text-whit text-[17px] font-poppins max-[1024px]:hidden">
                {item.text}
              </p>
            </Link>
          ))}
        </StyledNavLinksContainer>
        <div className="flex flex-col gap-[12px] absolute ml-[3rem] max-[1024px]:ml-0 bottom-[8rem] w-[200px]">
          <div
            onClick={createModal}
            className={`flex gap-2 items-center relative ${
              isdark
                ? "hover:bg-neutral-800"
                : "hover:bg-neutral-500 hover:text-white"
            } ${islight && "text-black"} ${
              isdark && "text-white"
            } p-[12px] max-[1024px]:w-[55px] rounded-[6px] cursor-pointer`}
          >
            <IoCreate size={30} />
            <p className={`text-[17px] font-poppins max-[1024px]:hidden`}>
              Create
            </p>
          </div>
          <div
            className={`flex ${open && "text-blue-600"} ${
              islight && "text-black"
            } ${isdark && "text-white"}  gap-2 items-center relative ${
              isdark
                ? "hover:bg-neutral-800"
                : "hover:bg-neutral-500 hover:text-white"
            } p-[12px] max-[1024px]:w-[55px] rounded-[6px] cursor-pointer`}
            onClick={openMore}
          >
            <HiMenu size={30} />
            <p className="text-[17px] font-poppins max-[1024px]:hidden">More</p>
          </div>
          <div
            className={`flex ${openSet && "text-blue-600"} ${
              islight && "text-black"
            } ${isdark && "text-white"} gap-2 items-center relative ${
              isdark
                ? "hover:bg-neutral-800"
                : "hover:bg-neutral-500 hover:text-white"
            } p-[12px] max-[1024px]:w-[55px] rounded-[6px] cursor-pointer`}
            onClick={settingmodal.onOpen}
          >
            <IoMdSettings size={25} />
            <p className="text-[17px] font-poppins max-[1024px]:hidden">
              Settings
            </p>
          </div>
        </div>
        <div className="flex flex-col absolute ml-[3rem] max-[1024px]:ml-0 bottom-[12px] w-auto">
          <div
            className={`w-full relative p-[8px] ${
              isdark
                ? "hover:bg-neutral-800"
                : "hover:bg-neutral-500 hover:text-white"
            } max-[1024px]:w-[55px] rounded-[6px] cursor-pointer`}
          >
            <AccountSitch />
          </div>
        </div>
      </StyledSideNavContainer>
    </StyledSideNav>
  );
};

export default SideNav;
