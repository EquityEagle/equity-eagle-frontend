import React from "react";
import useMenuModel from "../hooks/useMenuModel";
import { StyledMenu } from "../styles/components/styled";
import { navlinksdata } from "../constants/nav";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { BottomDivider } from "../lib";

const MenuModal = () => {
  const menumodal = useMenuModel();
  const open = menumodal.isOpen;

  const content = (
    <StyledMenu>
      {navlinksdata.map((item, index) => (
        <>
          <Link
            key={index}
            to={item.link}
            className="mt-[1rem] flex items-center justify-between p-[10px] rounded-[9px] hover:bg-neutral-800 w-full"
            onClick={menumodal.onClose}
          >
            <p className="text-white font-kanit font-medium">{item.text}</p>
            <MdOutlineKeyboardArrowRight size={25} color="#fff" />
          </Link>
          <BottomDivider />
        </>
      ))}
    </StyledMenu>
  );
  return <>{open && content}</>;
};

export default MenuModal;
