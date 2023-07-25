import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { pink, grey } from '@mui/material/colors';
import AOS from 'aos';
import 'aos/dist/aos.css';
import BottomNavigationBar from '@/components/BottomNavigationBar';


import HomeIcon from '@mui/icons-material/Home';
import AddchartIcon from '@mui/icons-material/Addchart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ForumIcon from '@mui/icons-material/Forum';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import { useRouter } from 'next/router'
import Checkdata from '@/components/Checkdata';

export default function Index() {

  const [value, setValue] = useState(0);

  const router = useRouter()

  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <>
      <Checkdata />
      <Box sx={{
        height: '100%', backgroundImage: 'linear-gradient(180deg, rgb(119,33,214,0.33), rgb(238,18,190,0.24) ,rgb(215,94,218,0.15) ,rgb(193,77,234,0.37))',
        p: 2, pb: 10, display: 'flex', flexDirection: 'column', justifyContent: 'flex-start',
      }}>

        <Typography variant="h4" sx={{ pb: 6 }} data-aos="zoom-in-up">
          ช่วงอายู 0-6 เดือน
        </Typography>


        <Box sx={{ display: 'flex', justifyContent: 'center', }} data-aos="zoom-in-up">
          <Button sx={{
            bgcolor: pink["A200"], ":hover": { bgcolor: pink["A100"] },
            minWidth: '200px', height: '200px', display: 'flex', justifyContent: 'center', alignItems: 'center'
          }}
            onClick={() => router.push('/advice/detailone')}>
            <Typography variant="h4" sx={{ color: 'white' }}>
              คำแนะนำ
            </Typography>
          </Button>
        </Box>



        <Typography variant="h4" sx={{ py: 6 }} data-aos="zoom-in-up">
          ช่วงอายู 6-12 เดือน
        </Typography>


        <Box sx={{ display: 'flex', justifyContent: 'center', }} data-aos="zoom-in-up">
          <Button sx={{
            bgcolor: pink["A200"], ":hover": { bgcolor: pink["A100"] },
            minWidth: '200px', height: '200px', display: 'flex', justifyContent: 'center', alignItems: 'center'
          }}
            onClick={() => router.push('/advice/detailtwo')}>
            <Typography variant="h4" sx={{ color: 'white' }}>
              คำแนะนำ
            </Typography>
          </Button>
        </Box>

        <Typography variant="h4" sx={{ py: 6 }} data-aos="zoom-in-up">
          ช่วงอายู 1-3 ปี
        </Typography>


        <Box sx={{ display: 'flex', justifyContent: 'center', }} data-aos="zoom-in-up">
          <Button sx={{
            bgcolor: pink["A200"], ":hover": { bgcolor: pink["A100"] },
            minWidth: '200px', height: '200px', display: 'flex', justifyContent: 'center', alignItems: 'center'
          }}
            onClick={() => router.push('/advice/detailthree')}>
            <Typography variant="h4" sx={{ color: 'white' }}>
              คำแนะนำ
            </Typography>
          </Button>
        </Box>


        <Typography variant="h4" sx={{ py: 6 }} data-aos="zoom-in-up">
          ช่วงอายู 3-5 ปี
        </Typography>


        <Box sx={{ display: 'flex', justifyContent: 'center', }} data-aos="zoom-in-up">
          <Button sx={{
            bgcolor: pink["A200"], ":hover": { bgcolor: pink["A100"] },
            minWidth: '200px', height: '200px', display: 'flex', justifyContent: 'center', alignItems: 'center'
          }}
            onClick={() => router.push('/advice/detailfour')}>
            <Typography variant="h4" sx={{ color: 'white' }}>
              คำแนะนำ
            </Typography>
          </Button>
        </Box>

        <BottomNavigationBar/>
        
      </Box>
    </>
  );
}

