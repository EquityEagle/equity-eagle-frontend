import React, { useState } from "react";
import { BackDrop, BottomDivider } from "../../../lib";
import ProfileUpdateModal from "./ProfileUpdateModal";

const ProfileModal = ({ open, closeModal, setOpenUpdateModal }) => {
  const body = (
    <div className="flex flex-col bg-neutral-700 rounded-[9px] w-[280px] fixed h-auto pt-2 pb-2 shadow shadow-slate-600">
      <p className="p-3 cursor-pointer font-poppins text-white hover:bg-neutral-900">
        View profile photo
      </p>
      <BottomDivider />
      <p
        onClick={(e) => {
          e.stopPropagation();
          setOpenUpdateModal(true);
          closeModal(false);
        }}
        className="p-3 cursor-pointer font-poppins text-white hover:bg-neutral-900"
      >
        Updated profile photo
      </p>
    </div>
  );
  return <>{open && <BackDrop chaild={body} />}</>;
};

export default ProfileModal;
