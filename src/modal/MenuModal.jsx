import React from "react";
import useMenuModel from "../hooks/useMenuModel";
import { StyledMenu } from "../styles/components/styled";
import { navlinksdata } from "../constants/nav";
import { Link } from "react-router-dom";
import { Button } from "../lib";

const MenuModal = () => {
  const menumodal = useMenuModel();
  const open = menumodal.isOpen;

  const content = (
    <StyledMenu>
      {navlinksdata.map((item, index) => (
        <Link
          key={index}
          to={item.link}
          className="mt-[1rem]"
          onClick={menumodal.onClose}
        >
          <p className="text-white font-kanit">{item.text}</p>
        </Link>
      ))}
      <Link to="/auth/sign-up" onClick={menumodal.onClose}>
        <Button secondary text="Sign Up" width="100px" />
      </Link>
      <Link to="/auth/login" onClick={menumodal.onClose}>
        <Button primary text="Sign In" width="100px" />
      </Link>
    </StyledMenu>
  );
  return <>{open && content}</>;
};

export default MenuModal;
