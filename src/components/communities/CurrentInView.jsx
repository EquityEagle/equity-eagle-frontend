import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { communitydata } from "../../constants/community";
import { MessageBox, ProfieViewHeader } from "../../lib";
import Messages from "./Messages";

const CurrentInView = ({ setViewProfie }) => {
  const { communityslug } = useParams();
  const community = communitydata.find((c) => c.slug === communityslug);
  const [openMenu, setOpenMenu] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    document.title = `${communityslug.toLocaleUpperCase()} | EquityEagle`;
  });
  return (
    <div
      onClick={() => setOpenMenu(false)}
      className="flex flex-col relative w-full select-none"
    >
      <ProfieViewHeader
        setViewProfie={setViewProfie}
        data={community}
        openMenu={openMenu}
        setOpenMenu={setOpenMenu}
      />
      <Messages message={message} />
      <MessageBox message={message} setMessage={setMessage} />
    </div>
  );
};

export default CurrentInView;
