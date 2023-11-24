import React, { useEffect, useRef, useState } from "react";
import { BottomDivider, Button, CustomTitle } from "../../lib";
import { FlexBetween } from "../../styles/Global";
import { Placeholder } from "../../assets";
import { useDispatch, useSelector } from "react-redux";
import { commentSetup } from "../../redux/setup";
import { GoImage } from "react-icons/go";
import { FaFileAudio, FaFileVideo, FaVideo } from "react-icons/fa";
import { AiFillAudio } from "react-icons/ai";
import { RiEmojiStickerFill } from "react-icons/ri";
import { getUserById } from "../../helper/fetch";
import { IoClose } from "react-icons/io5";

const Comments = ({ item }) => {
  const auth = useSelector((state) => state.AUTH);
  const load = useSelector((state) => state.SETUPS);
  const loading = load.COMMENT_STATUS === "loading";
  const [isHovered, setIsHovered] = useState(false);
  const [isPhotoHovered, setIsPhotoHovered] = useState(false);
  const [isVideoHovered, setIsVideoHovered] = useState(false);
  const [isAudioHovered, setIsAudioHovered] = useState(false);
  const [isEmojiHovered, setIsEmojiHovered] = useState(false);
  const [photo, setPhoto] = useState("");
  const imgRef = useRef();
  const dispatch = useDispatch();
  const [data, setData] = useState({
    setupId: item._id,
    userId: auth.id,
    desc: "",
    image: "",
  });

  async function share() {
    dispatch(commentSetup(data));
    setTimeout(() => {
      setData({ ...data, desc: "" });
      setPhoto("");
    }, 3000);
  }

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

  return (
    <div className="flex flex-col gap-[1rem] relative">
      <BottomDivider />
      <FlexBetween className="p-2 gap-1">
        <img
          src={auth.profile?.url || Placeholder}
          alt="User Image"
          className="w-[50px] h-[50px] rounded-full"
        />
        <input
          type="text"
          value={data.desc}
          onChange={(e) => setData({ ...data, desc: e.target.value })}
          placeholder="Leave a comment"
          className="bg-transparent p-2 text-white font-roboto outline-none w-full"
        />
      </FlexBetween>
      {photo && (
        <div className="flex flex-col items-center justify-center relative w-full">
          <img
            src={photo}
            alt="Selected Image"
            className="rounded-[15px] w-[85%] h-[500px] max-[700px]:h-[400px]"
          />
          <div className="flex flex-col top-[10px] gap-3 items-center right-[4rem] z-[100] absolute">
            <IoClose
              className="p-1 cursor-pointer rounded-full bg-slate-800"
              color="#fff"
              size={30}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onClick={() => setPhoto("")}
            />

            {isHovered && <CustomTitle title="Remove" />}
          </div>
        </div>
      )}
      <FlexBetween className="p-2">
        <div className="flex items-center gap-[1rem]">
          <div className="flex flex-col w-full">
            <GoImage
              className="text-blue-500 cursor-pointer"
              size={20}
              onMouseEnter={() => setIsPhotoHovered(true)}
              onMouseLeave={() => setIsPhotoHovered(false)}
              onClick={() => imgRef.current.click()}
            />
            {isPhotoHovered && (
              <CustomTitle title="Add Photo" className="top-[38px]" />
            )}
          </div>
          <div className="flex flex-col w-full">
            <FaVideo
              className="text-blue-500 cursor-pointer"
              size={20}
              onMouseEnter={() => setIsVideoHovered(true)}
              onMouseLeave={() => setIsVideoHovered(false)}
            />
            {isVideoHovered && (
              <CustomTitle title="Video" className="top-[38px]" />
            )}
          </div>
          <div className="flex flex-col w-full">
            <AiFillAudio
              className="text-blue-500 cursor-pointer"
              size={20}
              onMouseEnter={() => setIsAudioHovered(true)}
              onMouseLeave={() => setIsAudioHovered(false)}
            />
            {isAudioHovered && (
              <CustomTitle title="Audio" className="top-[38px]" />
            )}
          </div>
          <div className="flex flex-col w-full">
            <RiEmojiStickerFill
              className="text-blue-500 cursor-pointer"
              size={20}
              onMouseEnter={() => setIsEmojiHovered(true)}
              onMouseLeave={() => setIsEmojiHovered(false)}
            />
            {isEmojiHovered && (
              <CustomTitle title="Emoji" className="top-[38px]" />
            )}
          </div>
        </div>
        <Button
          secondary
          text="Reply"
          width="100px"
          Onclick={share}
          isLoading={loading}
          disabled={loading || !data.desc}
        />
      </FlexBetween>
      <input
        type="file"
        className="hidden"
        ref={imgRef}
        onChange={handleImage}
      />
    </div>
  );
};

export default Comments;
