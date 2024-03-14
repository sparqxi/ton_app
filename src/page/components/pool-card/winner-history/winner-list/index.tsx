import { Box, Grid, Typography, styled } from "@mui/material";
import React from "react";

type Props = {};

const WinnerItemBox = styled(Box)(({ theme }) => ({
  borderRadius: 8,
  backgroundColor:  theme.palette.grey[theme.palette.mode === "light" ? 100 : 800],
  padding: "4px 12px",
  marginTop: 2,
}));

const WinnerItem = (props: Props) => {
  return (
    <WinnerItemBox>
      <Grid container justifyContent="space-between" alignItems="center">
        <Grid item>

        <Grid  container alignItems="center" spacing={1}>
          <Grid item>
            <Typography variant="caption">12123...34343</Typography>
          </Grid>
          <Grid item>
            <img
              src="assets/icon/external-link.svg"
              alt="link"
              style={{ verticalAlign: "middle",cursor:'pointer' }}
            />
          </Grid>
        </Grid>
        </Grid>
        <Grid item>
          <Typography variant="body2">518TON</Typography>
        </Grid>
      </Grid>
    </WinnerItemBox>
  );
};

export default WinnerItem;
