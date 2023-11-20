import React, { useEffect, useRef, useState } from "react";
import { IoClose } from "react-icons/io5";
import { BackDrop, BottomDivider, Button, CustomTitle } from "../lib";
import { MdAddCircleOutline } from "react-icons/md";
import { BsInfoCircleFill } from "react-icons/bs";

const EditTradeModal = ({ setOpen, open, tradeId }) => {
  const imgRef = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const [data, setData] = useState({
    tradeId: "",
    setupImg: "",
    entrySty: "",
    exitSty: "",
    comments: "",
  });

  useEffect(() => {
    setData({ ...data, tradeId: tradeId });
  }, [tradeId]);

  function handleImageUpload() {}

  const body = (
    <div className="flex flex-col bg-black relative w-[400px] shadow shadow-slate-600 max-[700px]:bottom-0 max-[700px]:fixed max-[700px]:w-full max-[700px]:rounded-b-[0] max-[700px]:rounded-t-[12px] rounded-[10px] h-[auto] z-[150]">
      <div className="flex p-[1rem] justify-between items-center">
        <h1 className="font-kanit text-[25px] text-white">Edit trade</h1>
        <IoClose
          size={35}
          color="#fff"
          onClick={() => setOpen(false)}
          className="cursor-pointer hover:bg-slate-800 p-1 rounded-full"
        />
      </div>
      <BottomDivider />
      <div className="flex flex-col mt-1 p-[6px] gap-3">
        <div className="flex-col flex gap-[6px] items-start">
          <h2 className="text-white font-kanit">Upload trade setup</h2>
          <div
            className="flex bg-slate-700 gap-1 p-2 w-full rounded-[7px] cursor-pointer"
            onClick={() => imgRef.current.click()}
          >
            <MdAddCircleOutline size={25} color="#fff" />
            <p className="text-white font-poppins">Select file</p>
          </div>
        </div>
        <div className="flex-col flex gap-[6px] items-start">
          <h2 className="text-white font-kanit">Entry strategy</h2>
          <input
            type="text"
            value={data.entrySty}
            onChange={(e) => setData({ ...data, entrySty: e.target.value })}
            disabled={isLoading}
            className="bg-slate-800 w-full outline-none caret-blue-600 text-white focus:border-blue-600 focus:border rounded-[8px] p-2"
          />
        </div>
        <div className="flex-col flex gap-[6px] items-start">
          <h2 className="text-white font-kanit">Exit strategy</h2>
          <input
            type="text"
            value={data.exitSty}
            onChange={(e) => setData({ ...data, exitSty: e.target.value })}
            disabled={isLoading}
            className="bg-slate-800 w-full outline-none caret-blue-600 text-white focus:border-blue-600 focus:border rounded-[8px] p-2"
          />
        </div>
        <div className="flex-col flex gap-[6px] items-start relative w-full">
          <div className="flex gap-1 items-center relative w-full">
            <h2 className="text-white font-kanit">Comments on trade</h2>
            <div className="flex flex-col relative w-[60%]">
              <BsInfoCircleFill
                size={15}
                color="#fff"
                className="cursor-pointer"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              />
              {isHovered && (
                <CustomTitle title="Describe pattern, time frame etc." />
              )}
            </div>
          </div>
          <input
            type="text"
            value={data.comments}
            onChange={(e) => setData({ ...data, comments: e.target.value })}
            disabled={isLoading}
            className="bg-slate-800 w-full outline-none caret-blue-600 text-white focus:border-blue-600 focus:border rounded-[8px] p-2"
          />
          <input
            type="file"
            className="hidden"
            ref={imgRef}
            onChange={handleImageUpload}
          />
        </div>
        <Button secondary text="Save" />
      </div>
    </div>
  );
  return <div>{open && <BackDrop chaild={body} />}</div>;
};

export default EditTradeModal;
