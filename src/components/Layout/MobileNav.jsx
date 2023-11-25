import React, { useEffect, useState } from "react";
import { StyledMobileNav } from "../../styles/components/styled";
import { Link, useLocation, useParams } from "react-router-dom";
import { BsHeadsetVr } from "react-icons/bs";
import { MdAddHome, MdDashboard, MdTravelExplore } from "react-icons/md";
import { IoCreate } from "react-icons/io5";
import { FaBell, FaBrain } from "react-icons/fa";
import { useCreateModal } from "../../hooks";
import { NoteIcon } from "../../lib";
import { useSelector } from "react-redux";
import { getUnreadNotifications } from "../../helper/fetch";

const MobileNav = () => {
  const path = useLocation();
  const notHome = path.pathname !== "/" && !path.pathname.includes("auth");
  const [notifications, setNotifications] = useState([]);
  const userId = useSelector((state) => state.id);

  useEffect(() => {
    const getNotes = async () => {
      const data = await getUnreadNotifications(userId);
      setNotifications(data);
    };
    getNotes();
  }, [notifications]);

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
      <Link to="/new-community">
        <MdAddHome
          size={25}
          className={
            path.pathname === "/new-community" ? "text-blue-600" : "text-white"
          }
        />
      </Link>

      <IoCreate onClick={createModal} size={35} className={`text-white`} />

      <Link to="/notification">
        <NoteIcon item={notifications} className="-mt-1" />
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
