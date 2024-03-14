import { Paper, styled } from '@mui/material'
import React from 'react'
import PoolTicketCard from './pool-ticket-card'
import WinnerHistory from './winner-history'

type Props = {}

const PoolPaper = styled(Paper)(({theme}) => ({
    borderRadius:20,
    backgroundColor: theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
    boxShadow:'none',
    // padding:8
}))

const PoolCard = (props: Props) => {
    
  return (
    <PoolPaper>
        <PoolTicketCard/>
        <WinnerHistory/>
    </PoolPaper>
  )
}

export default PoolCard