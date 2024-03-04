import React from "react";
import { useChangePasswordModal_ } from "../../../hooks";
import { useSelector } from "react-redux";
import { HiMiniArrowLeft } from "react-icons/hi2";
import { Input } from "../../../lib";

const ChangePass = ({ setPass }) => {
  const passmodal = useChangePasswordModal_();
  const systemconfig = useSelector((state) => state.SYSTEM);
  const islight = systemconfig.mode === "light";
  const user = useSelector((state) => state.AUTH);

  return (
    <div
      className={`w-full h-full ${
        islight ? "bg-neutral-500" : "bg-neutral-800"
      } rounded-tr-[7px] rounded-br-[7px] p-3`}
    >
      <div className="flex items-center gap-2">
        <HiMiniArrowLeft
          onClick={() => setPass(false)}
          size={25}
          color="#fff"
          className="cursor-pointer"
        />
        <h1 className="text-white font-kanit text-xl">Change Password</h1>
      </div>
      <div className="flex flex-col gap-4 mt-2 w-full p-2">
        <Input placeholder="Current" />
        <Input placeholder="New password" />
        <Input placeholder="Confirm password" />
      </div>
    </div>
  );
};

export default ChangePass;
