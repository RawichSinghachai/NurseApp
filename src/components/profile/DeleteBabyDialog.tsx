import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { grey, red } from "@mui/material/colors";

type Props = {
  open: boolean;
  handleClose: () => void;
  handleConfirm: () => void;
  babyName: string;
};

const DeleteBabyDialog = ({
  open,
  handleClose,
  handleConfirm,
  babyName,
}: Props) => {
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Confirm Deletion</DialogTitle>
      <DialogContent>
        <Typography variant="subtitle1">
          Are you sure you want to delete the profile of{" "}
          <strong>{babyName}</strong>? This action cannot be undone.
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button
          variant="contained"
          sx={{
            color: grey[900],
            bgcolor: grey[300],
            ":hover": { bgcolor: grey[400] },
          }}
          onClick={handleClose}
        >
          Cancel
        </Button>
        <Button
          variant="contained"
          type="submit"
          sx={{
            bgcolor: red["A400"],
            ":hover": { bgcolor: red["A700"] },
          }}
          onClick={handleConfirm}
        >
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteBabyDialog;
