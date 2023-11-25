import React from "react";
import { BsArrowLeftShort } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const BackArrow = ({ className, isTrade, setOpenTrade, title }) => {
  const navigate = useNavigate();

  function back() {
    navigate(-1);
  }
  function closeTrade() {
    setOpenTrade(false);
  }
  return (
    <div
      onClick={isTrade ? closeTrade : back}
      className={`${className} flex gap-5`}
    >
      <BsArrowLeftShort size={30} color="#fff" className="cursor-pointer" />
      <h2 className="text-white font-kanit">{title}</h2>
    </div>
  );
};

export default BackArrow;
