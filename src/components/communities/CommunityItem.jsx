import React, { useState } from "react";
import { Placeholder } from "../../assets";
import { CustomTitle } from "../../lib";
import { Link } from "react-router-dom";

const CommunityItem = ({ item }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Link
      to={`/communities/${item.slug}`}
      className="flex flex-col bg-black rounded-t-[9px] cursor-pointer rounded-b-[9px] shadow shadow-slate-500 w-[175px] max-[700px]:w-[170px] max-[320px]:w-[145px] max-[350px]:w-[150px]"
    >
      <img
        src={item.coverImg || Placeholder}
        alt="Cover"
        className="w-[175px] select-none rounded-t-[9px]"
      />
      <img
        src={item.profie || Placeholder}
        alt="Profie"
        className="w-[60px] h-[60px] select-none -translate-y-[1rem] relative border-2 border-black rounded-full"
      />
      <div className="flex flex-col p-2 relative cursor-pointer">
        <h1
          className="text-white font-kanit"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {item.name}
        </h1>
        {isHovered && <CustomTitle title={item.name} />}
      </div>
    </Link>
  );
};

export default CommunityItem;
