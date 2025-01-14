"use client";
import React from "react";
import Paper from "@mui/material/Paper";
import BabyFormRegister from "@/components/profile/BabyFormRegister";
import Box from "@mui/material/Box";
import Image from "next/image";
import dog from "../../../../public/dog.png";

const RegisterPage = () => {

  return (
    <div>
      <Box
        sx={{
          height: "100vh",
          backgroundImage:
            "linear-gradient(180deg, rgb(119,33,214,0.33), rgb(238,18,190,0.24) ,rgb(215,94,218,0.15) ,rgb(193,77,234,0.37))",
          pb: 20,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          p: 2,
        }}
      >
        
          <Paper
            elevation={10}
            sx={{
              maxWidth: "600px",
              p: 4,
              borderRadius: 4,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                display: {
                  desktop: "block",
                  laptop: "block",
                  tablet: "block",
                  mobile: "none",
                },
              }}
            >
              <Image src={dog} alt="Qoogle Logo" width={300} height={300} priority/>
            </Box>
            <BabyFormRegister />
          </Paper>
       
      </Box>
    </div>
  );
};

export default RegisterPage;
