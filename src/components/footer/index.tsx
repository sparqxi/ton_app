import { AppBar, Toolbar } from '@mui/material'
import React from 'react'

type Props = {}

const Footer = (props: Props) => {
    return (
        <AppBar position='fixed' color='default' sx={{ top: 'auto', bottom: 0 }}><Toolbar>
            footer
        </Toolbar></AppBar>
    )
}

export default Footer