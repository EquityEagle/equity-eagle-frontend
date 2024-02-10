import React, { useEffect, useState } from "react";
import { useAddAccountModal } from "../hooks";
import { BackDrop, BottomDivider, Button } from "../lib";
import { IoClose } from "react-icons/io5";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { AddUser } from "../redux/auth";
import { toast } from "react-toastify";

const AddAccountModal = () => {
  const addaccountmodal = useAddAccountModal();
  const open = addaccountmodal.isOpen;
  const [visible, setVisible] = useState(false);
  const authState = useSelector((state) => state.AUTH);
  const isLoading = authState.add_status === "Loading";
  const dispatch = useDispatch();

  function handleToggleVisibility() {
    setVisible(!visible);
  }

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  function close() {
    if (isLoading) {
      return null;
    }
    addaccountmodal.onClose();
  }

  function Add() {
    if (authState.email === data.email) {
      toast.info("You can't add same account", {
        position: "top-center",
        className: "toast__alert",
      });
    } else {
      dispatch(AddUser(data));
      setTimeout(() => {
        setData({ email: "", password: "" });
      }, 2000);
    }
  }

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === "Enter") {
        if (authState.email === data.email) {
          toast.info("You can't add same account", {
            position: "top-center",
            className: "toast__alert",
          });
        } else {
          dispatch(AddUser(data));
          setTimeout(() => {
            setData({ email: "", password: "" });
          }, 2000);
        }
      }
    };

    document.addEventListener("keypress", handleKeyPress);

    return () => {
      document.removeEventListener("keypress", handleKeyPress);
    };
  }, [data, dispatch, authState.email]);

  const body = (
    <div className="flex flex-col relative bg-black shadow shadow-white rounded-[8px] w-[300px] h-[300px] max-[1024px]:w-[500px] max-[700px]:w-[90%]">
      <div className="flex justify-between items-center p-[12px] bg-">
        <h1 className="text-white font-poppins text-[20px] font-[500] text-center">
          Add account
        </h1>
        <IoClose
          size={35}
          className="cursor-pointer bg-neutral-700 p-2 rounded-full"
          color="white"
          onClick={close}
        />
      </div>
      <BottomDivider />
      <div className="flex flex-col items-center justify-center w-full h-full p-2 gap-4">
        <div className="flex flex-col w-full gap-[2px]">
          <p className="text-white font-kanit">Email</p>
          <input
            type="text"
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
            className="bg-slate-700 p-[10px] text-white rounded-[8px] border-none outline-none w-full"
          />
        </div>
        <div className="flex flex-col w-full gap-[2px]">
          <p className="text-white font-kanit">Password</p>
          <div className="flex items-center justify-between p-[5px] bg-slate-700 rounded-[8px] w-full">
            <input
              type={visible ? "text" : "password"}
              value={data.password}
              onChange={(e) => setData({ ...data, password: e.target.value })}
              className="p-[5px] text-white border-none outline-none bg-transparent w-full"
            />
            <div
              className="text-[25px] cursor-pointer"
              onClick={handleToggleVisibility}
            >
              {visible ? <FaEyeSlash color="white" /> : <FaEye color="white" />}
            </div>
          </div>
        </div>
        <Button
          secondary
          text="Add"
          fullWidth
          Onclick={Add}
          isLoading={isLoading}
        />
      </div>
    </div>
  );

  return <div>{open && <BackDrop chaild={body} />}</div>;
};

export default AddAccountModal;
