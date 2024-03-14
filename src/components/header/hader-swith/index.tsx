import { Button, Grid, Paper, styled } from '@mui/material'
import React, { useState } from 'react'

type Props = {}
export type PagesList = 'pools' | 'claim';
const HeaderSwith = (props: Props) => {
    const [page, setPage] = useState<PagesList>('pools')
    const SwitchPaper = styled(Paper)(({ theme }) => ({
        borderRadius: 20,
        boxShadow:'none'
    }))
    return (
        <Grid container justifyContent="center" sx={{ my: 6 }}>
            <SwitchPaper>
                <Button variant={page === "pools" ? "contained" : "text"} onClick={() => setPage('pools')} >Pools</Button>
                <Button variant={page === "claim" ? "contained" : "text"} onClick={() => setPage('claim')}>Claim</Button>
            </SwitchPaper>
        </Grid>
    )
}

export default HeaderSwith