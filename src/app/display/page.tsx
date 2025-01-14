"use client";
import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import ChangeCircleIcon from "@mui/icons-material/ChangeCircle";
import Button from "@mui/material/Button";
import { pink, grey } from "@mui/material/colors";
import IconButton from "@mui/material/IconButton";
import Image from "next/image";
import HbChart from "../../../public/chart/HbChart.jpg";
import WbChart from "../../../public/chart/WbChart.jpg";
import BottomNavigationBar from "@/components/BottomNavigationBar";
import { motion } from "motion/react";
import AddchartIcon from "@mui/icons-material/Addchart";
import ScaleIcon from "@mui/icons-material/Scale";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import Scale from "@/components/Scale";
import { analysis_weight, analysis_weight_height } from "@/utils/formula";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useParentStore } from "@/stores/store";
import { useUser } from "@clerk/nextjs";

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: "500px",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
} as const;

const DisplayPage = () => {
  const { user } = useUser();
  const { fetchParent, baby } = useParentStore();

  const [open, setOpen] = useState(false);
  const [reload, setReload] = useState("");
  const [convert, setConvert] = useState(false);
  const [show, setShow] = useState(false);
  const [selectedBaby, setSelectedBaby] = useState("");

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleConvert = () => setConvert((prev) => !prev);

  const handleChange = (event: SelectChangeEvent) => {
    setSelectedBaby(event.target.value as string);
  };

  const getData = async () => {
    setReload((prev) => prev + 1);
  };

  useEffect(() => {
    if (user?.id) {
      fetchParent(user.id);
    }
    setSelectedBaby("0")
  }, [reload, user,fetchParent]);

  return (
    <>
      <Box
        sx={{
          height: "100%",
          backgroundImage:
            "linear-gradient(180deg, rgb(119,33,214,0.33), rgb(238,18,190,0.24) ,rgb(215,94,218,0.15) ,rgb(193,77,234,0.37))",
          pb: 20,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* Header Buttons */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            mt: 10,
            mr: 6,
            width: "100%",
          }}
        >
          <motion.div whileTap={{ scale: 0.9 }}>
            <IconButton sx={{ color: grey[900] }} onClick={getData}>
              <ChangeCircleIcon sx={{ fontSize: "40px" }} />
            </IconButton>
          </motion.div>

          <motion.div whileTap={{ scale: 0.9 }}>
            <Button
              variant="contained"
              sx={{
                bgcolor: pink["A200"],
                ":hover": { bgcolor: pink["A100"] },
                p: 1,
                ml: 1,
              }}
              onClick={handleOpen}
              startIcon={<AddchartIcon />}
            >
              analysis
            </Button>
          </motion.div>

          <motion.div whileTap={{ scale: 0.9 }}>
            <Button
              variant="contained"
              sx={{
                bgcolor: pink["A200"],
                ":hover": { bgcolor: pink["A100"] },
                p: 1,
                ml: 2,
              }}
              onClick={handleConvert}
              startIcon={<ScaleIcon />}
            >
              Convert
            </Button>
          </motion.div>
        </Box>

        {/* Baby Selection and Scale */}
        <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", mt: 8 }}>
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth variant="filled">
              <InputLabel id="baby-name-select-label">BabyName</InputLabel>
              <Select
                labelId="baby-name-select-label"
                value={selectedBaby}
                label="BabyName"
                onChange={handleChange}
                sx={{
                  "& .MuiSelect-filled": {
                    backgroundColor: grey[50],
                  },
                  "& .MuiInputBase-root": {
                    color: grey[900],
                  },
                }}
              >
                {baby?.map((babys, index) => (
                  <MenuItem key={index} value={index.toString()}>
                    {babys.babyName}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>

          {/* Display Height and Weight */}
          <Scale
            title="Height:"
            value={convert
              ? ((baby?.[Number(selectedBaby)]?.height?.[baby?.[Number(selectedBaby)]?.height.length - 1] ?? 0) * 0.0328084).toFixed(2)
              : baby?.[Number(selectedBaby)]?.height?.[baby?.[Number(selectedBaby)]?.height.length - 1]?.toString() ?? ""}
            unit={convert ? "ft" : "cm"}
          />
          <Scale
            title="Weight:"
            value={convert
              ? (baby?.[Number(selectedBaby)]?.weight?.[baby?.[Number(selectedBaby)]?.weight.length - 1] ?? 0).toFixed(2)
              : baby?.[Number(selectedBaby)]?.weight?.[baby?.[Number(selectedBaby)]?.weight.length - 1]?.toString() ?? ""}
            unit={convert ? "ibs" : "kg"}
          />
        </Box>

        {/* Show Chart Button */}
        <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "center", width: "100%", mt: 4 }}>
          <motion.div whileTap={{ scale: 0.9 }}>
            <Button
              variant="contained"
              sx={{
                mt: 2,
                p: 2,
                bgcolor: pink["A200"],
                ":hover": { bgcolor: pink["A100"] },
              }}
              onClick={() => setShow((prev) => !prev)}
            >
              Show chart
            </Button>
          </motion.div>
        </Box>

        {/* Show Charts */}
        {show && (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              mt: 4,
            }}
          >
            <Image src={HbChart} alt="HbChart" height={200} width={200} priority style={{ marginBottom: "32px" }} />
            <Image src={WbChart} alt="WbChart" height={200} width={200} priority />
          </Box>
        )}

        {/* Modal for Analysis */}
        <Modal open={open} onClose={handleClose}>
          <Box sx={modalStyle}>
            <Typography variant="h6" component="h2">
              การแปลงผล
            </Typography>

            <Typography variant="body1" sx={{ mt: 2 }}>
              การแปลงผลจากน้ำหนัก:{" "}
              {baby?.[Number(selectedBaby)]?.babyAge !== undefined &&
                analysis_weight(baby?.[Number(selectedBaby)]?.babyAge, baby?.[Number(selectedBaby)]?.height?.[baby?.[Number(selectedBaby)]?.height.length - 1])}
            </Typography>

            <Typography variant="body1" sx={{ mt: 2 }}>
              การแปลงผลจากน้ำหนักและส่วนสูง:{" "}
              {baby?.[Number(selectedBaby)]?.babyAge !== undefined &&
                analysis_weight_height(
                  baby?.[Number(selectedBaby)]?.babyAge,
                  baby?.[Number(selectedBaby)]?.height?.[baby?.[Number(selectedBaby)]?.height.length - 1],
                  baby?.[Number(selectedBaby)]?.weight?.[baby?.[Number(selectedBaby)]?.weight.length - 1]
                )}
            </Typography>
          </Box>
        </Modal>

        <BottomNavigationBar />
      </Box>
    </>
  );
};

export default DisplayPage;
