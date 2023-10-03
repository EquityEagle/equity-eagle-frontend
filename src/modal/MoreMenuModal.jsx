import React, { useState } from "react";
import { useMoreMenuModel } from "../hooks";
import { StyledMoreModal } from "../styles/modal/styled";
import { Link } from "react-router-dom";
import { moremodaldata } from "../constants/nav";
import { MdLogin } from "react-icons/md";
import { TbLogout2 } from "react-icons/tb";

const MoreMenuModal = () => {
  const moremodal = useMoreMenuModel();
  const open = moremodal.isOpen;
  const login = <MdLogin size={25} color="#fff" />;
  const logout = <TbLogout2 size={25} color="#fff" />;
  const [icon, setIcon] = useState(login);
  const [text, setText] = useState("Login");

  const modal = (
    <StyledMoreModal className="shadow-slate-100 shadow">
      <div className="flex flex-col p-[10px] gap-[8px]">
        {moremodaldata.map((item, index) => (
          <Link
            to={item.link}
            key={index}
            className="flex items-center gap-[10px] hover:bg-neutral-800 p-[14px] rounded-[9px]"
          >
            {item.icon}
            <p className="text-white font-kanit">{item.text}</p>
          </Link>
        ))}
      </div>
      <div className="bg-neutral-700 w-full h-[7px]" />
      <div className="p-[10px]">
        <div className="flex items-center gap-[10px] hover:bg-neutral-800 p-[14px] rounded-[9px] cursor-pointer">
          {icon}
          <p className="text-white font-kanit">{text}</p>
        </div>
      </div>
    </StyledMoreModal>
  );
  return <div>{open && modal}</div>;
};

export default MoreMenuModal;
