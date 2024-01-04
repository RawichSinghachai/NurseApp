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
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import { motion } from "framer-motion"
import Modal from '@mui/material/Modal';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import { lightGreen, red, pink ,grey} from '@mui/material/colors';
import useEnhancedEffect from '@mui/material/utils/useEnhancedEffect';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 300,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    py: 4,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
};

type Props = {}

export default function login({ }: Props) {

    const router = useRouter()
    const { guest } = router.query;
    

    const [openSuccess, setOpenSuccess] = React.useState(false);
    const [openFaild, setOpenFaild] = React.useState(false);

    const handleOpenSuccess = () => {
        setOpenSuccess(true);
        setTimeout(() => {
            handleCloseSuccess()
        }, 1000);
    }

    const handleCloseSuccess = () => {
        setOpenSuccess(false);
        setForm({
            phone: '',
            password: '',
        })
        router.push('/home')
    }

    const handleOpenFaild = () => {
        setOpenFaild(true);
        setTimeout(() => {
            handleCloseFaild()
        }, 1000);
    }

    const handleCloseFaild = () => {
        setOpenFaild(false);
    }

    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);


    const [form, setForm] = useState({
        phone: '',
        password: '',
    })

    const handleChange = (e: any) => {
        setForm({
            ...form, [e.target.name]: e.target.value
        })
    }

    useEffect(() => {
        if(guest){
            setForm({...form,phone:'123456',password:'123456'})
        }
    }, [])
    


    const handlesubmit = async (e: any) => {
        e.preventDefault()
        await axios.post(`${process.env.NEXT_PUBLIC_URL}/api/users/login`, {
            ...form
        }).then((value) => {

            if (value.data.token) {
                sessionStorage.setItem('token', value.data.token)
            }

            if (value.data.status === 'login success') {
                handleOpenSuccess()
            }
            if (value.data.status === 'login faild') {
                handleOpenFaild()
            }

        })
            .catch(() => {
                console.log('login fail');
            })
    }



    return (
        <div style={{
            backgroundImage: 'linear-gradient(180deg, rgb(119,33,214,0.33), rgb(238,18,190,0.24) ,rgb(215,94,218,0.15) ,rgb(193,77,234,0.37))',
            height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '16px'
        }}>

            <Checkdata />
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4,mb:8 }}>
                <Image height={200} width={200} src={logo} alt='logo' priority />
            </Box>

            <Box sx={{
                bgcolor: 'white', display: 'flex', justifyContent: 'center',
                borderRadius: 4, p: 4, mb: 4,
            }}>
                
                <form autoComplete='off' onSubmit={handlesubmit}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} >

                        <TextField label="เบอร์โทรศัพท์" variant="outlined" 
                        sx={{ width: '240px', mb: 2 }} name='phone' 
                        onChange={handleChange} 
                        defaultValue={guest?'123456':''}/>

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
                                defaultValue={guest?'123456':''}
                            />
                        </FormControl>

                        <motion.div whileTap={{ scale: 0.9 }}>
                            <Button variant="contained" sx={{ width: '240px', mb: 2, bgcolor: pink["A200"], ":hover": { bgcolor: pink["A100"] } }} type='submit'>
                                เข้าสู่ระบบ
                            </Button>
                        </motion.div>
                    </Box>
                </form>

                <Modal
                    open={openSuccess}
                    onClose={handleCloseSuccess}
                >
                    <Box sx={style}>
                        <CheckIcon sx={{ fontSize: 70, color:grey[50],bgcolor: lightGreen['A400'], borderRadius: '50%', p: 2, mb: 2 }} />
                        <Typography variant="h5" >
                            Login Success
                        </Typography>
                    </Box>
                </Modal>

                <Modal
                    open={openFaild}
                    onClose={handleCloseFaild}
                >
                    <Box sx={style}>
                        <ClearIcon sx={{ fontSize: 70,color:grey[50], bgcolor: red['A400'], borderRadius: '50%', p: 2, mb: 2 }} />
                        <Typography variant="h5" >
                            Login Faild
                        </Typography>
                    </Box>
                </Modal>

            </Box>
        </div>
    )
}