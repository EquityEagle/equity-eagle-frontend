import React, { useState } from "react";
import { useDeleteModelMetrix } from "../hooks";
import {
  BackDrop,
  BottomDivider,
  Button,
  ScaleInLoader,
  StyledInput,
} from "../lib";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { deleteMetrix } from "../helper/delete";

const MetrixDeleteModel = () => {
  const metrixmodel = useDeleteModelMetrix();
  const open = metrixmodel.isOpen;
  const metrix = useSelector((state) => state.Acc);
  const [value, setValue] = useState("");
  const [throwError, setThrowErro] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const accounthash = metrix.Ids;

  const del = async () => {
    setDeleting(true);
    setTimeout(() => {
      setDeleting(false);
    }, 3000);
    try {
      await deleteMetrix(accounthash);
      toast.success("Account deleted", { position: "top-center" });
      window.location = "/dashboard";
    } catch (error) {
      toast.error(error.message || error);
    } finally {
      setDeleting(false);
    }
  };

  function Delete() {
    if (value !== metrix.METRIX.type) {
      setThrowErro(true);
      toast.error("Input your exact type", { position: "top-center" });
    } else if (value === metrix.METRIX.type) {
      toast.success("Type correct", { position: "top-center" });
      del();
    }
  }

  const body = (
    <div
      onClick={(e) => e.stopPropagation()}
      className="flex bg-black flex-col shadow shadow-slate-600 w-[300px] rounded-[9px]"
    >
      <h1 className="text-white font-kanit text-[20px] text-center p-4">
        Confirm account delete
      </h1>
      <BottomDivider />
      <div className="flex flex-col p-4 w-full gap-3">
        <StyledInput
          label="Confirm account type"
          type="text"
          error={throwError}
          hasInfo
          title="Prop firm, or free-trail"
          width="150px"
          titleClass="top-3 -left-3"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <Button secondary text="Delete" Onclick={Delete} />
      </div>

      {deleting && <BackDrop chaild={<ScaleInLoader />} />}
    </div>
  );

  function close() {
    metrixmodel.onClose();
  }

  return <div>{open && <BackDrop onClick={close} chaild={body} />}</div>;
};

export default MetrixDeleteModel;
