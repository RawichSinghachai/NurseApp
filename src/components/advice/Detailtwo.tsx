import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import NutritionTable from "./์NutritionTable";

const rows = [
    { name: "อายุ", value: ["ปริมาณอาหารที่ควรได้รับต่อวัน"] },
    { name: "อายุ 7-8 เดือน", value: ["ข้าวบดประมาณ 4 ช้อนโต๊ะ","เนื้อสัตว์ 2 ช้อนโต๊ะ","ผักสุกบด 1-2 ช้อนโต๊ะ","อาหารเสริม 1 มื้อ","ผลไม้หลังอาหาร"] },
    { name: "อายุ 8-10 เดือน", value: ["ข้าวสุกนิ่มประมาณ 5 ช้อนโต๊ะ","ไข่ทั้งฟอง","เนื้อสัตว์ 2 ช้อนโต๊ะ","ผักสุกหั่น 2 ช้อนโต๊ะ","ผลไม้สุก 2-3 ชิ้น","อาหารเสริม 2 มื้อ","ผลไม้หลังอาหารทุกมื้อ"] },
    { name: "อายุ 10-12 เดือน", value: ["ข้าวสุกนิ่มประมาณ 6 ช้อนโต๊ะ","ไข่ทั้งฟอง","เนื้อสัตว์ 3 ช้อนโต๊ะ","ผักสุกหั่น 3 ช้อนโต๊ะ","ผลไม้สุก 4-5 ชิ้น","อาหารเสริม 3 มื้อ","ผลไม้หลังอาหารทุกมื้อ"] },
];



export default function Detailtwo() {
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
                    ช่วงอายุ 6-12 เดือน
                </Typography>

                <NutritionTable rows={rows} />
            </Box>
        </div>
    )
}