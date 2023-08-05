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
import { analysis_weight, analysis_weight_height } from '@/components/formula';
import AddchartIcon from '@mui/icons-material/Addchart';
import ScaleIcon from '@mui/icons-material/Scale';

import Modal from '@mui/material/Modal';

type Props = {}

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: "500px",
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function Display({ }: Props) {

    const [open, setOpen] = useState(false);
    const [reload,setReload] = useState(0)
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);



    const [convert, setConvert] = useState(false)

    const handleConvert = () => {
        setConvert((pre) => !pre)
    }

    const [show, setShow] = useState(false)

    const router = useRouter()

    const userdata = useSelector((state: RootState) => state.UserDataStore)

    // const getData = async () => {
    //     await axios.get(`${process.env.NEXT_PUBLIC_URL}/api/users/${userdata.id}`)
    //         .then((value: any) => setData(value.data))
    // }

    const getData = async () => {
        setReload((pre)=>pre+1)
    }
    

    useEffect(() => {

    }, [reload])

    return (
        <>
            <Checkdata />
            <Box sx={{
                height: '100vh', backgroundImage: 'linear-gradient(180deg, rgb(119,33,214,0.33), rgb(238,18,190,0.24) ,rgb(215,94,218,0.15) ,rgb(193,77,234,0.37))',
                pb: 20, display: 'flex', flexDirection: 'column', alignItems: 'center'
            }}>

                <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', mt: 10, mr: 6, width: '100%', }}>

                    <motion.div whileTap={{ scale: 0.9 }}>
                        <IconButton sx={{ color: grey[900] }} onClick={() => getData()}>
                            <ChangeCircleIcon sx={{ fontSize: '40px' }} />
                        </IconButton>
                    </motion.div>

                    <motion.div whileTap={{ scale: 0.9 }}>
                        <Button variant="contained" sx={{ bgcolor: pink["A200"], ":hover": { bgcolor: pink["A100"] }, p: 1, ml: 1 }}
                            onClick={() => handleOpen()} startIcon={<AddchartIcon />}>
                            analysis
                        </Button>
                    </motion.div>

                    <motion.div whileTap={{ scale: 0.9 }}>
                        <Button variant="contained" sx={{ bgcolor: pink["A200"], ":hover": { bgcolor: pink["A100"] }, p: 1, ml: 2 }}
                            onClick={() => handleConvert()} startIcon={<ScaleIcon />}>
                            Convert
                        </Button>
                    </motion.div>
                </Box>

                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', mt: 8 }}>
                    <Scale title={'ส่วนสูง'} value={convert ? ((parseInt(userdata.height[userdata.height.length - 1]) * 0.0328084).toFixed(2)).toString() : userdata.height[userdata.height.length - 1]} unit={convert ? 'ft' : 'cm'} />
                    <Scale title={'น้ำหนัก'} value={convert ? ((parseInt(userdata.weight[userdata.weight.length - 1]) * 2.20462).toFixed(2)).toString() : userdata.weight[userdata.weight.length - 1]} unit={convert ? 'ibs' : 'kg'} />
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
                    <Box sx={{ width: '100%', height: '100px' }}></Box>
                </Box> :
                    <></>}




                <BottomNavigationBar />


                <Modal
                    open={open}
                    onClose={handleClose}
                >
                    <Box sx={style}>
                        <Typography variant="h6" component="h2">
                            การแปลงผล
                        </Typography>

                        <Typography variant="body1" sx={{ mt: 2 }}>
                            การแปลงผลจากน้ำหนัก : {analysis_weight(userdata.babyage, parseInt(userdata.height[userdata.height.length - 1]))}
                        </Typography>

                        {parseInt(userdata.babyage) >= 2 && parseInt(userdata.babyage) <= 5 ? <Typography variant="body1" sx={{ mt: 2 }}>
                            การแปลงผลจากน้ำหนักและส่วนสูง : {analysis_weight_height(userdata.babyage, parseInt(userdata.height[userdata.height.length - 1]), parseInt(userdata.weight[userdata.weight.length - 1]))}
                        </Typography> : ''}

                    </Box>
                </Modal>
            </Box>
        </>
    )
}