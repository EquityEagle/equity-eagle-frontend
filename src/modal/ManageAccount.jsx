import React from "react";
import { BackDrop } from "../lib";
import { useMAModal } from "../hooks";
import { IoClose } from "react-icons/io5";
import { useSelector } from "react-redux";
import { MAccounts } from "../components";

const ManageAccount = () => {
  const mamodal = useMAModal();
  const open = mamodal.isOpen;
  const accounts = useSelector((state) => state.AUTH.Accounts);

  function close() {
    mamodal.onClose();
  }

  const body = (
    <div
      onClick={(e) => e.stopPropagation()}
      className="w-[400px] h-auto max-[700px]:w-[99%] max-[700px]:fixed max-[700px]:bottom-0 rounded-[8px] shadow shadow-slate-700 bg-black flex flex-col relative"
    >
      <div className="flex p-3 items-center justify-between border-b border-b-neutral-800">
        <h1 className="text-white font-poppins text-xl font-[500]">
          Manage accounts
        </h1>
        <IoClose
          size={30}
          color="white"
          onClick={close}
          className="cursor-pointer p-1 rounded-full bg-neutral-800"
        />
      </div>
      <div className="flex flex-col p-3 gap-1">
        {accounts &&
          accounts.map((account, index) => (
            <MAccounts key={index} account={account} />
          ))}
      </div>
    </div>
  );

  return <div>{open && <BackDrop onClick={close} chaild={body} />}</div>;
};

export default ManageAccount;
