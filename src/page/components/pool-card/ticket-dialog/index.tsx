import {
  Box,
  Button,
  Dialog,
  Divider,
  Grid,
  Typography,
  styled,
} from "@mui/material";
import React from "react";
import TicketCountInput from "./TicketCountInput";

type Props = {
  open: boolean;
  handleClose: () => void;
};

const TicketDialog = ({ open, handleClose }: Props) => {
  // TODO: background of dialog
  return (
    <Dialog
      open={open}
      PaperProps={{
        sx: { padding: 6, borderRadius: 8, backgroundColor: "#F9FAFE" },
      }}
      onClose={handleClose}
      fullWidth
      maxWidth="xs"
    >
      <img
        src="assets/icon/close 1.svg"
        alt="close"
        style={{ position: "absolute", top: "20px", right: "30px" }}
      />
      <TicketCountInput />
      <Grid container alignItems="center" mt={2}>
        <Typography color={"text.disabled"}>Ticket price</Typography>
        <Grid item flex={1}>
          <Divider orientation="horizontal" variant="middle" flexItem />
        </Grid>
        <Typography>0.5 TON</Typography>
      </Grid>
      <Grid container alignItems="center" mt={2}>
        <Typography color={"text.disabled"}>Total price</Typography>
        <Grid item flex={1}>
          <Divider orientation="horizontal" variant="middle" flexItem />
        </Grid>
        <Typography>9 TON</Typography>
      </Grid>
      <Grid container justifyContent="center" mt={4}>
        <Button variant="contained" color="secondary">
          Get ticket
        </Button>
      </Grid>
    </Dialog>
  );
};

export default TicketDialog;
