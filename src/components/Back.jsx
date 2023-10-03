import React from "react";
import { BsArrowLeftShort } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const BackArrow = ({ className }) => {
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate(-1)} className={`${className}`}>
      <BsArrowLeftShort size={25} color="#fff" className="cursor-pointer" />
    </div>
  );
};

export default BackArrow;
