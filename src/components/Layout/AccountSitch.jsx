import React from "react";
import { useSelector } from "react-redux";
import { Placeholder } from "../../assets";
import { HiDotsHorizontal } from "react-icons/hi";
import { useAccountSwitchModal } from "../../hooks";

const AccountSitch = () => {
  const switchAccount = useAccountSwitchModal();
  const user = useSelector((state) => state.AUTH);

  return (
    <div
      className="flex items-center relative gap-3"
      onClick={switchAccount.onOpen}
    >
      <img
        src={user?.profile?.url || Placeholder}
        alt="User"
        className="w-[35px] h-[35px] rounded-full"
      />
      <div className="flex flex-col max-[1024px]:hidden">
        <p className="text-white font-poppins">{user.name}</p>
        <p className="text-neutral-400 text-[14px] font-poppins">
          @{user.username}
        </p>
      </div>
      <HiDotsHorizontal
        size={25}
        className="max-[1024px]:hidden"
        color="#fff"
      />
    </div>
  );
};

export default AccountSitch;
