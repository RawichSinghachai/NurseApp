import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '@/stores/store';
import axios from 'axios';
import { pink } from '@mui/material/colors';
import { useRouter } from 'next/router'
import Checkdata from '@/components/Checkdata';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Skeleton from '@mui/material/Skeleton';
import BottomNavigationBar from '@/components/BottomNavigationBar';
import { motion } from "framer-motion"

type Props = {}

export default function profile({ }: Props) {

    const [value, setValue] = useState(0);
    const [data, setData] = useState({
        _id: "",
        parentname: "",
        relation: "",
        phone: "",
        password: "",
        babyname: "",
        babyage: "",
        babybirthday: "",
        babysex: "",
        height: [],
        weight: [],
        datetocheck: [],
        registerdate: ""
    })

    const router = useRouter()
    const userdata = useSelector((state: RootState) => state.UserDataStore)

    const handleLogOut = () => {
        sessionStorage.removeItem('token')
        router.push('/')
    }

    const getData = async () => {
        await axios.get(`${process.env.NEXT_PUBLIC_URL}/api/users/${userdata.id}`)
            .then((value: any) => setData(value.data))
    }

    useEffect(() => {
        if (userdata.id) {
            getData()
        }
    }, [userdata.id])


    return (
        <>
            <Checkdata />
            <Box sx={{
                height: '100%', backgroundImage: 'linear-gradient(180deg, rgb(119,33,214,0.33), rgb(238,18,190,0.24) ,rgb(215,94,218,0.15) ,rgb(193,77,234,0.37))',
                pb: 20, display: 'flex', flexDirection: 'column', p: 2
            }}>

                <Box>
                    <Typography variant="h4" sx={{ mr: 2 }}>
                        บัญชี
                    </Typography>
                    <Paper sx={{ bgcolor: 'white', p: 2, borderRadius: 4, mt: 2, display: 'flex', alignItems: 'center' }}>
                        <AccountCircleIcon sx={{ fontSize: '40px', mr: 2 }} />
                        <Typography variant="h5" >
                            {data.parentname ? data.parentname : <Skeleton animation="wave" width={100} height={40} />}
                        </Typography>

                    </Paper>
                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'flex-end', pt: 4, }}>
                    <Typography variant="h6" >
                        +เพิ่มทารก
                    </Typography>
                </Box>


                <Box sx={{ bgcolor: 'white', p: 1, mb: 4, borderRadius: 4, maxWidth: "1400px" }}>
                    <Stack direction="row" justifyContent="flex-start" sx={{ mb: 1 }}>
                        <AccountCircleIcon sx={{ fontSize: '40px', mr: 2 }} />
                        <Typography variant="h4" sx={{mr:2}}>
                            {data.babyname ? data.babyname : <Skeleton animation="wave" width={100} height={40} />}
                        </Typography>

                        <Typography variant="h4" >
                            {data.babyage ? `อายุ:${data.babyage}ปี` : <Skeleton animation="wave" width={100} height={40} />}
                        </Typography>
                    </Stack>
                    <Divider sx={{ bgcolor: 'black', mt: 2 }} />


                    {data && data.height.map((value, index) => {
                        return <Box key={index}>
                            <Stack direction="row" justifyContent="space-evenly" sx={{ mt: 1 }}>
                                <Stack direction="column" justifyContent="flex-start" >
                                    <Typography variant="subtitle1">
                                        {data.datetocheck[index] ? `ตรวจครั้งที่ ${index + 1} วันที่ ${data.datetocheck[index]}` : <Skeleton animation="wave" width={100} height={40} />}
                                    </Typography>
                                </Stack>

                                <Stack direction="column" justifyContent="space-evenly" >
                                    <Typography variant="subtitle1">
                                        ส่วนสูง {data.height[index]} cm
                                    </Typography>

                                    <Typography variant="subtitle1">
                                        น้ำหนัก {data.weight[index]} kg
                                    </Typography>
                                    {/* <Typography variant="subtitle1">น้ำหนัก 40 kg</Typography> */}
                                </Stack>
                            </Stack>

                            {index + 1 === data.height.length ? <></> : <Divider sx={{ bgcolor: 'black', mt: 2 }} />}
                        </Box>
                    })}
                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'center', mb: 8 }}>
                    <motion.div whileTap={{ scale: 0.9 }}>
                        <Button variant="contained" sx={{ bgcolor: pink["A200"], ":hover": { bgcolor: pink["A100"] } }}
                            onClick={handleLogOut}>
                            Log out
                        </Button>
                    </motion.div>
                </Box>




                <BottomNavigationBar />
            </Box>
        </>
    )
}