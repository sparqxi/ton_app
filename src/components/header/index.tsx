import { AppBar, Box, IconButton, Toolbar } from '@mui/material'
import React from 'react'
import HeaderSwith from './hader-swith'

type Props = {}

const Header = (props: Props) => {
    return (
        <>
        <AppBar color='default' position='static' sx={{ borderRadius: 6, boxShadow: 'none', mt: 3 }} >
            <Toolbar sx={{ minHeight: '46px !important' }}>
                <img src='assets/image/logo.svg' height="15px" />
                <Box flexGrow={1} />
                <Box>
                    <IconButton>
                        <img src='assets/icon/mode.svg' height="20px" />
                    </IconButton>
                    <IconButton>
                        <img src='assets/icon/account.svg' height="20px" />
                    </IconButton>
                </Box>
            </Toolbar>
        </AppBar>
        <HeaderSwith/>
        </>
    )
}

export default Header