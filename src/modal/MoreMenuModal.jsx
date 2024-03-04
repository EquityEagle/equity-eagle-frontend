import React, { useEffect, useState } from "react";
import { useMoreMenuModel } from "../hooks";
import { StyledMoreModal } from "../styles/modal/styled";
import { Link, useNavigate } from "react-router-dom";
import { moremodaldata } from "../constants/nav";
import { MdLogin } from "react-icons/md";
import { TbLogout2 } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../redux/auth";

const MoreMenuModal = () => {
  const moremodal = useMoreMenuModel();
  const open = moremodal.isOpen;
  const systemconfig = useSelector((state) => state.SYSTEM);
  const islight = systemconfig.mode === "light";
  const isdark = systemconfig.mode === "dark";
  const login = <MdLogin size={25} />;
  const logout = <TbLogout2 size={25} />;
  const [text, setText] = useState("Login");
  const navigate = useNavigate();
  const auth = useSelector((state) => state.AUTH);
  const dispatch = useDispatch();

  useEffect(() => {
    if (auth.userLoaded) {
      setText("Logout");
    } else {
      setText("Login");
    }
  }, [auth]);

  function Login() {
    if (!auth.userLoaded) {
      navigate("/auth/login");
      moremodal.onClose();
    } else {
      dispatch(logOut());
      moremodal.onClose();
    }
  }

  function close() {
    moremodal.onClose();
  }

  const modal = (
    <StyledMoreModal
      islight={islight}
      className={` ${islight ? "shadow-black" : "shadow-slate-100"} shadow`}
    >
      <div className="flex flex-col p-[10px] gap-[8px]">
        {moremodaldata.map((item, index) => (
          <Link
            to={item.isprofie ? `/account/${auth.username}` : item.link}
            key={index}
            onClick={() => moremodal.onClose()}
            className={`flex items-center ${
              islight ? "text-black" : "text-white"
            } gap-[10px] ${
              isdark
                ? "hover:bg-neutral-800"
                : "hover:bg-neutral-500 hover:text-white"
            } p-[14px] rounded-[9px]`}
          >
            {item.icon}
            <p className="font-kanit">{item.text}</p>
          </Link>
        ))}
      </div>
      <div
        className={`${islight ? "bg-black" : "bg-neutral-700"} w-full h-[7px]`}
      />
      <div className="p-[10px]" onClick={Login}>
        <div
          className={`flex items-center gap-[10px] ${
            islight ? "text-black" : "text-white"
          } ${
            isdark
              ? "hover:bg-neutral-800"
              : "hover:bg-neutral-500 hover:text-white"
          } p-[14px] rounded-[9px] cursor-pointer`}
        >
          {auth.userLoaded ? logout : login}
          <p className={`font-kanit`}>{text}</p>
        </div>
      </div>
    </StyledMoreModal>
  );
  return (
    <div>
      {open && (
        <div onClick={close} className="fixed z-[200] w-full top-0 bottom-0">
          {modal}
        </div>
      )}
    </div>
  );
};

export default MoreMenuModal;
