import DeleteIcon from "@mui/icons-material/Delete";
import { Button } from "@mui/material";
import { useContext } from "react";

import { Context } from "../context";
import { deleteData } from "../utils/delete-data";

export const DeleteButton = ({ id }: { id: string }) => {
  const { token, toogle, setToogle } = useContext(Context);

  const handleClick = () => {
    deleteData(token, id);
    setToogle(!toogle);
  };

  return (
    <Button color="inherit" onClick={handleClick}>
      {" "}
      <DeleteIcon />{" "}
    </Button>
  );
};
