import React, { useEffect, useState } from "react";
import { BackDrop, ScaleInLoader } from "../lib";
import { MdOutlineFileDownloadDone } from "react-icons/md";
import { usePassCodeCheckModal, useSwitchModal } from "../hooks";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { switchAccount } from "../redux/auth";

const PassCodeCheck = () => {
  const passcheckmodal = usePassCodeCheckModal();
  const open = passcheckmodal.isOpen;
  const [checking, setChecking] = useState(false);
  const [code, setCode] = useState("");
  const [checked, setChecked] = useState(false);
  const authState = useSelector((state) => state.AUTH);
  const Accounts = authState.Accounts;
  const Id = authState.selectedId;
  const pendingUser = Accounts.find((user) => user.id === Id);
  const dispatch = useDispatch();
  const isswitchmodal = useSwitchModal();

  function close() {
    passcheckmodal.onClose();
  }

  useEffect(() => {
    if (code) {
      setChecking(true);
    } else if (!code) {
      setChecking(false);
    }

    // checking
    if (code.length === 6) {
      if (pendingUser.passcode === code) {
        toast.success("Correct code", { position: "top-center" });
        setChecking(false);
        setChecked(true);
        setTimeout(() => {
          setChecked(false);
          setCode("");
          close();
          dispatch(switchAccount(pendingUser));
          isswitchmodal.onSwitch();
        }, 4000);
      } else {
        toast.error("Incorrect code", { position: "top-center" });
        setChecking(false);
      }
    }
  }, [code]);

  const body = (
    <div
      onClick={(e) => e.stopPropagation()}
      className={`w-[350px] h-auto p-3 max-[700px]:w-[90%] bg-black shadow shadow-slate-700 rounded-[8px] gap-2 flex flex-col items-center justify-center`}
    >
      {checked ? (
        <div className="flex flex-col items-center gap-3">
          <MdOutlineFileDownloadDone
            color="blue"
            size={80}
            className="p-2 rounded-full border-blue-600 border-[3px]"
          />
          <p className="text-white font-[500]">
            Code validated, Welcome back @{pendingUser.username}
          </p>
        </div>
      ) : (
        <>
          <h1 className="text-white font-poppins font-[500] text-center ">
            Enter your 6-digit access code
          </h1>
          <input
            type="password"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="p-3 rounded-[8px] bg-slate-800 w-full border-none caret-blue-500 outline-none text-blue-500"
          />
          {checking && <ScaleInLoader />}
        </>
      )}
    </div>
  );
  return <div>{open && <BackDrop onClick={close} chaild={body} />}</div>;
};

export default PassCodeCheck;
