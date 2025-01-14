import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import NutritionTable from "./์NutritionTable";

const rows = [
  { name: "กลุ่มอาหาร", value: ["ปริมาณอาหารที่ควรได้รับต่อวัน"] },
  { name: "ข้าว-แป้ง", value: ["3 ทัพพี"] },
  { name: "ผัก", value: ["2 ทัพพี"] },
  { name: "ผลไม้", value: ["3 ส่วน"] },
  { name: "เนื้อสัตว์", value: ["3 ช้อนกินข้าว"] },
  { name: "นม", value: ["2 แก้ว"] },
  { name: "น้ำมัน-กะทิ", value: ["น้อยกว่า 3 ช้อนชา"] },
  { name: "น้ำตาล", value: ["น้อยกว่า 2 ช้อนชา"] },
];


export default function Detailthree() {
  return (
    <div>
      <Box
        sx={{
          height: "100%",
          backgroundImage:
            "linear-gradient(180deg, rgb(119,33,214,0.33), rgb(238,18,190,0.24) ,rgb(215,94,218,0.15) ,rgb(193,77,234,0.37))",
          p: 2,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          aligns: "center",
        }}
      >
        <Typography variant="h4" sx={{ pb: 6 }}>
          ข้อมูลโภชนาการ
        </Typography>

        <Typography variant="h4" sx={{ pb: 6 }}>
          ช่วงอายุ 1-3 ปี
        </Typography>

        <NutritionTable rows={rows} />
      </Box>
    </div>
  );
}
