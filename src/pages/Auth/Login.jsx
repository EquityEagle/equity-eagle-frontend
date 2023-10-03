import React from "react";
import { StyledStart } from "../../styles/pages/styled";
import { AuthDivider, Button, Input, PasswordInput } from "../../lib";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";
import { BackArrow } from "../../components";

const Login = () => {
  const g = (
    <div className="flex gap-[2rem] cursor-pointer border border-white p-[12px] rounded-[4px] hover:bg-slate-700">
      <FcGoogle size={25} />
      <p className="text-white font-roboto">Continue with Google</p>
    </div>
  );
  const f = (
    <div className="flex gap-[2rem] cursor-pointer border border-white p-[12px] rounded-[4px] hover:bg-slate-700">
      <FaFacebookF className="text-blue-600" size={25} />
      <p className="text-white font-roboto">Continue with Facebook</p>
    </div>
  );
  return (
    <StyledStart>
      {/* <BackArrow className="-translate-x-[10rem]" /> */}
      <h1 className="text-white font-kanit text-[40px] max-[700px]:text-[30px]">
        Welcome back
      </h1>
      <div className="flex flex-col gap-[1rem] w-[300px]">
        <Input placeholder="Email address" type="email" />
        <PasswordInput />
        <Button secondary text="Sign In" fullWidth padding="10px" />
        <div className="flex gap-2 justify-center">
          <p className="text-white font-roboto">Don't have an account?</p>
          <Link
            to="/auth/sign-up"
            className="text-blue-600 hover:underline font-poppins"
          >
            Sign Up
          </Link>
        </div>
        <AuthDivider />
        {g}
        {f}
      </div>
    </StyledStart>
  );
};

export default Login;
