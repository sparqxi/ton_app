import { Paper, styled } from '@mui/material'
import React, { useEffect, useState } from 'react'
import PoolTicketCard from './pool-ticket-card'
import WinnerHistory from './winner-history'
import { getTotalPrice, getWinners } from '../../../utils/contract-function';

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
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [address, setAddress] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchWinners = async () => {
      try {
        // setLoading(true);
        const address = await getWinners();
        setAddress(address ?? "");
        const total_price = await getTotalPrice();
        setTotalPrice(total_price ?? 0);
        setLoading(false);
      } catch (error) {
        console.log("err==", error);
      }
    };

    fetchWinners();
  }, []);
  return (
    <PoolPaper>
        <PoolTicketCard type={type} totalPrice={totalPrice} loading={loading}/>
        <WinnerHistory loading={loading} address = {address}/>
    </PoolPaper>
  )
}

export default PoolCard