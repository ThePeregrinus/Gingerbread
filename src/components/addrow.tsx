import { Button } from "@mui/material";
import { useState } from "react";

import { BasicModal } from "./modal";

export const AddRow = () => {
  const [isOpen, setIsOpen] = useState(false);

  const setOpen = () => {
    setIsOpen(true);
  };

  return (
    <>
      <Button color="inherit" onClick={setOpen}>
        Add new row
      </Button>
      <BasicModal open={isOpen} setOpen={setIsOpen} />
    </>
  );
};
