import * as React from "react";
import { styled } from "@mui/material/styles";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { MulButton } from "../../atom";
import "./dialogstyle.css";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

function DialogWrapper({
  children,
  handleClose,
  open,
  fullWidth = true,
  maxWidth = "md",
  title = "",
  confirmText = "Save",
  closeText = "Close",
}) {
  return (
    <BootstrapDialog
      id="dialog-wrapper"
      onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      open={open}
      maxWidth={maxWidth}
      fullWidth={fullWidth}
    >
      <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
        {title}
      </DialogTitle>
      <IconButton
        aria-label="close"
        onClick={handleClose}
        sx={{
          position: "absolute",
          right: 8,
          top: 8,
          color: (theme) => theme.palette.grey[500],
        }}
      >
        <CloseIcon />
      </IconButton>
      <DialogContent dividers>{children}</DialogContent>
      <DialogActions>
        <MulButton
          handleClick={handleClose}
          child={closeText}
          variant="contained"
        />
        <MulButton
          classes="confirm-button"
          handleClick={handleClose}
          child={confirmText}
          variant="contained"
        />
      </DialogActions>
    </BootstrapDialog>
  );
}

export { DialogWrapper };
