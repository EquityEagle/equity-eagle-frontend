import React, { useState } from "react";
import { useLockModal } from "../hooks";
import { BackDrop, Button, ScaleInLoader } from "../lib";
import { useDispatch, useSelector } from "react-redux";
import { lockAccount } from "../redux/auth";
import { MdOutlineFileDownloadDone } from "react-icons/md";

const LockAccount = () => {
  const lockmodal = useLockModal();
  const open = lockmodal.isOpen;
  const [code, setCode] = useState("");
  const dispatch = useDispatch();
  const [locking, setLocking] = useState(false);
  const [locked, setLocked] = useState(false);
  const lockId = useSelector((state) => state.AUTH.lockId);

  function close() {
    lockmodal.onClose();
  }

  const lockData = {
    code: code,
    id: lockId,
  };

  function lock() {
    setLocking(true);
    setTimeout(() => {
      dispatch(lockAccount(lockData));
      setLocking(false);
      setLocked(true);
    }, 3000);
    setTimeout(() => {
      setLocked(false);
      setCode("");
      close();
    }, 5000);
  }

  const body = (
    <div
      onClick={(e) => e.stopPropagation()}
      className={`w-[350px] h-auto p-3 max-[700px]:w-[90%] bg-black shadow shadow-slate-700 rounded-[8px] gap-2 flex flex-col items-center justify-center`}
    >
      {locking ? (
        <ScaleInLoader />
      ) : locked ? (
        <div className="flex flex-col items-center gap-3">
          <MdOutlineFileDownloadDone
            color="blue"
            size={80}
            className="p-2 rounded-full border-blue-600 border-[3px]"
          />
          <p className="text-white font-[500]">Account secured</p>
        </div>
      ) : (
        <>
          <h1 className="text-white font-poppins font-[500] text-center ">
            Set your 6-digit secure code
          </h1>
          <input
            type="password"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="p-3 rounded-[8px] bg-slate-800 w-full border-none caret-blue-500 outline-none text-blue-500"
          />
          <Button Onclick={lock} text="Save" secondary fullWidth />
        </>
      )}
    </div>
  );

  return <div>{open && <BackDrop onClick={close} chaild={body} />}</div>;
};

export default LockAccount;
