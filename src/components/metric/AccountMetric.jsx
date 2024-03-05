import React from "react";
import AccountMetrixItem from "./AccountMetrixItem";
import { useSelector } from "react-redux";

const AccountMetric = () => {
  const data = useSelector((state) => state.Acc);
  const accounts = data.ACCOUNTS;

  return (
    <div className="flex-col gap-[1.5rem] flex relative w-full">
      {accounts &&
        accounts?.map((item, index) => (
          <AccountMetrixItem item={item} key={index} />
        ))}
    </div>
  );
};

export default AccountMetric;
