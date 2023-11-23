import React, { useRef, useState } from "react";
import { BackDrop, Button } from "../../../lib";
import { IoMdAddCircleOutline } from "react-icons/io";
import { MdCancel } from "react-icons/md";
import { IoClose } from "react-icons/io5";

const ProfileUpdateModal = ({ open, keepOpen }) => {
  const [photo, setPhoto] = useState(null);
  const imgRef = useRef();

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
        // setData({ ...data, image: reader.result });
      };
    } else {
      setPhoto("");
    }
  }

  const body = (
    <div className="flex flex-col bg-neutral-700 rounded-[9px] w-[280px] z-[200] fixed h-auto p-2 shadow shadow-slate-600">
      {photo ? (
        <div className="flex flex-col gap-3 relative">
          <IoClose
            size={30}
            onClick={(e) => {
              e.stopPropagation();
              setPhoto("");
            }}
            className="cursor-pointer absolute right-2 top-2 p-1 bg-black rounded-full hover:opacity-75"
            color="#fff"
          />
          <img
            src={photo}
            onClick={(e) => {
              e.stopPropagation();
              imgRef.current.click();
              keepOpen(true);
            }}
            alt="Selected photo"
            className="rounded-[9px] cursor-pointer"
          />
          <Button secondary text="Save" />
        </div>
      ) : (
        <div
          className="flex gap-2 cursor-pointer items-center p-3 hover:bg-neutral-900 rounded-[7px]"
          onClick={(e) => {
            e.stopPropagation();
            imgRef.current.click();
            keepOpen(true);
          }}
        >
          <IoMdAddCircleOutline size={25} color="#fff" />
          <p className="text-white font-poppins">Select photo</p>
        </div>
      )}
      <input
        type="file"
        ref={imgRef}
        className="hidden"
        onChange={handleImage}
      />
    </div>
  );
  return <div>{open && <BackDrop chaild={body} />}</div>;
};

export default ProfileUpdateModal;
