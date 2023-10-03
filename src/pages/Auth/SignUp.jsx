import React from "react";
import { StyledStart } from "../../styles/pages/styled";
import { AuthDivider, Button, Input, PasswordInput } from "../../lib";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";

const SignUp = () => {
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
      <h1 className="text-white font-kanit text-[40px] mt-[2rem] max-[700px]:text-[30px]">
        Create your account
      </h1>
      <div className="flex flex-col gap-[1rem] w-[300px]">
        <Input placeholder="Email address" type="email" />
        <Input placeholder="Username" type="text" />
        <PasswordInput />
        <Button secondary text="Sign Up" fullWidth padding="10px" />
        <div className="flex gap-2 justify-center">
          <p className="text-white font-roboto">Already have an account? </p>
          <Link
            to="/auth/login"
            className="text-blue-600 hover:underline font-poppins"
          >
            Login
          </Link>
        </div>
        <AuthDivider />
        {g}
        {f}
      </div>
    </StyledStart>
  );
};

export default SignUp;
