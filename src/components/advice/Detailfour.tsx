import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import NutritionTable from "./์NutritionTable";

const rows = [
    { name: "กลุ่มอาหาร", value: ["ปริมาณอาหารที่ควรได้รับต่อวัน"] },
    { name: "นม", value: ["1-3 แก้ว"] },
    { name: "ไข่", value: ["1 ฟอง"] },
    { name: "เนื้อสัตว์ต่างๆและเมล็ดถั่วแห้ง", value: ["4 ช้อนกินข้าว"] },
    { name: "ข้าวสุกหรือก๋วยเตี๋ยวขนมจีน", value: ["6 ทัพพี"] },
    { name: "ผักใบเขียว", value: ["3 ทัพพี"] },
    { name: "ผลไม้ตามฤดูกาล", value: ["3 ส่วน"] },
    { name: "น้ำจากพืชและสัตว์", value: ["3 ช้อนชา"] },
  ];
  

export default function Detailfour() {
    return (
        <div>
            <Box sx={{
                height: '100%', backgroundImage: 'linear-gradient(180deg, rgb(119,33,214,0.33), rgb(238,18,190,0.24) ,rgb(215,94,218,0.15) ,rgb(193,77,234,0.37))',
                p: 2, display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', aligns: 'center'
            }}>

                <Typography variant="h4" sx={{ pb: 6 }}>
                    ข้อมูลโภชนาการ
                </Typography>

                <Typography variant="h4" sx={{ pb: 6 }}>
                    ช่วงอายุ 3-5 ปี
                </Typography>

                <NutritionTable rows={rows} />
            </Box>
        </div>
    )
}