import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import logo from '../../public/logo.png'
import Image from 'next/image';
import Checkdata from '@/components/Checkdata';
import axios from 'axios';
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux';
import type { RootState } from '@/stores/store';
import { pink } from '@mui/material/colors';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import { motion } from "framer-motion"

type Props = {}

export default function login({ }: Props) {

    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const router = useRouter()
    const [form, setForm] = useState({
        phone: '',
        password: '',
    })

    const handleChange = (e: any) => {
        setForm({
            ...form, [e.target.name]: e.target.value
        })
    }

    const handlesubmit = async (e: any) => {
        e.preventDefault()
        await axios.post(`${process.env.NEXT_PUBLIC_URL}/api/users/login`, {
            ...form
        }).then((value) => {
            if (value.data.token) {
                sessionStorage.setItem('token', value.data.token)
            }
            setForm({
                phone: '',
                password: '',
            })
            router.push('/home')
        })
            .catch(() => {
                console.log('login fail');
            })
    }



    return (
        <div style={{
            backgroundImage: 'linear-gradient(180deg, rgb(119,33,214,0.33), rgb(238,18,190,0.24) ,rgb(215,94,218,0.15) ,rgb(193,77,234,0.37))',
            height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '16px'
        }}>

            <Checkdata />
            <Box sx={{ display: 'flex', justifyContent: 'center', my: 2 }}>
                <Image height={300} width={300} src={logo} alt='logo' priority />
            </Box>

            <Box sx={{
                bgcolor: 'white', display: 'flex', justifyContent: 'center',
                borderRadius: 4, p: 4, mb: 4
            }}>

                <form autoComplete='off' onSubmit={handlesubmit}>
                    <Box sx={{display:'flex',flexDirection:'column',alignItems:'center'}} >
                        <TextField label="เบอร์โทรศัพท์" variant="outlined" sx={{ width: '240px', mb: 2 }} name='phone' onChange={handleChange} />

                        <FormControl sx={{ width: '240px', mb: 2 }} variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-password">รหัสผ่าน</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-password"
                                name='password'
                                type={showPassword ? 'text' : 'password'}
                                onChange={handleChange}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            edge="end"
                                        >
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                label="Password"
                            />
                        </FormControl>

                        <motion.div whileTap={{ scale: 0.9 }}>
                            <Button variant="contained" sx={{ width:'240px',mb: 2, bgcolor: pink["A200"], ":hover": { bgcolor: pink["A100"] } }} type='submit'>
                                เข้าสู่ระบบ
                            </Button>
                        </motion.div>
                    </Box>
                </form>

            </Box>
        </div>
    )
}