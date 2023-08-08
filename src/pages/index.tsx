import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import logo from '../../public/logo.png'
import { red, lightBlue, grey, indigo, green, yellow, blueGrey } from '@mui/material/colors';
import Image from 'next/image';
import { useRouter } from 'next/router'
import Checkdata from '@/components/Checkdata';
import { motion } from "framer-motion"

type Props = {}

function index({ }: Props) {
  const router = useRouter()
  return (
    <div style={{
      backgroundImage: 'linear-gradient(180deg, rgb(119,33,214,0.33), rgb(238,18,190,0.24) ,rgb(215,94,218,0.15) ,rgb(193,77,234,0.37))',
      height: '100vh', display: 'flex', flexDirection: 'column'
    }}>

      <Checkdata />
      <Box sx={{ display: 'column', p: 2, }}>

        <Box sx={{ display: 'flex', justifyContent: 'center', my: 4  }}>
          <Image height={150} width={150} src={logo} alt='logo' priority />
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'center', my: 4 }}>
          <motion.div whileTap={{ scale: 0.9 }}>
            <Button variant="contained" onClick={() => router.push("/login")} sx={{ bgcolor: grey[50], ":hover": { bgcolor: grey[100] }, color: grey[900] }}>
              เข้าสู่ระบบ
            </Button>
          </motion.div>
        </Box>


        <Typography variant="h5" sx={{ textAlign: 'center', mb: 2 }} >
          ลงชื่อเข้าใช้งาน
        </Typography>


        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <Stack direction="row" justifyContent="center" spacing={2} sx={{ p: 1, pb: 2 }}>

            <motion.div whileTap={{ scale: 0.9 }}>
              <Button variant="contained" startIcon={<FacebookIcon sx={{ color: indigo[700] }} />} sx={{ bgcolor: grey[50], ":hover": { bgcolor: grey[100] }, color: grey[900] }}>
                Facebook
              </Button>
            </motion.div>

            <motion.div whileTap={{ scale: 0.9 }}>
              <Button variant="contained" startIcon={<GoogleIcon sx={{ color: green[700] }} />} sx={{ bgcolor: grey[50], ":hover": { bgcolor: grey[100] }, color: grey[900] }}>
                GOOGLE
              </Button>
            </motion.div>

          </Stack>
          {/* bgcolor: teal[500], ":hover": { bgcolor: teal[700] } */}
          <Stack direction="row" justifyContent="center" spacing={2} sx={{ p: 1 }}>
            <motion.div whileTap={{ scale: 0.9 }}>
              <Button variant="contained" startIcon={<AppRegistrationIcon />} onClick={() => router.push("/register")} sx={{ bgcolor: grey[50], ":hover": { bgcolor: grey[100] }, color: grey[900] }}>
                ลงทะเบียน
              </Button>
            </motion.div>
          </Stack>
        </Box>

      </Box>
    </div >
  )
}

export default index