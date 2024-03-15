import { Box, Button, Grid, Paper, Typography, styled } from "@mui/material";
import React from "react";
import PoolSelect from "./pool-select";

type Props = {};
const Root = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.grey,
  borderRadius: 24,
//   maxWidth: 600,
  padding: "40px 60px",
}));

const ClaimInfo = (props: Props) => {
  return (
    <Grid container justifyContent="center">
        <Grid item md={6}>

    <Root elevation={0}>
      <Grid container justifyContent="space-between" mb={3}>
        <Grid item>
          <Typography variant="caption" color="text.disabled">Connect wallet:</Typography>
        </Grid>
        <Grid item>
          <Typography>UQAGpjE_yWaO7KP62vqqDH11fKGS5q3VJhfA</Typography>
        </Grid>
      </Grid>
      <Grid container justifyContent="space-between" alignItems="center" mb={3}>
        <Grid item>
          <Typography variant="caption" color="text.disabled">Pool:</Typography>
        </Grid>
        <Grid item>
          <PoolSelect/>
        </Grid>
      </Grid>
      <Grid container justifyContent="space-between" mb={3}>
        <Grid item>
          <Typography variant="caption" color="text.disabled">Winner:</Typography>
        </Grid>
        <Grid item>
          <Typography>q3VJhfA</Typography>
        </Grid>
      </Grid>
      <Grid container justifyContent="space-between" mb={3}>
        <Grid item>
          <Typography variant="caption" color="text.disabled">Total prize:</Typography>
        </Grid>
        <Grid item>
          <Typography>801TON</Typography>
        </Grid>
      </Grid>
      <Grid container justifyContent="space-between" mb={3}>
        <Grid item>
          <Typography variant="caption" color="text.disabled">Unique wallets:</Typography>
        </Grid>
        <Grid item>
          <Typography>612</Typography>
        </Grid>
      </Grid>
      <Grid container justifyContent="space-between" mb={3}>
        <Grid item>
          <Typography variant="caption" color="text.disabled">Date:</Typography>
        </Grid>
        <Grid item>
          <Typography>2023/02/08 - 18:14</Typography>
        </Grid>
      </Grid>
      <Grid container justifyContent="center">
        <Button variant="contained" color="secondary">Claim</Button>
      </Grid>
    </Root>
        </Grid>
    </Grid>
  );
};

export default ClaimInfo;
