import SettingsIcon from "@mui/icons-material/Settings";
import { Button } from "@mui/material";
import { useState } from "react";

import { Irow } from "../types";
import { BasicModal } from "./modal";

export const EditButton = ({ id, row }: { id: string; row: Irow }) => {
  const [isOpen, setIsOpen] = useState(false);

  const setOpen = () => {
    setIsOpen(true);
  };

  return (
    <>
      <Button color="inherit" onClick={setOpen}>
        {" "}
        <SettingsIcon />{" "}
      </Button>
      <BasicModal
        open={isOpen}
        setOpen={setIsOpen}
        createMode={false}
        id={id}
        row={row}
      />
    </>
  );
};
