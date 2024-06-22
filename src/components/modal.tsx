import { TextField } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { useContext } from "react";

import { Context } from "../context";
import { IModal } from "../types";
import { addData } from "../utils/add-data";
import { changeData } from "../utils/edit-data";

const style = {
  position: "absolute" as const,
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  display: "flex",
  flexDirection: "column",
  rowGap: 3,
  p: 5,
};

export const BasicModal = ({
  open,
  setOpen,
  createMode = true,
  id,
  row,
}: IModal) => {
  const { token, toogle, setToogle } = useContext(Context);
  const handleClose = () => setOpen(false);
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const inputs = {
      documentStatus: data.get("documentStatus"),
      employeeNumber: data.get("employeeNumber"),
      documentType: data.get("documentType"),
      documentName: data.get("documentName"),
      companySignatureName: data.get("companySignatureName"),
      employeeSignatureName: data.get("employeeSignatureName"),
      employeeSigDate: data.get("employeeSigDate"),
      companySigDate: data.get("companySigDate"),
    };

    if (createMode) {
      addData(token, inputs);
    } else {
      id && changeData(token, id, inputs);
    }
    setToogle(!toogle);
    handleClose();
  };

  let time = new Date().toISOString();
  time = `${time + "\t"}`;

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <form onSubmit={handleSubmit}>
          <Box sx={style}>
            <TextField
              name="documentStatus"
              label="documentStatus"
              required
              autoFocus
              defaultValue={row?.documentStatus || "Signed"}
              placeholder="signed"
            />
            <TextField
              name="employeeNumber"
              label="employeeNumber"
              required
              defaultValue={row?.employeeNumber || "1234"}
              placeholder="1234"
            />
            <TextField
              name="documentType"
              label="documentType"
              required
              defaultValue={row?.documentType || "Contract"}
              placeholder="Contract"
            />
            <TextField
              name="documentName"
              label="documentName"
              required
              defaultValue={row?.documentName || "Contract.pdf"}
              placeholder="Contract.pdf"
            />
            <TextField
              name="companySignatureName"
              label="companySignatureName"
              required
              defaultValue={row?.companySignatureName || "companyContract.sig"}
              placeholder="Contract.sig"
            />
            <TextField
              name="employeeSignatureName"
              label="employeeSignatureName"
              required
              defaultValue={
                row?.employeeSignatureName || "employeeContract.sig"
              }
              placeholder="Contract.sig"
            />
            <TextField
              name="employeeSigDate"
              label="employeeSigDate"
              required
              defaultValue={row?.employeeSigDate || time}
              placeholder={time}
            />
            <TextField
              name="companySigDate"
              label="companySigDate"
              required
              defaultValue={row?.companySigDate || time}
              placeholder={time}
            />

            <Button
              type="submit"
              variant="contained"
              color="success"
              size="large"
              fullWidth
            >
              {createMode ? "create" : "edit"}{" "}
            </Button>
          </Box>
        </form>
      </Modal>
    </div>
  );
};
