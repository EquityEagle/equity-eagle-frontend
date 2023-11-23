import React from "react";
import { useMobileModal } from "../hooks";
import { BackDrop, BottomDivider } from "../lib";
import { Placeholder } from "../assets";
import { FlexBetween } from "../styles/Global";
import { PiDotsThreeCircleVerticalDuotone } from "react-icons/pi";
import { Flex } from "../styles/components/styled";
import { useDispatch, useSelector } from "react-redux";
import { mobilenavdata } from "../constants/nav";
import { Link } from "react-router-dom";
import { LuLogOut } from "react-icons/lu";
import { logOut } from "../redux/auth";

const MobileModal = () => {
  const mobilemodal = useMobileModal();
  const open = mobilemodal.isOpen;
  const user = useSelector((state) => state.AUTH);
  const dispatch = useDispatch();

  function close() {
    mobilemodal.onClose();
  }
  function LogOut() {
    dispatch(logOut());
  }

  const body = (
    <div className="flex flex-col bg-black fixed delayIn left-0 h-full z-[100] top-0 w-[300px] p-2">
      <FlexBetween className="p-[8px] mb-1">
        <img
          src={Placeholder}
          alt="User profile"
          className="w-[40px] h-[40px] rounded-full hidden max-[700px]:block"
        />
        <PiDotsThreeCircleVerticalDuotone size={20} color="#fff" />
      </FlexBetween>
      <div className="flex-col flex items-start text-justify p-1 mb-1">
        <p className="text-white font-kanit">{user.name}</p>
        <p className="text-neutral-600 font-kanit font-[14px]">
          @{user.username}
        </p>
      </div>
      <div className={`bg-neutral-800 h-[1px] w-full`} />
      <div className="flex flex-col gap-[1.5rem] relative p-[10px] mt-2">
        {mobilenavdata.map((item, index) => (
          <Link
            to={item.isprofie ? `/account/${user.username}` : item.link}
            className="flex items-center gap-[10px]"
            key={index}
          >
            {item.icon}
            <p className="text-white font-poppins text-[17px]">{item.text}</p>
          </Link>
        ))}
      </div>
      <LuLogOut
        className="hidden max-[700px]:block absolute left-4 bottom-10"
        color="#fff"
        size={30}
        onClick={LogOut}
      />
    </div>
  );

  return <div>{open && <BackDrop onClick={close} chaild={body} />}</div>;
};

export default MobileModal;
