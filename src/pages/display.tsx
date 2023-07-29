import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Scale from '@/components/display/Scale';
import ChangeCircleIcon from '@mui/icons-material/ChangeCircle';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useRouter } from 'next/router'
import Checkdata from '@/components/Checkdata';
import dynamic from 'next/dynamic';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '@/stores/store';
import { pink, grey } from '@mui/material/colors';
import IconButton from '@mui/material/IconButton';
import Image from 'next/image';
import HbChart from '../../public/chart/HbChart.jpg'
import WbChart from '../../public/chart/WbChart.jpg'
import BottomNavigationBar from '@/components/BottomNavigationBar';
import axios from 'axios';
import { motion } from "framer-motion"

type Props = {}

export default function Display({ }: Props) {
    const [convert, setConvert] = useState(false)

    const handleConvert = () => {
        setConvert((pre) => !pre)
    }

    const [show, setShow] = useState(false)
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
                pb: 20, display: 'flex', flexDirection: 'column', alignItems: 'center'
            }}>

                <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 10, mr: 6, width: '100%', }}>

                    <motion.div whileTap={{ scale: 0.9 }}>
                        <IconButton sx={{ color: grey[900] }} onClick={() => getData()}>
                            <ChangeCircleIcon sx={{ fontSize: '40px' }} />
                        </IconButton>
                    </motion.div>

                    <motion.div whileTap={{ scale: 0.9 }}>
                        <Button variant="contained" sx={{ bgcolor: pink["A200"], ":hover": { bgcolor: pink["A100"] }, p: 2, ml: 2 }}
                            onClick={() => handleConvert()}>
                            Convert
                        </Button>
                    </motion.div>
                </Box>

                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', mt: 8 }}>
                    <Scale title={'ส่วนสูง'} value={convert ? ((parseInt(data.height[data.height.length - 1]) * 0.0328084).toFixed(2)).toString() : data.height[data.height.length - 1]} unit={convert ? 'ft' : 'cm'} />
                    <Scale title={'น้ำหนัก'} value={convert ? ((parseInt(data.weight[data.height.length - 1]) * 2.20462).toFixed(2)).toString() : data.weight[data.height.length - 1]} unit={convert ? 'ibs' : 'kg'} />
                </Box>

                <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', width: '100%', mt: 4, }}>
                    <motion.div whileTap={{ scale: 0.9 }}>
                        <Button variant="contained" sx={{ p: 2, bgcolor: pink["A200"], ":hover": { bgcolor: pink["A100"] } }}
                            onClick={() => setShow((pre) => !pre)}>
                            Show chart
                        </Button>
                    </motion.div>
                </Box>

                {show ? <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100%', mt: 4, }}>
                    <Image src={HbChart} alt='chart' height={200} width={200} priority style={{ marginBottom: '32px' }} />
                    <Image src={WbChart} alt='chart' height={200} width={200} priority />
                </Box> :
                    <></>}




                <BottomNavigationBar />
            </Box>
        </>
    )
}