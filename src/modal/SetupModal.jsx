import React, { useEffect, useRef, useState } from "react";
import { useCreateModal, useSetupModal } from "../hooks";
import {
  BackDrop,
  Button,
  PairOptions,
  SelectOption,
  TypeOptions,
} from "../lib";
import { MdKeyboardArrowLeft, MdPhotoCamera } from "react-icons/md";
import { traded } from "../constants/pairs";
import { type } from "../constants";
import { Textarea } from "@mui/joy";
import { useDispatch, useSelector } from "react-redux";
import { SelectOptionII } from "../lib/components/SelectOption";
import { publishSetup } from "../redux/setup";

const SetupModal = () => {
  const setupmodal = useSetupModal();
  const createmodal = useCreateModal();
  const auth = useSelector((state) => state.AUTH);
  const setup = useSelector((state) => state.SETUPS);
  const isLoading = setup.PUBLISH_STATUS === "loading";
  const close = setup.PUBLISH_STATUS === "success";
  const systemconfig = useSelector((state) => state.SYSTEM);
  const islight = systemconfig.mode === "light";
  const isdark = systemconfig.mode === "dark";
  const imgRef = useRef();
  const open = setupmodal.isOpen;
  const dispatch = useDispatch();
  function backModal() {
    setupmodal.onClose();
    createmodal.onOpen();
  }

  const [typeclick, setTypeClick] = useState("");
  const [value, setValue] = useState("");
  const [data, setData] = useState({
    desc: "",
    image: "",
    video: "",
    pair: "",
    type: "",
    userId: auth.id,
  });
  // console.log("ideas-data:", data);

  const [photo, setPhoto] = useState("");

  useEffect(() => {
    if (value) {
      setData({ ...data, image: photo });
    }
  }, [data, photo, value]);

  useEffect(() => {
    if (typeclick) {
      setData({ ...data, type: typeclick });
    }
  }, [data, typeclick]);

  useEffect(() => {
    if (value) {
      setData({ ...data, pair: value });
    }
  }, [value, data]);

  useEffect(() => {
    if (photo) {
      setData({ ...data, image: photo });
    }
  }, [photo, data]);

  const handleImage = (e) => {
    const file = e.target.files[0];
    TransFormFile(file);
  };
  function TransFormFile(file) {
    const reader = new FileReader();
    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setPhoto(reader.result);
        setData({ ...data, image: reader.result });
      };
    } else {
      setPhoto("");
    }
  }

  function shareSetup() {
    dispatch(publishSetup(data));
    setTimeout(() => {
      // if (close) {
      setupmodal.onClose();
      // }
    }, 4000);
  }

  const bodyContent = (
    <div
      className={`flex flex-col ${islight ? "bg-white" : "bg-black"} ${
        islight ? "shadow-black" : "shadow-slate-600"
      } w-[400px] shadow max-[700px]:bottom-0 max-[700px]:fixed max-[700px]:w-full max-[700px]:rounded-b-[0] max-[700px]:rounded-t-[12px] rounded-[10px] h-[auto] z-[150]`}
    >
      <div className="flex p-[12px] gap-[1rem] items-center">
        <MdKeyboardArrowLeft
          size={35}
          color={islight ? "#000" : "#fff"}
          onClick={backModal}
          className={`cursor-pointer ${
            islight ? "hover:bg-slate-600 text-white" : "hover:bg-slate-800"
          } p-1 rounded-full`}
        />
        <h1
          className={`font-kanit text-[22px] ${
            islight ? "text-black" : "text-white"
          }`}
        >
          Share Idea
        </h1>
      </div>
      <div className="bg-neutral-500 h-[1px] w-full" />
      <div className="flex flex-col p-[12px] gap-[1rem] items-center w-full hide-scroll overflow-y-auto">
        <div className="flex flex-col gap-[10px] w-full">
          <PairOptions data={data} setData={setData} />
          <TypeOptions data={data} setData={setData} />
        </div>
        <div
          onClick={() => imgRef.current?.click()}
          className="bg-slate-800 w-full h-[300px] rounded-[7px] cursor-pointer flex flex-col items-center justify-center"
        >
          {photo ? (
            <img
              className="w-full h-full rounded-[7px]"
              src={photo}
              alt="Selected"
            />
          ) : (
            <>
              <MdPhotoCamera size={25} color="#fff" />
              <p className="font-kanit text-white">Select photo</p>
            </>
          )}
        </div>
        <input
          type="file"
          ref={imgRef}
          className="hidden"
          onChange={handleImage}
        />
        <Textarea
          color="primary"
          minRows={2}
          variant="soft"
          size="lg"
          sx={{
            fontFamily: "'Roboto', sans-serif",
            width: "100%",
            background: "rgb(30 41 59)",
            color: "#fff",
          }}
          placeholder="Description..."
          value={data.desc}
          onChange={(e) => setData({ ...data, desc: e.target.value })}
          disabled={isLoading}
        />
        <Button
          text="Share"
          fullWidth
          secondary={isdark}
          light={islight}
          isLoading={isLoading}
          disabled={isLoading}
          Onclick={shareSetup}
        />
      </div>
    </div>
  );
  return <>{open && <BackDrop open={open} chaild={bodyContent} />}</>;
};

export default SetupModal;
