import React, { useState } from "react";
import { Placeholder } from "../../assets";
import { CustomTitle } from "../../lib";
import { Link } from "react-router-dom";
// import { formatDate } from "../../lib/functions";

const CommunityItem = ({ item }) => {
  const [isHovered, setIsHovered] = useState(false);
  // const timestamp = new Date(item.createdAt);
  // const formattedDate = formatDate(timestamp);

  return (
    <Link
      to={`/communities/${item.slug}`}
      className="flex gap-[1rem] p-[10px] items-center hover:bg-slate-800 border-b border-b-black cursor-pointer w-full"
    >
      <img
        src={item.profie || Placeholder}
        alt="Profie"
        className="w-[60px] h-[60px] select-none relative border-2 border-black rounded-full"
      />
      <div className="flex flex-col relative cursor-pointer">
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
