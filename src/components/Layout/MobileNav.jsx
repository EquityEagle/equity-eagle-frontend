import React from "react";
import { StyledMobileNav } from "../../styles/components/styled";
import { Link, useLocation, useParams } from "react-router-dom";
import { BsHeadsetVr } from "react-icons/bs";
import { MdDashboard, MdTravelExplore } from "react-icons/md";
import { IoCreate } from "react-icons/io5";
import { FaBell, FaBrain } from "react-icons/fa";
import { useCreateModal } from "../../hooks";

const MobileNav = () => {
  const path = useLocation();
  const { communityslug } = useParams();
  const notHome = path.pathname !== "/" && !path.pathname.includes("auth");
  // const hide = ;

  const createmodal = useCreateModal();

  function createModal() {
    createmodal.onOpen();
  }
  return (
    <StyledMobileNav className={`shadow shadow-slate-400`} notHome={notHome}>
      <Link to="/ideas">
        <FaBrain
          size={25}
          className={
            path.pathname === "/ideas" ? "text-blue-600" : "text-white"
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

      <IoCreate onClick={createModal} size={35} className={`text-white`} />

      <Link to="/notification">
        <FaBell
          size={25}
          className={
            path.pathname === "/notification" ? "text-blue-600" : "text-white"
          }
        />
      </Link>

      <Link to="/dashboard">
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
