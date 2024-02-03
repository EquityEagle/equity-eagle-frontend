import React from "react";
import { Flex } from "../../styles/components/styled";
import { Placeholder } from "../../assets";
import { useNavigate } from "react-router-dom";

const SearchedUser = ({ user }) => {
  const navigate = useNavigate();
  return (
    <Flex
      className="gap-4 hover:bg-slate-800 w-full p-3 cursor-pointer"
      //   onClick={() => navigate(`/account/${user.username}`)}
    >
      <img
        src={user.profile?.url || Placeholder}
        alt="Trader profile"
        className="rounded-full w-[45px] h-[45px]"
      />
      <div className="flex flex-col text-justify">
        <p className="font-poppins text-white">{user.name}</p>
        <p className="text-neutral-400 font-kanit text-[13px]">
          @{user.username}
        </p>
      </div>
    </Flex>
  );
};

export default SearchedUser;
