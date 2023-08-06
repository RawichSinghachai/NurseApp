import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '@/stores/store';
import axios from 'axios';
import { pink } from '@mui/material/colors';
import Checkdata from '@/components/Checkdata';
import BottomNavigationBar from '@/components/BottomNavigationBar';
import Image from 'next/image';
import qoogle from '../../public/qoogle.png'
import { motion } from "framer-motion"


export default function Home() {

  const userdata = useSelector((state: RootState) => state.UserDataStore)

  const handleClick = async () => {
    await axios.post(`${process.env.NEXT_PUBLIC_URL}/api/device/create`, { id: userdata.id })
  }

  return (
    <>
      <Checkdata />
      <Box sx={{
        height: '100vh', pb: 20, backgroundImage: 'linear-gradient(180deg, rgb(119,33,214,0.33), rgb(238,18,190,0.24) ,rgb(215,94,218,0.15) ,rgb(193,77,234,0.37))',
        display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'
      }}>

        <Box sx={{
          maxWidth: '300px', height: '100px', bgcolor: 'white', borderRadius: 4,
          display: 'flex', justifyContent: 'center', alignItems: 'center',px:2
        }}>
          <Typography variant="h6" sx={{ textAlign: 'center' }}>
            ให้เด็กนอน/ยืนบนเครื่องชั่ง
          </Typography>
        </Box>

        <Box sx={{ my: 4 }}>
          <motion.div animate={{ y: [0, 20, 0,] }} transition={{ repeat: Infinity }}>
            <Image src={qoogle} alt='qoogle' width={300} height={300} />
          </motion.div>
        </Box>

        <motion.div whileTap={{ scale: 0.9 }}>
          <Button variant="contained" sx={{ bgcolor: pink["A200"], ":hover": { bgcolor: pink["A100"] } }} onClick={() => handleClick()}>
            Confirm
          </Button>
        </motion.div>

        <BottomNavigationBar />

      </Box>
    </>
  );
}

