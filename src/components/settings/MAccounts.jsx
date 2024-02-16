import React, { useState } from "react";
import { Placeholder } from "../../assets";
// import { FaLock } from "react-icons/fa";
import { CustomTitle } from "../../lib";
import { MdDelete } from "react-icons/md";
import { useLockModal } from "../../hooks";
import { FaLockOpen, FaLock } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { setLock } from "../../redux/auth";

const MAccounts = ({ account }) => {
  const [islockHover, setIsLockHover] = useState(false);
  const [isDeleteHover, setIsDeleteHover] = useState(false);
  const lockmodal = useLockModal();
  const dispatch = useDispatch();

  function processLock() {
    lockmodal.onOpen();
    dispatch(setLock(account));
  }
  return (
    <div className="flex justify-between items-center hover:bg-neutral-800 p-[8px] cursor-pointer rounded-[8px]">
      <div className="flex relative gap-3">
        <img
          src={account?.profile?.url || Placeholder}
          alt="User"
          className="w-[45px] h-[45px] rounded-full"
        />
        <div className="flex flex-col">
          <p className="text-white font-poppins">{account.name}</p>
          <p className="text-neutral-400 text-[14px] font-poppins">
            @{account.username}
          </p>
        </div>
      </div>

      <div className="flex items-center relative gap-9">
        {account.passcode ? (
          <div className="flex flex-col relative">
            <FaLock
              size={20}
              color="green"
              className="cursor-pointer"
              //   onClick={processLock}
              onMouseEnter={() => setIsLockHover(true)}
              onMouseLeave={() => setIsLockHover(false)}
            />
            {islockHover && (
              <CustomTitle
                title="Account secured"
                width="100px"
                className="-left-7"
              />
            )}
          </div>
        ) : (
          <div className="flex flex-col relative">
            <FaLockOpen
              size={20}
              color="yellow"
              className="cursor-pointer"
              onClick={processLock}
              onMouseEnter={() => setIsLockHover(true)}
              onMouseLeave={() => setIsLockHover(false)}
            />
            {islockHover && (
              <CustomTitle
                title="Lock account"
                width="80px"
                className="-left-7"
              />
            )}
          </div>
        )}
        <div className="flex flex-col relative">
          <MdDelete
            size={23}
            color="red"
            className="cursor-pointer"
            onMouseEnter={() => setIsDeleteHover(true)}
            onMouseLeave={() => setIsDeleteHover(false)}
          />
          {isDeleteHover && (
            <CustomTitle
              title="Remove account"
              width="100px"
              className="-left-7"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default MAccounts;
