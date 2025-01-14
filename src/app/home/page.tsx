"use client";
import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import BottomNavigationBar from "../../components/BottomNavigationBar";
import Image from "next/image";
import qoogle from "../../../public/qoogle.png";
import { motion } from "motion/react";
import { useUser } from "@clerk/nextjs";
import { createParentAction } from "@/action/action";
import { useParentStore } from "@/stores/store";

const HomePage = () => {
  const { user } = useUser();
  const { fetchParent } = useParentStore();

  useEffect(() => {
    if (user?.id) {
      fetchParent(user.id);
    }
    createParentAction();
  }, [user,fetchParent]);

  return (
    <div>
      <Box
        sx={{
          height: "100vh",
          backgroundImage:
            "linear-gradient(180deg, rgb(119,33,214,0.33), rgb(238,18,190,0.24) ,rgb(215,94,218,0.15) ,rgb(193,77,234,0.37))",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            maxWidth: "300px",
            height: "100px",
            bgcolor: "white",
            borderRadius: 4,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            p: 2,
          }}
        >
          <Typography variant="h6" sx={{ textAlign: "center" }}>
            Have the child lie
          </Typography>
          <Typography variant="h6" sx={{ textAlign: "center" }}>
            Or
          </Typography>
          <Typography variant="h6" sx={{ textAlign: "center" }}>
            Stand on the scale
          </Typography>
        </Box>

        <Box sx={{ my: 4 }}>
          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{ repeat: Infinity }}
          >
            <Image src={qoogle} alt="Qoogle Logo" width={300} height={300} priority/>
          </motion.div>
        </Box>

 

        <BottomNavigationBar />
      </Box>
    </div>
  );
};

export default HomePage;
