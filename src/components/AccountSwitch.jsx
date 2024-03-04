import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaCheckCircle } from "react-icons/fa";
import { Placeholder } from "../assets";
import { MdOutlineRadioButtonUnchecked } from "react-icons/md";
import { BackDrop, ScaleInLoader } from "../lib";
import { usePassCodeCheckModal, useSwitchModal } from "../hooks";
import { setSelectedId, switchAccount } from "../redux/auth";
import { getSwitchUser, getUserById, getUserByUsername } from "../helper/fetch";
import { toast } from "react-toastify";

const AccountSwitch = () => {
  const userState = useSelector((state) => state.AUTH);
  const accounts = userState.Accounts;
  const isswitchmodal = useSwitchModal();
  const isSwitching = isswitchmodal.isSwitching;
  const passcheckmodal = usePassCodeCheckModal();
  const dispatch = useDispatch();
  const systemconfig = useSelector((state) => state.SYSTEM);
  const islight = systemconfig.mode === "light";
  const isdark = systemconfig.mode === "dark";
  const [User, setUser] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [startSwitch, setStartSwitch] = useState(false);
  const userId = useSelector((state) => state.AUTH.selectedId);
  const [USER, setUSER] = useState({
    token: "",
    id: "",
    name: "",
    email: "",
    username: "",
    profile: "",
    userLoaded: false,
  });

  // useEffect(() => {
  //   const readySwitch = async () => {
  //     if (userId) {
  //       const data = await getSwitchUser(userId);
  //       setUser(data);

  //       if (User) {
  //         setUSER({
  //           token: User?.token,
  //           id: User?.id,
  //           name: User?.name,
  //           email: User?.email,
  //           username: User?.username,
  //           profile: User?.profile,
  //           userLoaded: true,
  //         });
  //         console.log("dataSwitch:", USER);
  //         if (USER) {
  //           dispatch(switchAccount(USER));
  //         } else {
  //           toast.success("Try again", {
  //             position: "top-center",
  //             className: "toast__alert",
  //           });
  //         }
  //       }
  //     }
  //   };
  //   readySwitch();
  // }, [userId]);

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
            className={`flex justify-between ${
              islight ? "text-black" : "text-white"
            } items-center ${
              isdark
                ? "hover:bg-neutral-800"
                : "hover:bg-neutral-500 hover:text-white"
            } p-[8px] cursor-pointer rounded-[8px]`}
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
                <p className="font-poppins">{user.name}</p>
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
