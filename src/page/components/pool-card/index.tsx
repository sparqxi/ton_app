import { Paper, styled, useMediaQuery, useTheme } from '@mui/material'
import React, { useEffect, useState } from 'react'
import PoolTicketCard from './pool-ticket-card'
import WinnerHistory from './winner-history'
import { getTotalPrice, getWinners } from '../../../utils/contract-function';
import { motion, AnimatePresence } from 'framer-motion';
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
  const [expand, setExpand] = useState<boolean>();

  const theme = useTheme();
  const isPhone = useMediaQuery(theme.breakpoints.down('sm'));

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

  const handleExpand = () => {
    setExpand(e => !e)
  }
  return (
    <PoolPaper>
        <PoolTicketCard isPhone = {isPhone} type={type} totalPrice={totalPrice} loading={loading} expand={expand}  handleExpand={handleExpand}/>
        <AnimatePresence>
        {isPhone ? expand && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <WinnerHistory loading={loading} address={address} />
          </motion.div>
        ) :  <WinnerHistory loading={loading} address={address} />}
      </AnimatePresence> 
    </PoolPaper>
  )
}

export default PoolCard