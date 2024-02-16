import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaCheckCircle } from "react-icons/fa";
import { Placeholder } from "../assets";
import { MdOutlineRadioButtonUnchecked } from "react-icons/md";
import { BackDrop, ScaleInLoader } from "../lib";
import { usePassCodeCheckModal, useSwitchModal } from "../hooks";
import { setSelectedId, switchAccount } from "../redux/auth";

const AccountSwitch = () => {
  const userState = useSelector((state) => state.AUTH);
  const accounts = userState.Accounts;
  const isswitchmodal = useSwitchModal();
  const isSwitching = isswitchmodal.isSwitching;
  const passcheckmodal = usePassCodeCheckModal();
  const dispatch = useDispatch();

  // function StartSwitchaccount(user) {}/

  function RunStop() {
    isswitchmodal.onSwitchSuccess();
  }

  useEffect(() => {
    setTimeout(() => {
      RunStop();
    }, 3000);
  });

  return (
    <>
      {accounts &&
        accounts?.map((user, index) => (
          <div
            className="flex justify-between items-center hover:bg-neutral-800 p-[8px] cursor-pointer rounded-[8px]"
            key={index}
            onClick={(e) => {
              e.stopPropagation();
              dispatch(setSelectedId(user));
              if (user.passcode) {
                passcheckmodal.onOpen();
              } else if (!user.passcode) {
                dispatch(switchAccount(user));
              }
            }}
          >
            <div className="flex relative gap-3">
              <img
                src={user?.profile?.url || Placeholder}
                alt="User"
                className="w-[45px] h-[45px] rounded-full"
              />
              <div className="flex flex-col">
                <p className="text-white font-poppins">{user.name}</p>
                <p className="text-neutral-400 text-[14px] font-poppins">
                  @{user.username}
                </p>
              </div>
            </div>
            {userState.id === user.id ? (
              <FaCheckCircle size={20} className="text-blue-600" />
            ) : (
              <MdOutlineRadioButtonUnchecked
                size={20}
                className="text-blue-600"
              />
            )}
          </div>
        ))}

      {isSwitching && (
        <BackDrop chaild={<ScaleInLoader />} className="z-[200]" />
      )}
    </>
  );
};

export default AccountSwitch;
