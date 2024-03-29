import React, { useEffect, useState } from "react";
import { StyledNav } from "../../styles/components/styled";
import Logo from "./Logo";
import { navlinksdata } from "../../constants/nav";
import { Link, useLocation } from "react-router-dom";
import { Button, ClickOpacity } from "../../lib";
import { IoClose, IoMenuSharp } from "react-icons/io5";
import useMenuModel from "../../hooks/useMenuModel";
// import { useSelector } from "react-redux";

const Navbar = () => {
  const menumodal = useMenuModel();
  const open = menumodal.isOpen;
  const [icon, setIcon] = useState(IoMenuSharp);
  const path = useLocation();
  const notHome =
    path.pathname !== "/" &&
    !path.pathname.includes("auth") &&
    path.pathname !== "/get-in-touch";

  useEffect(() => {
    if (open) {
      setIcon(IoClose);
    } else {
      setIcon(IoMenuSharp);
    }
  }, [open]);

  function openMenu() {
    menumodal.onOpen();
  }

  function closeMenu() {
    menumodal.onClose();
  }

  return (
    <StyledNav className={`${notHome ? "hidden" : "flex"}`}>
      <Logo />
      <div className="flex gap-[1rem] items-center max-[800px]:hidden">
        {navlinksdata.map((item, index) => (
          <Link to={item.link} key={index}>
            <p className="text-white font-kanit hover:opacity-70">
              {item.text}
            </p>
          </Link>
        ))}
      </div>
      <ClickOpacity
        className="hidden max-[800px]:block"
        child={
          <div
            onClick={open ? closeMenu : openMenu}
            style={{ color: "#fff", fontSize: 30 }}
            className="cursor-pointer outline-none"
          >
            {icon}
          </div>
        }
      />
    </StyledNav>
  );
};

export default Navbar;
