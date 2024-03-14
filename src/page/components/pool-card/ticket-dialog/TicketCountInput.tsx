import { Box, Input, InputBase, styled } from '@mui/material'
import React from 'react'

type Props = {}

const Root = styled(Box)(({theme}) => ({
    borderRadius:20,
    backgroundColor:theme.palette.mode ==='dark'?theme.palette.grey[700]:"#fff",
    display:'flex',
    padding:8
}))

const TicketCountInput = (props: Props) => {
  return (
    <Root>
        <img src="assets/icon/ton.svg" alt="ton" style={{marginRight:'8px'}}/>
        <InputBase type='number' fullWidth/>
        <Box sx={{ml:2}}>
            <img src="assets/icon/up.svg" alt="up" style={{cursor:'pointer'}}/>
            <img src="assets/icon/down.svg" alt="down" style={{cursor:'pointer'}}/>
        </Box>
        
    </Root>
  )
}

export default TicketCountInput