import { Paper, styled } from '@mui/material'
import React from 'react'
import PoolTicketCard from './pool-ticket-card'
import WinnerHistory from './winner-history'

export type IType ="time"|"prize";
type Props = {
  type:IType
}

const PoolPaper = styled(Paper)(({theme}) => ({
    borderRadius:20,
    backgroundColor: theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
    boxShadow:'none',
    // padding:8
}))

const PoolCard = ({type}: Props) => {
    
  return (
    <PoolPaper>
        <PoolTicketCard type={type}/>
        <WinnerHistory/>
    </PoolPaper>
  )
}

export default PoolCard