import React, { useEffect, useState } from "react";
import { StyledStart } from "../../styles/pages/styled";
import { AuthDivider, Button, Input, PasswordInput } from "../../lib";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RegUser } from "../../redux/auth";

const SignUp = () => {
  useEffect(() => {
    document.title = "Sign Up - EquityEagle";
  });
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.AUTH);
  const Loading = auth.regStatus === "loading";
  const navigate = useNavigate();

  useEffect(() => {
    if (auth.userLoaded) {
      navigate("/dashboard");
    }
  }, [auth]);

  const [user, setUser] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
  });

  function SignUp() {
    dispatch(RegUser(user));
  }
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
    <StyledStart className="translate-y-[2.5rem]">
      <h1 className="text-white font-kanit text-[40px] mt-[2rem] max-[700px]:text-[30px]">
        Create your account
      </h1>
      <div className="flex flex-col gap-[1rem] w-[300px]">
        <Input
          placeholder="Name"
          value={user.name}
          onChange={(e) => setUser({ ...user, name: e.target.value })}
          type="text"
        />
        <Input
          placeholder="Email address"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          type="email"
        />
        <Input
          placeholder="Username"
          value={user.username}
          onChange={(e) => setUser({ ...user, username: e.target.value })}
          type="text"
        />
        <PasswordInput
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        <Button
          secondary
          text="Sign Up"
          fullWidth
          padding="10px"
          isLoading={Loading}
          disabled={Loading}
          Onclick={SignUp}
        />
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
