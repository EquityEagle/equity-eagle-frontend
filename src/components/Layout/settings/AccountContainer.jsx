import React, { useEffect, useState } from "react";
import Accounts from "./Accounts";
import AccountInfo from "./AccountInfo";
import ChangePass from "./ChangePass";

const AccountContainer = () => {
  const [main, setMain] = useState(true);
  const [info, setInfo] = useState(false);
  const [pass, setPass] = useState(false);

  useEffect(() => {
    if (info || pass) {
      setMain(false);
    } else {
      setMain(true);
    }
  }, [info, pass]);
  return (
    <>
      {main && <Accounts setInfo={setInfo} setPass={setPass} />}
      {info && <AccountInfo setInfo={setInfo} />}
      {pass && <ChangePass setPass={setPass} />}
    </>
  );
};

export default AccountContainer;
