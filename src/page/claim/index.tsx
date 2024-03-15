import { Box, Button, Grid, Typography, styled, useTheme } from "@mui/material";
import React from "react";
import ClaimInfo from "./claim-info";

type Props = {};

const Root = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  height: "60vh",
}));
const ClaimPage = (props: Props) => {
    const theme = useTheme()
  return (
    <Root>
      <Grid
        container
        flexDirection="row"
        alignItems="center"
        justifyContent="center"
        sx={{
            [theme.breakpoints.down('sm')]: {
              p: theme.spacing(2), 
            },
            [theme.breakpoints.up('md')]: {
              p: theme.spacing(8), 
            },
          }}      >
        <Typography variant="caption" sx={{ textAlign: "center",mb:3 }}>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English.
        </Typography>
        {
            true ?<ClaimInfo/>:
        <Button variant="contained" >
          Connect wallet
        </Button>
        }
      </Grid>
    </Root>
  );
};

export default ClaimPage;
