import React, { useEffect } from "react";

const NoteIcon = ({ item, className }) => {
  return (
    <>
      {item.length === 0 || item.length < 1 ? (
        ""
      ) : (
        <div
          className={`${className} absolute flex flex-col items-center justify-center p-2 rounded-full w-4 text-[12px] h-4 text-white bg-red-600 border boredr-white font-kanit`}
        >
          {item.length}
        </div>
      )}
    </>
  );
};

export default NoteIcon;
