import React, { useEffect, useState } from "react";
import { StyledStart } from "../../styles/pages/styled";
import { AuthDivider, Button, Input, PasswordInput } from "../../lib";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { BackArrow } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { LoginUser, SignInWithGoogle } from "../../redux/auth";
import { toast } from "react-toastify";

const Login = () => {
  useEffect(() => {
    document.title = "Login - EquityEagle";
  });
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.AUTH);
  const Loading = auth.loginStatus === "loading";
  const navigate = useNavigate();

  useEffect(() => {
    if (auth.userLoaded) {
      navigate("/dashboard");
    }
  }, [auth]);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  function Login() {
    dispatch(LoginUser(user));
  }

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === "Enter") {
        dispatch(LoginUser(user));
      }
    };

    document.addEventListener("keypress", handleKeyPress);

    return () => {
      document.removeEventListener("keypress", handleKeyPress);
    };
  }, [user]);

  function handleSignIn() {
    console.log("Before signIn");
    // signIn()
    //   .then((userData) => {
    //     console.log("After signIn");
    //     if (userData) {
    //       const email = userData.email;
    //       dispatch(SignInWithGoogle(email));
    //       console.log("Logged in as:", userData);
    //     }
    //   })
    //   .catch((error) => {
    //     console.error("Sign-in error:", error);
    //   });
  }

  const g = (
    <div
      onClick={alertGoogle}
      className="flex gap-[2rem] cursor-pointer border border-white p-[12px] rounded-[4px] hover:bg-slate-700"
    >
      <FcGoogle size={25} />
      <p className="text-white select-none font-roboto">Continue with Google</p>
    </div>
  );
  const f = (
    <div
      onClick={alertGoogle}
      className="flex gap-[2rem] cursor-pointer border border-white p-[12px] rounded-[4px] hover:bg-slate-700"
    >
      <FaFacebookF className="text-blue-600" size={25} />
      <p className="text-white select-none font-roboto">
        Continue with Facebook
      </p>
    </div>
  );

  function alertGoogle() {
    toast.info(`Coming soon`, {
      position: "top-center",
      className: "toast__alert",
    });
  }

  return (
    <StyledStart>
      {/* <BackArrow className="-translate-x-[10rem]" /> */}
      <h1 className="text-white font-kanit text-[40px] max-[700px]:text-[30px]">
        Welcome back
      </h1>
      <div className="flex flex-col gap-[1rem] w-[300px]">
        <Input
          placeholder="Email address"
          type="email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <PasswordInput
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        <Button
          secondary
          text="Sign In"
          fullWidth
          Onclick={Login}
          isLoading={Loading}
          padding="10px"
          disabled={Loading}
        />
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
