import React from "react";
import { StyledNav } from "../../styles/components/styled";
import Logo from "./Logo";
import { navlinksdata } from "../../constants/nav";
import { Link } from "react-router-dom";
import { Button, ClickOpacity } from "../../lib";
import { IoMenuSharp } from "react-icons/io5";

const Navbar = () => {
  return (
    <StyledNav>
      <Logo />
      <div className="flex gap-[1rem] items-center max-[800px]:hidden">
        {navlinksdata.map((item, index) => (
          <Link to={item.link}>
            <p className="text-white font-kanit hover:opacity-70">
              {item.text}
            </p>
          </Link>
        ))}
        <Button text="Sign In" primary />
        <Link to="/get-started">
          <Button text="Sign Up" secondary />
        </Link>
      </div>
      <ClickOpacity
        className="hidden max-[800px]:block"
        child={
          <IoMenuSharp className="cursor-pointer" color="#fff" size={30} />
        }
      />
    </StyledNav>
  );
};

export default Navbar;
