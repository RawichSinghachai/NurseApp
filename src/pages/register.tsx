import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import moment from 'moment';
import axios from 'axios';
import { pink } from '@mui/material/colors';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Checkdata from '@/components/Checkdata';



type Props = {}

export default function register({ }: Props) {

    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const [babybirthday, setBabyirthday] = useState(null);

    const [form, setForm] = useState({
        parentname: '',
        relation: '',
        phone: '',
        password: '',
        babyname: '',
        babyage: '',
        babysex: '',
        babybirthday: '',
    })

    const handleChange = (e: any) => {
        setForm({
            ...form, [e.target.name]: e.target.value
        })
    };

    const formattedDate = moment(babybirthday).format('L');

    const handleSubmit = async (e: any) => {
        e.preventDefault()
        await axios.post(`${process.env.NEXT_PUBLIC_URL}/api/users/register`,
            { ...form, babybirthday: formattedDate })
            .then(() => {
                setForm({
                    parentname: '',
                    relation: '',
                    phone: '',
                    password: '',
                    babyname: '',
                    babyage: '',
                    babysex: '',
                    babybirthday: '',
                })
                setBabyirthday(null)
            })

    }

    return (
        <div >
            <Checkdata />
            <Box sx={{
                display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundImage: 'linear-gradient(180deg, rgb(119,33,214,0.33), rgb(238,18,190,0.24) ,rgb(215,94,218,0.15) ,rgb(193,77,234,0.37))',
                height: '100%', p: 2
            }}>

                <Box sx={{ pb: 2, mt: 2 }}>
                    <Stack direction="row" justifyContent="flex-start">
                        <AccountCircleIcon sx={{ fontSize: '40px', pr: 1 }} />
                        <Typography variant='h4'>สมัครสมาชิก</Typography>
                    </Stack>
                </Box>

                <form autoComplete='off' onSubmit={handleSubmit}>
                    <Paper sx={{
                        display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
                        p: 4, borderRadius: 2
                    }}>
                        {/* padding paper large 4 small 2 */}
                        <TextField label="ขื่อ-นามสกุล" variant="outlined" sx={{ pb: 2 }} name='parentname' value={form.parentname} onChange={handleChange} />

                        <Select
                            value={form.relation}
                            name='relation'
                            onChange={handleChange}
                            displayEmpty
                            inputProps={{ 'aria-label': 'Without label' }}
                            sx={{ width: '248px', }}
                        >
                            <MenuItem value="">
                                <em>สถานะผู้ปกครอง</em>
                            </MenuItem>
                            <MenuItem value={'พ่อ'}>พ่อ</MenuItem>
                            <MenuItem value={'แม่'}>แม่</MenuItem>
                            <MenuItem value={'อื่นๆ'}>อื่นๆ</MenuItem>
                        </Select>

                        <TextField label="เบอร์โทรศัพท์" variant="outlined" sx={{ my: 2 }} name='phone' value={form.phone} onChange={handleChange} />

                        <TextField label="รหัสผ่าน" variant="outlined" sx={{ mb: 2 }} name='password' value={form.password} onChange={handleChange} />

                        <Typography variant='h6' sx={{ py: 2 }}>AND</Typography>

                        <TextField label="ขื่อ-นามสกุล" variant="outlined" sx={{ pb: 2 }} name='babyname' value={form.babyname} onChange={handleChange} />

                        <TextField label="อายุ" variant="outlined" sx={{ pb: 2 }} name='babyage' value={form.babyage} onChange={handleChange} />

                        <Select
                            value={form.babysex}
                            name='babysex'
                            onChange={handleChange}
                            displayEmpty
                            inputProps={{ 'aria-label': 'Without label' }}
                            sx={{ width: '248px', mb: 2 }}
                        >
                            <MenuItem value="">
                                <em>เพศ</em>
                            </MenuItem>
                            <MenuItem value={'ชาย'}>ชาย</MenuItem>
                            <MenuItem value={'หญิง'}>หญิง</MenuItem>
                        </Select>

                        <LocalizationProvider dateAdapter={AdapterMoment} >
                            <DatePicker value={babybirthday} onChange={(newValue) => setBabyirthday(newValue)} sx={{ width: '248px', }} />
                        </LocalizationProvider>
                    </Paper>
                </form>

                <Stack direction="row" justifyContent="center">
                    <Button variant="contained" sx={{ my: 4, bgcolor: pink["A200"], ":hover": { bgcolor: pink["A100"] } }} type='submit' >
                        Confirm
                    </Button>
                </Stack>



            </Box>
        </div>
    )
}
