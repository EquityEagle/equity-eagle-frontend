import React from "react";
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
import { useCreateModal, useMoreMenuModel } from "../../hooks";

const SideNav = () => {
  const moremodal = useMoreMenuModel();
  const open = moremodal.isOpen;
  const path = useLocation();
  const createmodal = useCreateModal();

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
      <StyledSideNavContainer>
        <Link to="/">
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
                path.pathname === item.link
                  ? "bg-neutral-800 text-blue-600"
                  : "text-white"
              } flex gap-2 items-center hover:bg-neutral-800 p-[11px] rounded-[6px]`}
              key={index}
            >
              {item.icon}
              <p className="text-whit text-[17px] font-poppins max-[1024px]:hidden">
                {item.text}
              </p>
            </Link>
          ))}
        </StyledNavLinksContainer>
        <div className="flex flex-col gap-[12px] absolute ml-[3rem] max-[1024px]:ml-0 bottom-[2rem] w-[200px]">
          <div
            onClick={createModal}
            className="flex gap-2 items-center relative hover:bg-neutral-800 p-[12px] max-[1024px]:w-[55px] rounded-[6px] cursor-pointer"
          >
            <IoCreate color="#fff" size={30} />
            <p className="text-white text-[17px] font-poppins max-[1024px]:hidden">
              Create
            </p>
          </div>
          <div
            className={`flex ${
              open ? "text-blue-600" : "text-white"
            } gap-2 items-center relative hover:bg-neutral-800 p-[12px] max-[1024px]:w-[55px] rounded-[6px] cursor-pointer`}
            onClick={openMore}
          >
            <HiMenu size={30} />
            <p className="text-[17px] font-poppins max-[1024px]:hidden">More</p>
          </div>
        </div>
      </StyledSideNavContainer>
    </StyledSideNav>
  );
};

export default SideNav;
