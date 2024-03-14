import React from "react";
import PoolCard from "./components/pool-card";
import { Grid } from "@mui/material";

type Props = {};

const Page = (props: Props) => {
  return (
    <Grid container spacing={6}>
      <Grid item md={6} sm={12} xs={12} >
        <PoolCard />
      </Grid>
      <Grid item md={6} sm={12} xs={12}>
        <PoolCard />
      </Grid>
    </Grid>
  );
};

export default Page;
