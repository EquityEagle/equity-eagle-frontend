import React from "react";
import {
  StyledNavLinksContainer,
  StyledSideNav,
  StyledSideNavContainer,
} from "../../styles/components/styled";
import { EagleLogo, EquityEagleLogo } from "../../assets";
import { Link } from "react-router-dom";
import { sidenavdata } from "../../constants/nav";
import { HiMenu } from "react-icons/hi";
import { IoCreate } from "react-icons/io5";
import { useMoreMenuModel } from "../../hooks";

const SideNav = () => {
  const moremodal = useMoreMenuModel();
  const open = moremodal.isOpen;

  function openMore() {
    if (!open) {
      moremodal.onOpen();
    } else {
      moremodal.onClose();
    }
  }
  // function closeMore() {
  //   moremodal.onClose();
  // }

  return (
    <StyledSideNav>
      {/* <StyledSideNavContainer> */}
      <Link to="/">
        <img
          src={EquityEagleLogo}
          alt="Equity-Eagle-Logo"
          className="w-[100px] max-[1024px]:hidden"
        />
        <img
          src={EagleLogo}
          alt="Equity-Eagle-Logo"
          className="w-[95px] hidden max-[1024px]:block"
        />
      </Link>
      {/* </StyledSideNavContainer> */}
      <StyledNavLinksContainer>
        {sidenavdata.map((item, index) => (
          <Link
            title={item.label}
            to={item.link}
            className="flex gap-2 items-center hover:bg-neutral-800 p-[11px] rounded-[6px]"
            key={index}
          >
            {item.icon}
            <p className="text-white text-[17px] font-poppins max-[1024px]:hidden">
              {item.text}
            </p>
          </Link>
        ))}
      </StyledNavLinksContainer>
      <div className="flex flex-col gap-[12px] absolute bottom-[2rem] w-[200px]">
        <div className="flex gap-2 items-center relative hover:bg-neutral-800 p-[12px] max-[1024px]:w-[55px] rounded-[6px] cursor-pointer">
          <IoCreate color="#fff" size={30} />
          <p className="text-white text-[17px] font-poppins max-[1024px]:hidden">
            Create
          </p>
        </div>
        <div
          className="flex gap-2 items-center relative hover:bg-neutral-800 p-[12px] max-[1024px]:w-[55px] rounded-[6px] cursor-pointer"
          onClick={openMore}
        >
          <HiMenu color="#fff" size={30} />
          <p className="text-white text-[17px] font-poppins max-[1024px]:hidden">
            More
          </p>
        </div>
      </div>
    </StyledSideNav>
  );
};

export default SideNav;
