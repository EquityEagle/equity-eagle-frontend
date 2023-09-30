import React from "react";
import { Link } from "react-router-dom";
import { EquityEagleLogo } from "../../assets";

const Logo = () => {
  return (
    <Link to="/">
      <img
        src={EquityEagleLogo}
        alt="EuityEagle Logo"
        className="w-[120px] max-[700px]:w-[100px]"
      />
    </Link>
  );
};

export default Logo;
