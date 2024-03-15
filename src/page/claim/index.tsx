import { Box, Button, Grid, Typography, styled } from "@mui/material";
import React from "react";

type Props = {};

const Root = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  height: "60vh",
}));
const ClaimPage = (props: Props) => {
  return (
    <Root>
      <Grid
        container
        flexDirection="row"
        alignItems="center"
        justifyContent="center"
        sx={{ p: 16 }}
      >
        <Typography variant="caption" sx={{ textAlign: "center" }}>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English.
        </Typography>
        <Button variant="contained" sx={{ mt: 3 }}>
          Connect wallet
        </Button>
      </Grid>
    </Root>
  );
};

export default ClaimPage;
