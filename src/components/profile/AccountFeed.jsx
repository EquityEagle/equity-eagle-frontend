import React, { useEffect, useState } from "react";
import Hero from "./user/Hero";
import { BottomDivider, Button } from "../../lib";
import { useNavigate } from "react-router-dom";
import { GoArrowLeft } from "react-icons/go";

const AccountFeed = ({ user }) => {
  const navigate = useNavigate();
  const [openProfileModal, setOpenProfileModal] = useState(false);
  const [openUpdateModal, setOpenUpdateModal] = useState(false);
  useEffect(() => {
    document.title = `@${user.username} | EquityEagle`;
  });

  return (
    <div
      className="flex flex-col w-full relative"
      onClick={() => {
        setOpenProfileModal(false);
        setOpenUpdateModal(false);
      }}
    >
      <div className="fixed bg-[rgb(0,0,0,0.5)] w-full items-center p-2 z-[100] hidden justify-between max-[700px]:flex">
        <GoArrowLeft
          size={25}
          color="#fff"
          className=""
          onClick={() => navigate(-1)}
        />
        <Button secondary text="Connect" />
      </div>
      <Hero
        openProfileModal={openProfileModal}
        setOpenProfileModal={setOpenProfileModal}
        setOpenUpdateModal={setOpenUpdateModal}
        openUpdateModal={openUpdateModal}
        user={user}
      />
      <BottomDivider />
    </div>
  );
};

export default AccountFeed;
