import React, { useEffect, useState } from "react";
import { StyledMobileNav } from "../../styles/components/styled";
import { Link, useLocation } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { IoCreate } from "react-icons/io5";
import { FaBell, FaBrain } from "react-icons/fa";
import { useCreateModal } from "../../hooks";
import { NoteIcon } from "../../lib";
import { useSelector } from "react-redux";
import { getUnreadNotifications } from "../../helper/fetch";
import { BiSolidMessageAltDetail } from "react-icons/bi";

const MobileNav = () => {
  const path = useLocation();
  const notHome = path.pathname !== "/" && !path.pathname.includes("auth");
  const [notifications, setNotifications] = useState([]);
  const userId = useSelector((state) => state.AUTH.id);

  useEffect(() => {
    const getNotes = async () => {
      const data = await getUnreadNotifications(userId);
      setNotifications(data);
    };
    getNotes();
  }, [notifications, userId]);

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
      {/* <Link to="/messages"> */}
      <Link to="/coming-soon">
        <BiSolidMessageAltDetail
          size={27}
          className={
            path.pathname === "/coming-soon" ? "text-blue-600" : "text-white"
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
