import React, { useEffect, useState } from "react";
import { StyledNav } from "../../styles/components/styled";
import Logo from "./Logo";
import { navlinksdata } from "../../constants/nav";
import { Link } from "react-router-dom";
import { Button, ClickOpacity } from "../../lib";
import { IoClose, IoMenuSharp } from "react-icons/io5";
import useMenuModel from "../../hooks/useMenuModel";

const Navbar = () => {
  const menumodal = useMenuModel();
  const open = menumodal.isOpen;
  const [icon, setIcon] = useState(IoMenuSharp);

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
    <StyledNav>
      <Logo />
      <div className="flex gap-[1rem] items-center max-[800px]:hidden">
        {navlinksdata.map((item, index) => (
          <Link to={item.link} key={index}>
            <p className="text-white font-kanit hover:opacity-70">
              {item.text}
            </p>
          </Link>
        ))}
        <Button text="Sign In" primary />
        <Link to="/get-started">
          <Button text="Sign Up" secondary />
        </Link>
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
