import React, { useState } from "react";
import { useDeleteModelMetrix } from "../hooks";
import { BackDrop, BottomDivider, Button, StyledInput } from "../lib";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const MetrixDeleteModel = () => {
  const metrixmodel = useDeleteModelMetrix();
  const open = metrixmodel.isOpen;
  const metrix = useSelector((state) => state.Acc.METRIX);
  const [value, setValue] = useState("");
  const [throwError, setThrowErro] = useState(false);

  function Delete() {
    if (value !== metrix.type) {
      setThrowErro(true);
      toast.error("Input your exact type", { position: "top-center" });
    } else if (value === metrix.type) {
      toast.success("Type correct", { position: "top-center" });
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
    </div>
  );

  function close() {
    metrixmodel.onClose();
  }

  return <div>{open && <BackDrop onClick={close} chaild={body} />}</div>;
};

export default MetrixDeleteModel;
