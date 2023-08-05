import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';


type Props = {}

export default function detailtwo({ }: Props) {
    return (
        <div>
            <Box sx={{
                height: '100%', backgroundImage: 'linear-gradient(180deg, rgb(119,33,214,0.33), rgb(238,18,190,0.24) ,rgb(215,94,218,0.15) ,rgb(193,77,234,0.37))',
                p: 2, display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center'
            }}>

                <Typography variant="h4" sx={{ pb: 6 }}>
                    ข้อมูลโภชนาการ
                </Typography>

                <Typography variant="h4" sx={{ pb: 6 }}>
                    ช่วงอายุ 6-12 เดือน
                </Typography>

                <Grid container spacing={2}>

                    <Grid item mobile={6}>
                        <Box sx={{ bgcolor: "#FF9999", p: 1 }}>
                            <Typography variant="body2" sx={{ textAlign: 'center' }}>
                                อายุ
                            </Typography>

                        </Box>
                    </Grid>

                    <Grid item mobile={6}>
                        <Box sx={{ bgcolor: "#FF9999", p: 1 }}>
                            <Typography variant="body2" >
                                ปริมาณอาหารที่ควรได้รับต่อวัน
                            </Typography>

                        </Box>
                    </Grid>

                    <Grid item mobile={6}>
                        <Box sx={{ bgcolor: "#FF9999", p: 1 }}>
                            <Typography variant="body2" sx={{ textAlign: 'center' }}>
                                อายุ 7-8 เดือน
                            </Typography>

                        </Box>
                    </Grid>

                    <Grid item mobile={6}>
                        <Box sx={{ bgcolor: "#FF9999", p: 0.2 }}>
                            <ul>
                                <li>
                                    <Typography variant="body2" >
                                        ข้าวบดประมาณ 4 ช้อนโต๊ะ
                                    </Typography>
                                </li>
                                
                                <li>
                                    <Typography variant="body2" >
                                        เนื้อสัตว์ 2 ช้อนโต๊ะ
                                    </Typography>
                                </li>

                                <li>
                                    <Typography variant="body2" >
                                        ผักสุกบด 1-2 ช้อนโต๊ะ
                                    </Typography>
                                </li>

                                <li>
                                    <Typography variant="body2" >
                                        อาหารเสริม 1 มื้อ
                                    </Typography>
                                </li>

                                <li>
                                    <Typography variant="body2" >
                                        ผลไม้หลังอาหาร
                                    </Typography>
                                </li>
                            </ul>

                        </Box>
                    </Grid>

                    <Grid item mobile={6}>
                        <Box sx={{ bgcolor: "#FF9999", p: 1 }}>
                            <Typography variant="body2" sx={{ textAlign: 'center' }}>
                                อายุ 8-10 เดือน
                            </Typography>

                        </Box>
                    </Grid>


                    <Grid item mobile={6}>
                        <Box sx={{ bgcolor: "#FF9999", p: 0.2 }}>
                            <ul>
                                <li>
                                    <Typography variant="body2" >
                                        ข้าวสุกนิ่มประมาณ 5 ช้อนโต๊ะ
                                    </Typography>
                                </li>

                                <li>
                                    <Typography variant="body2" >
                                        ไข่ทั้งฟอง
                                    </Typography>
                                </li>
                                
                                <li>
                                    <Typography variant="body2" >
                                        เนื้อสัตว์ 2 ช้อนโต๊ะ
                                    </Typography>
                                </li>

                                <li>
                                    <Typography variant="body2" >
                                        ผักสุกหั่น 2 ช้อนโต๊ะ
                                    </Typography>
                                </li>

                                <li>
                                    <Typography variant="body2" >
                                        ผลไม้สุก 2-3 ชิ้น
                                    </Typography>
                                </li>

                                <li>
                                    <Typography variant="body2" >
                                        อาหารเสริม 2 มื้อ
                                    </Typography>
                                </li>

                                <li>
                                    <Typography variant="body2" >
                                        ผลไม้หลังอาหารทุกมื้อ
                                    </Typography>
                                </li>
                            </ul>

                        </Box>
                    </Grid>

                    <Grid item mobile={6}>
                        <Box sx={{ bgcolor: "#FF9999", p: 1 }}>
                            <Typography variant="body2" sx={{ textAlign: 'center' }}>
                                อายุ 10-12 เดือน
                            </Typography>
                        </Box>
                    </Grid>

                    <Grid item mobile={6}>
                        <Box sx={{ bgcolor: "#FF9999", p: 0.2 }}>
                            <ul>
                                <li>
                                    <Typography variant="body2" >
                                        ข้าวสุกนิ่มประมาณ 6 ช้อนโต๊ะ
                                    </Typography>
                                </li>

                                <li>
                                    <Typography variant="body2" >
                                        ไข่ทั้งฟอง
                                    </Typography>
                                </li>
                                
                                <li>
                                    <Typography variant="body2" >
                                        เนื้อสัตว์ 3 ช้อนโต๊ะ
                                    </Typography>
                                </li>

                                <li>
                                    <Typography variant="body2" >
                                        ผักสุกหั่น 3 ช้อนโต๊ะ
                                    </Typography>
                                </li>

                                <li>
                                    <Typography variant="body2" >
                                        ผลไม้สุก 4-5 ชิ้น
                                    </Typography>
                                </li>

                                <li>
                                    <Typography variant="body2" >
                                        อาหารเสริม 3 มื้อ
                                    </Typography>
                                </li>

                                <li>
                                    <Typography variant="body2" >
                                        ผลไม้หลังอาหารทุกมื้อ
                                    </Typography>
                                </li>
                            </ul>

                        </Box>
                    </Grid>


                </Grid>
            </Box>
        </div>
    )
}