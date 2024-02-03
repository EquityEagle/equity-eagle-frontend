import React from "react";
// import BackArrow from "../Back";
import { useSelector } from "react-redux";
import { FixedHeader, ScaleInLoader } from "../../lib";
import ConnectWithTraders from "./ConnectWithTraders";
import { useUserSearchModal } from "../../hooks";

const ConnectWith = () => {
  const userState = useSelector((state) => state.USERS);
  const traders = userState.TRADES;
  const isLoading = userState.FETCH_STATUS === "Pending";
  const usersearch = useUserSearchModal();
  const userId = useSelector((state) => state.AUTH.id);
  return (
    <div className="flex flex-col relative w-full">
      <FixedHeader hasSearchBar barClick={() => usersearch.onOpen()} />
      <div className="flex flex-col mt-12 w-full relative">
        {isLoading ? (
          <ScaleInLoader className="translate-y-36" />
        ) : (
          traders &&
          traders
            .filter((user) => user._id !== userId)
            .map((user, index) => (
              <ConnectWithTraders user={user} key={index} />
            ))
        )}
      </div>
    </div>
  );
};

export default ConnectWith;
