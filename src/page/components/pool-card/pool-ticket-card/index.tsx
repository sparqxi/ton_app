import {
  Box,
  Button,
  Chip,
  Divider,
  Grid,
  LinearProgress,
  Paper,
  Typography,
  linearProgressClasses,
  styled,
} from "@mui/material";
import React, { useState } from "react";
import TicketDialog from "../ticket-dialog";

type Props = {};

type ProgressLabelProps = {
  color: string;
  // Add other props you want to pass here
};

const PoolTicketPaper = styled(Paper)(({ theme }) => ({
  borderRadius: 20,
  padding: "20px 20px",
  backgroundImage: "url(assets/image/toncoin.png)",
  backgroundRepeat: "no-repeat",
  height: "310px",
  boxShadow: "none",
}));

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 36,
  borderRadius: 18,
  marginTop: 6,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 100 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 18,
    background:
      theme.palette.mode === "light"
        ? "linear-gradient(45deg, #FFE3C5 30%, #FFAF59 100%)"
        : "#308fe8",
  },
}));

const TicketPriceBox = styled(Box)(({ theme }) => ({
  height: 36,
  borderRadius: 18,
  marginTop: 6,
  paddingRight:'12px',
  paddingLeft:'12px',
  backgroundColor:
    theme.palette.grey[theme.palette.mode === "light" ? 100 : 800],
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}));

const ProgressLabel = styled(Typography, {
  shouldForwardProp: (prop) => prop !== "color",
})<ProgressLabelProps>(({ theme, color }) => ({
  position: "absolute",
  right: "-24px",
  top: "50%",
  transform: "translate(-50%, -50%)",
  fontWeight: "bold",
  color: theme.palette.mode === "light" ? color : "white",
}));

const PoolTicketCard = (props: Props) => {
  const [open,setOpen] = useState<boolean>(false);
  return (
    <>
    <PoolTicketPaper>
      <Grid container alignItems="center">
        <Typography>Time limit pool</Typography>
        <Grid item flex={1}>
          <Divider orientation="horizontal" variant="middle" flexItem />
        </Grid>
        <Chip label="T64" />
      </Grid>
      <Box position="relative">
        <BorderLinearProgress variant="determinate" value={60} />
        <ProgressLabel color="#FFAF59" variant="body1">
          134h 12m
        </ProgressLabel>
      </Box>
      <TicketPriceBox>
        <Typography color={"text.disabled"} >Ticket price:</Typography>
        <Typography color={"text.disabled"} >0.5</Typography>
      </TicketPriceBox>
      <Box display="flex" alignItems="center" justifyContent="center" mt={2}>
        <Typography variant="subtitle1" color={"text.disabled"}>Total price:</Typography>
        <Typography variant="h1" color="textSecondary" mx={3}>
          509
        </Typography>
        <Typography variant="h6" color={"text.disabled"}>TON</Typography>
      </Box>
      <Grid container justifyContent="center" mt={2}>
        <Button variant="contained" color="secondary" onClick={() => setOpen(true)}>
          Get tickets
        </Button>
      </Grid>
    </PoolTicketPaper>
    <TicketDialog open={open} handleClose={() => setOpen(false)}></TicketDialog>
    </>
  );
};

export default PoolTicketCard;
