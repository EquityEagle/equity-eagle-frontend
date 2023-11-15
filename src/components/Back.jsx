import React from "react";
import { BsArrowLeftShort } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const BackArrow = ({ className, isTrade, setOpenTrade }) => {
  const navigate = useNavigate();

  function back() {
    navigate(-1);
  }
  function closeTrade() {
    setOpenTrade(false);
  }
  return (
    <div onClick={isTrade ? closeTrade : back} className={`${className}`}>
      <BsArrowLeftShort size={30} color="#fff" className="cursor-pointer" />
    </div>
  );
};

export default BackArrow;
