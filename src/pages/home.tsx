import React,{useState} from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '@/stores/store';
import axios from 'axios';
import { pink } from '@mui/material/colors';



import HomeIcon from '@mui/icons-material/Home';
import AddchartIcon from '@mui/icons-material/Addchart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ForumIcon from '@mui/icons-material/Forum';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


import { useRouter } from 'next/router'
import Checkdata from '@/components/Checkdata';

export default function Home() {

  const [value, setValue] = useState(0);

  const userdata = useSelector((state: RootState) => state.UserDataStore)

  const handleClick = async() => {
    await axios.post(`${process.env.NEXT_PUBLIC_URL}/api/device/create`,{id:userdata.id})
  }

  const router = useRouter()
  return (
    <>
    <Checkdata/>
      <Box sx={{
        height: '100vh', pb: 20, backgroundImage: 'linear-gradient(180deg, rgb(119,33,214,0.33), rgb(238,18,190,0.24) ,rgb(215,94,218,0.15) ,rgb(193,77,234,0.37))',
        display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'
      }}>

        <Box sx={{
          width: '200px', height: '100px', bgcolor: 'white', borderRadius: 4,
          display: 'flex', justifyContent: 'center', alignItems: 'center', 
        }}>
          <Typography variant="h6" sx={{ textAlign: 'center' }}>
            จับน้องยื่นขึ้น
          </Typography>
        </Box>

        <Box sx={{ bgcolor: 'white', height: '50px' ,my: 4}}>
          image
        </Box>

        <Button variant="contained" sx={{bgcolor: pink["A200"], ":hover": { bgcolor: pink["A100"] }}} onClick={()=>handleClick()}>
          Calculate
        </Button>



        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
          <BottomNavigation
            showLabels
            value={0}
            onChange={(event, newValue) => setValue(newValue)}
          >
            <BottomNavigationAction label="เครื่องชั้ง" icon={<HomeIcon />} onClick={() => { router.push('/home') }} />
            <BottomNavigationAction label="แปลผล" icon={<AddchartIcon />} onClick={() => { router.push('/display') }} />
            <BottomNavigationAction label="คำแนะนำ" icon={<FavoriteIcon />} onClick={() => { router.push('/advice') }} />
            <BottomNavigationAction label="ติดต่อเรา" icon={<ForumIcon />} />
            <BottomNavigationAction label="โปรไฟล์" icon={<AccountCircleIcon />} onClick={() => { router.push('/profile') }} />
          </BottomNavigation>
        </Paper>
      </Box>
    </>
  );
}

