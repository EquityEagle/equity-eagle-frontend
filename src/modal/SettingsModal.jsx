import React, { useState } from "react";
import { useSettingsModal } from "../hooks";
import {
  AccountContainer,
  // Accounts,
  Help,
  Nav,
  NotificationsNav,
  Personalization,
  Privacy,
  StorageAndData,
} from "../components";
import { useSelector } from "react-redux";

const SettingsModal = () => {
  const settingmodal = useSettingsModal();
  const open = settingmodal.isOpen;
  const [accounts, setAccounts] = useState(true);
  const [privacy, setPrivacy] = useState(false);
  const [noti, setNoti] = useState(false);
  const [storage, setStorage] = useState(false);
  const [help, setHelp] = useState(false);
  const [personal, setPersonal] = useState(false);

  const systemconfig = useSelector((state) => state.SYSTEM);
  const islight = systemconfig.mode === "light";
  const isdark = systemconfig.mode === "dark";

  function close() {
    settingmodal.onClose();
  }

  const modal = (
    <div
      onClick={(e) => e.stopPropagation()}
      className={`w-[500px] h-[400px] flex gap-2 rounded-[8px] ${
        islight ? "bg-white shadow-black" : "bg-black shadow-slate-700"
      } fixed shadow left-5 bottom-[1rem]`}
    >
      <Nav
        account={accounts}
        privacy={privacy}
        noti={noti}
        storage={storage}
        help={help}
        personal={personal}
        setAccount={setAccounts}
        setHelp={setHelp}
        setNoti={setNoti}
        setPersonal={setPersonal}
        setPrivacy={setPrivacy}
        setStorage={setStorage}
      />
      {accounts && <AccountContainer />}
      {privacy && <Privacy />}
      {noti && <NotificationsNav />}
      {personal && <Personalization />}
      {storage && <StorageAndData />}
      {help && <Help />}
    </div>
  );
  return (
    <div>
      {open && (
        <div onClick={close} className="fixed z-[100] w-full top-0 bottom-0">
          {modal}
        </div>
      )}
    </div>
  );
};

export default SettingsModal;
