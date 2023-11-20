import React, { useEffect, useRef, useState } from "react";
import { useCreateModal, useSetupModal } from "../hooks";
import { BackDrop, Button, SelectOption } from "../lib";
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

  useEffect(() => {
    if (value) {
      setData({ ...data, pair: value });
    }
    if (typeclick) {
      setData({ ...data, type: typeclick });
    }
  }, [value, typeclick, data]);

  const [photo, setPhoto] = useState("");
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
      if (close) {
        setupmodal.onClose();
      }
    }, 4000);
  }

  const bodyContent = (
    // <div className="flex flex-col transition-all duration-1000 h-[auto] w-[500px] max-[700px]:w-[90%] bg-black shadow shadow-slate-600">
    <div className="flex flex-col bg-black w-[400px] shadow shadow-slate-600 max-[700px]:bottom-0 max-[700px]:fixed max-[700px]:w-full max-[700px]:rounded-b-[0] max-[700px]:rounded-t-[12px] rounded-[10px] h-[auto] z-[150]">
      <div className="flex p-[12px] gap-[1rem] items-center">
        <MdKeyboardArrowLeft
          size={35}
          color="#fff"
          onClick={backModal}
          className="cursor-pointer hover:bg-slate-800 p-1 rounded-full"
        />
        <h1 className="font-kanit text-[22px] text-white">Share Idea</h1>
      </div>
      <div className="bg-neutral-500 h-[1px] w-full" />
      <div className="flex flex-col p-[12px] gap-[1rem] items-center w-full hide-scroll overflow-y-auto">
        <div className="flex flex-col gap-[10px] w-full">
          <SelectOption
            placeholder="Select pair"
            data={traded}
            setValue={setValue}
          />
          <SelectOptionII
            placeholder="Setup type"
            data={type}
            setTypeClick={setTypeClick}
          />
        </div>
        <div
          onClick={() => imgRef.current?.click()}
          className="bg-slate-800 w-full h-[300px] rounded-[7px] cursor-pointer flex flex-col items-center justify-center"
        >
          {photo ? (
            <img className="w-full h-full rounded-[7px]" src={photo} />
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
            fontFamily: "'Kanit', sans-serif",
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
          secondary
          fullWidth
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
