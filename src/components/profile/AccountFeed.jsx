import React, { useEffect, useState } from "react";
import Hero from "./user/Hero";
import { BottomDivider, Button } from "../../lib";
import { useNavigate } from "react-router-dom";
import { GoArrowLeft } from "react-icons/go";
import { ConnectUser } from "../../helper/post";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const AccountFeed = ({ user, isLoading }) => {
  const navigate = useNavigate();
  const [openProfileModal, setOpenProfileModal] = useState(false);
  const [openUpdateModal, setOpenUpdateModal] = useState(false);
  const [Loading, setIsLoading] = useState(false);
  const userId = user._id;
  const connectorsId = useSelector((state) => state.AUTH.id);
  useEffect(() => {
    document.title = `${
      isLoading ? "Loading..." : `@${user.username} `
    }| EquityEagle`;
  });

  async function connect() {
    try {
      setIsLoading(true);
      await ConnectUser(userId, connectorsId);
    } catch (error) {
      toast.error(error.message, {
        position: "top-center",
        className: "toast__alert",
      });
    } finally {
      toast.success(`Success`, {
        position: "top-center",
        className: "toast__alert",
      });
      setIsLoading(false);
    }
  }

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
        <Button
          secondary
          text="Connect"
          isLoading={Loading}
          disabled={Loading}
          Onclick={connect}
        />
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
