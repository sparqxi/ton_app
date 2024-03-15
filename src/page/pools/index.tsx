import { Grid } from '@mui/material'
import React from 'react'
import PoolCard from '../components/pool-card'

type Props = {}

const PoolsPage = (props: Props) => {
  return (
    <Grid container spacing={6}>
    <Grid item md={6} sm={12} xs={12} >
      <PoolCard />
    </Grid>
    <Grid item md={6} sm={12} xs={12}>
      <PoolCard />
    </Grid>
  </Grid>
  )
}

export default PoolsPage