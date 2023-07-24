import React from 'react'
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import TextBox from '@/components/advice/TextBox';

type Props = {}

export default function detailfour({ }: Props) {
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
                    ช่วงอายู 3-5 ปี
                </Typography>

                <Grid container spacing={2}>

                    <Grid item mobile={6}>
                        <Box sx={{ bgcolor: "#FF9999", p: 1 }}>
                            <Typography variant="body2" sx={{ textAlign: 'center' }}>
                                กลุ่มอาหาร
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
                                นม
                            </Typography>

                        </Box>
                    </Grid>

                    <Grid item mobile={6}>
                        <Box sx={{ bgcolor: "#FF9999", p: 0.2 }}>
                            <Typography variant="body2" sx={{ textAlign: 'center' }}>
                                1-3 แก้ว
                            </Typography>
                        </Box>
                    </Grid>

                    <Grid item mobile={6}>
                        <Box sx={{ bgcolor: "#FF9999", p: 1 }}>
                            <Typography variant="body2" sx={{ textAlign: 'center' }}>
                                ไข่
                            </Typography>

                        </Box>
                    </Grid>


                    <Grid item mobile={6}>
                        <Box sx={{ bgcolor: "#FF9999", p: 0.2 }}>
                            <Typography variant="body2" sx={{ textAlign: 'center' }}>
                                1 ฟอง
                            </Typography>
                        </Box>
                    </Grid>

                    <Grid item mobile={6}>
                        <Box sx={{ bgcolor: "#FF9999", p: 0.2 }}>
                            <Typography variant="body2" sx={{ textAlign: 'center' }}>
                                เนื้อสัตว์ต่างๆและเมล็ดถั่วแห้ง
                            </Typography>
                        </Box>
                    </Grid>

                    <Grid item mobile={6}>
                        <Box sx={{ bgcolor: "#FF9999", p: 0.2 }}>
                            <Typography variant="body2" sx={{ textAlign: 'center' }}>
                                4 ช้อนกินข้าว
                            </Typography>
                        </Box>
                    </Grid>

                    <Grid item mobile={6}>
                        <Box sx={{ bgcolor: "#FF9999", p: 0.2 }}>
                            <Typography variant="body2" sx={{ textAlign: 'center' }}>
                                ข้าวสุกหรือก๋วยเตี๋ยวขนมจีน
                            </Typography>
                        </Box>
                    </Grid>

                    <Grid item mobile={6}>
                        <Box sx={{ bgcolor: "#FF9999", p: 0.2 }}>
                            <Typography variant="body2" sx={{ textAlign: 'center' }}>
                                6 ทัพพี
                            </Typography>
                        </Box>
                    </Grid>

                    <Grid item mobile={6}>
                        <Box sx={{ bgcolor: "#FF9999", p: 0.2 }}>
                            <Typography variant="body2" sx={{ textAlign: 'center' }}>
                                ผักใบเขียว
                            </Typography>
                        </Box>
                    </Grid>

                    <Grid item mobile={6}>
                        <Box sx={{ bgcolor: "#FF9999", p: 0.2 }}>
                            <Typography variant="body2" sx={{ textAlign: 'center' }}>
                                3 ทัพพี
                            </Typography>
                        </Box>
                    </Grid>

                    <Grid item mobile={6}>
                        <Box sx={{ bgcolor: "#FF9999", p: 0.2 }}>
                            <Typography variant="body2" sx={{ textAlign: 'center' }}>
                                ผลไม้ตามฤดูกาล
                            </Typography>
                        </Box>
                    </Grid>

                    <Grid item mobile={6}>
                        <Box sx={{ bgcolor: "#FF9999", p: 0.2 }}>
                            <Typography variant="body2" sx={{ textAlign: 'center' }}>
                                3 ส่วน
                            </Typography>
                        </Box>
                    </Grid>

                    <Grid item mobile={6}>
                        <Box sx={{ bgcolor: "#FF9999", p: 0.2 }}>
                            <Typography variant="body2" sx={{ textAlign: 'center' }}>
                                น้ำจากพืชและสัตว์
                            </Typography>
                        </Box>
                    </Grid>

                    <Grid item mobile={6}>
                        <Box sx={{ bgcolor: "#FF9999", p: 0.2 }}>
                            <Typography variant="body2" sx={{ textAlign: 'center' }}>
                                3 ช้อนชา
                            </Typography>
                        </Box>
                    </Grid>



                </Grid>
            </Box>
        </div>
    )
}