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
        <Link key={index} className="mt-[1rem]">
          <p className="text-white font-kanit">{item.text}</p>
        </Link>
      ))}
      <Button secondary text="Sign Up" width="100px" />
      <Button primary text="Sign In" width="100px" />
    </StyledMenu>
  );
  return <>{open && content}</>;
};

export default MenuModal;
