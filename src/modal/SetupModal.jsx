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
  console.log("setupdata:", data);

  useEffect(() => {
    if (value) {
      setData({ ...data, pair: value });
    }
    if (typeclick) {
      setData({ ...data, type: typeclick });
    }
  }, [value, typeclick]);

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
  }

  const bodyContent = (
    <div className="flex flex-col transition-all duration-1000 h-[auto] w-[500px] max-[700px]:w-[90%] bg-black shadow shadow-slate-600">
      <div className="flex p-[12px] gap-[1rem] items-center">
        <MdKeyboardArrowLeft
          size={35}
          color="#fff"
          onClick={backModal}
          className="cursor-pointer hover:bg-slate-800 p-1 rounded-full"
        />
        <h1 className="font-kanit text-[22px] text-white">Share Setup</h1>
      </div>
      <div className="bg-neutral-500 h-[1px] w-full" />
      <div className="flex flex-col p-[12px] gap-[1rem] items-center hide-scroll overflow-y-auto">
        <div className="flex gap-[10px] max-[800px]:flex-col">
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
          className="bg-blue-100 w-full h-[300px] rounded-[7px] cursor-pointer flex flex-col items-center justify-center"
        >
          {photo ? (
            <img className="w-full h-full rounded-[7px]" src={photo} />
          ) : (
            <>
              <MdPhotoCamera size={25} />
              <p className="font-kanit">Select photo</p>
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
          sx={{ fontFamily: "'Kanit', sans-serif", width: "100%" }}
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
