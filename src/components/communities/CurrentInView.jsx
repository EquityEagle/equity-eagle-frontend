import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { communitydata } from "../../constants/community";
import { Placeholder } from "../../assets";
import { MessageBox, ProfieViewHeader } from "../../lib";

const CurrentInView = () => {
  const { communityslug } = useParams();
  const community = communitydata.find((c) => c.slug === communityslug);

  useEffect(() => {
    document.title = `${communityslug.toLocaleUpperCase()} - EquityEagle`;
  });
  return (
    <div className="flex flex-col relative w-full">
      <ProfieViewHeader data={community} />
      <MessageBox />
    </div>
  );
};

export default CurrentInView;
