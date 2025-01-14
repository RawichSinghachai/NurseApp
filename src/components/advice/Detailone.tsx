import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


export default function Detailone() {
    return (
        <div>
            <Box sx={{
                height: '100vh', backgroundImage: 'linear-gradient(180deg, rgb(119,33,214,0.33), rgb(238,18,190,0.24) ,rgb(215,94,218,0.15) ,rgb(193,77,234,0.37))',
                p: 2, display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center'
            }}>

                <Typography variant="h4" sx={{ pb: 6 }}>
                    ข้อมูลโภชนาการ
                </Typography>

                <Typography variant="h4" sx={{ pb: 6 }}>
                    ช่วงอายุ 0-6 เดือน
                </Typography>

                <Box sx={{ bgcolor: "#FF9999", p: 2 }}>
                    <Typography variant="h6" sx={{ textAlign: 'center' }}>
                        ทานนมอย่างเดียว
                    </Typography>

                </Box>

            </Box>
        </div>
    )
}