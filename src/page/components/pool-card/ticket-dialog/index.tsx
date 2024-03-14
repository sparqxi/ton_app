import { Box, Dialog, styled } from '@mui/material'
import React from 'react'
import TicketCountInput from './TicketCountInput'

type Props = {
    open:boolean
    handleClose : () =>void
}



const TicketDialog = ({open,handleClose}: Props) => {
  return (
    <Dialog open={open} PaperProps={{sx:{padding:'18px',borderRadius:8,backgroundColor:'#F9FAFE'}}} onClose={handleClose} fullWidth maxWidth="xs">
        <img src='assets/icon/close 1.svg' alt="close" style ={{position:'absolute',top:'20px',right:'30px'}}/>
        <TicketCountInput/>
    </Dialog>
  )
}

export default TicketDialog