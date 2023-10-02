import React from "react";
import { StyledStart } from "../../styles/pages/styled";
import { AuthDivider, Button, Input, PasswordInput } from "../../lib";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";

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
      <p className="text-white font-roboto">Continue with FaceBook</p>
    </div>
  );
  return (
    <StyledStart>
      <h1 className="text-white font-kanit text-[40px]">Welcome back</h1>
      <div className="flex flex-col gap-[1rem] w-[300px]">
        <Input placeholder="Email address" type="email" />
        <PasswordInput />
        <Button secondary text="Sign In" fullWidth padding="10px" />
        <AuthDivider />
        {g}
        {f}
      </div>
    </StyledStart>
  );
};

export default Login;
