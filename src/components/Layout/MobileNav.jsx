import React from "react";
import { StyledMobileNav } from "../../styles/components/styled";
import { Link, useLocation } from "react-router-dom";
import { BsHeadsetVr } from "react-icons/bs";
import { MdDashboard, MdTravelExplore } from "react-icons/md";
import { IoCreate } from "react-icons/io5";
import { FaBell } from "react-icons/fa";

const MobileNav = () => {
  const path = useLocation();
  const notHome = path.pathname !== "/" && !path.pathname.includes("auth");
  return (
    <StyledMobileNav className={`shadow shadow-slate-400`} notHome={notHome}>
      <Link to="/">
        <BsHeadsetVr
          size={25}
          className={
            path.pathname === "/setups" ? "text-blue-600" : "text-white"
          }
        />
      </Link>
      <Link to="">
        <MdTravelExplore
          size={25}
          className={
            path.pathname === "/explore" ? "text-blue-600" : "text-white"
          }
        />
      </Link>

      <IoCreate size={35} className={`text-white`} />

      <Link>
        <FaBell
          size={25}
          className={
            path.pathname === "/notification" ? "text-blue-600" : "text-white"
          }
        />
      </Link>

      <Link to="">
        <MdDashboard
          size={25}
          className={
            path.pathname === "/dashboard" ? "text-blue-600" : "text-white"
          }
        />
      </Link>
    </StyledMobileNav>
  );
};

export default MobileNav;
