import React from "react";
import { StyledSwitchModal } from "../styles/modal/styled";
import {
  useAccountSwitchModal,
  useAddAccountModal,
  useMAModal,
  useSwitchModal,
} from "../hooks";
import { AccountSwitchCon } from "../components";
import { BottomDivider } from "../lib";

const AccountSwitchModal = () => {
  const switchAccount = useAccountSwitchModal();
  const open = switchAccount.isOpen;
  const addaccountmodal = useAddAccountModal();
  const isswitchmodal = useSwitchModal();
  const mamodel = useMAModal();

  function close() {
    if (isswitchmodal.isSwitching) {
      return null;
    } else {
      switchAccount.onClose();
    }
  }

  function addaccount(e) {
    e.preventDefault();
    addaccountmodal.onOpen();
  }

  const modal = (
    <StyledSwitchModal className="shadow-slate-100 shadow">
      <div className="p-[12px] gap-3 flex flex-col">
        <AccountSwitchCon />
      </div>
      <BottomDivider />
      <div className="flex flex-col gap-0">
        <p
          onClick={addaccount}
          className="text-white font-poppins cursor-pointer p-3 hover:bg-neutral-800"
        >
          Add an exiting account
        </p>
        <p
          onClick={mamodel.onOpen}
          className="text-white font-poppins cursor-pointer p-3 hover:bg-neutral-800"
        >
          Manage accounts
        </p>
      </div>
    </StyledSwitchModal>
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

export default AccountSwitchModal;
