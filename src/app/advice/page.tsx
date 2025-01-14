"use client";
import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { pink } from "@mui/material/colors";
import AOS from "aos";
import "aos/dist/aos.css";
import BottomNavigationBar from "@/components/BottomNavigationBar";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Box
        sx={{
          height: "100%",
          backgroundImage:
            "linear-gradient(180deg, rgb(119,33,214,0.33), rgb(238,18,190,0.24) ,rgb(215,94,218,0.15) ,rgb(193,77,234,0.37))",
          p: 2,
          pb: 10,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontSize: {
              desktop: "34px",
              laptop: "34px",
              tablet: "34px",
              mobile: "24px",
            },
            pb: 6,
          }}
          data-aos="zoom-in-up"
        >
          ช่วงอายุ 0-6 เดือน
        </Typography>

        <Box
          sx={{ display: "flex", justifyContent: "center" }}
          data-aos="zoom-in-up"
        >
          <Button
            sx={{
              bgcolor: pink["A200"],
              ":hover": { bgcolor: pink["A100"] },
              minWidth: "200px",
              height: "200px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            onClick={() => router.push("/advice/detailone")}
          >
            <Typography
              sx={{
                fontSize: {
                  desktop: "34px",
                  laptop: "34px",
                  tablet: "34px",
                  mobile: "24px",
                },
                color: "white",
              }}
            >
              คำแนะนำ
            </Typography>
          </Button>
        </Box>

        <Typography
          variant="h4"
          sx={{
            fontSize: {
              desktop: "34px",
              laptop: "34px",
              tablet: "34px",
              mobile: "24px",
            },
            py: 6,
          }}
          data-aos="zoom-in-up"
        >
          ช่วงอายุ 6-12 เดือน
        </Typography>

        <Box
          sx={{ display: "flex", justifyContent: "center" }}
          data-aos="zoom-in-up"
        >
          <Button
            sx={{
              bgcolor: pink["A200"],
              ":hover": { bgcolor: pink["A100"] },
              minWidth: "200px",
              height: "200px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            onClick={() => router.push("/advice/detailtwo")}
          >
            <Typography
              sx={{
                fontSize: {
                  desktop: "34px",
                  laptop: "34px",
                  tablet: "34px",
                  mobile: "24px",
                },
                color: "white",
              }}
            >
              คำแนะนำ
            </Typography>
          </Button>
        </Box>

        <Typography
          sx={{
            fontSize: {
              desktop: "34px",
              laptop: "34px",
              tablet: "34px",
              mobile: "24px",
            },
            py: 6,
          }}
          data-aos="zoom-in-up"
        >
          ช่วงอายุ 1-3 ปี
        </Typography>

        <Box
          sx={{ display: "flex", justifyContent: "center" }}
          data-aos="zoom-in-up"
        >
          <Button
            sx={{
              bgcolor: pink["A200"],
              ":hover": { bgcolor: pink["A100"] },
              minWidth: "200px",
              height: "200px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            onClick={() => router.push("/advice/detailthree")}
          >
            <Typography
              sx={{
                fontSize: {
                  desktop: "34px",
                  laptop: "34px",
                  tablet: "34px",
                  mobile: "24px",
                },
                color: "white",
              }}
            >
              คำแนะนำ
            </Typography>
          </Button>
        </Box>

        <Typography
          variant="h4"
          sx={{
            fontSize: {
              desktop: "34px",
              laptop: "34px",
              tablet: "34px",
              mobile: "24px",
            },
            py: 6,
          }}
          data-aos="zoom-in-up"
        >
          ช่วงอายุ 3-5 ปี
        </Typography>

        <Box
          sx={{ display: "flex", justifyContent: "center" }}
          data-aos="zoom-in-up"
        >
          <Button
            sx={{
              bgcolor: pink["A200"],
              ":hover": { bgcolor: pink["A100"] },
              minWidth: "200px",
              height: "200px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            onClick={() => router.push("/advice/detailfour")}
          >
            <Typography
              sx={{
                fontSize: {
                  desktop: "34px",
                  laptop: "34px",
                  tablet: "34px",
                  mobile: "24px",
                },
                color: "white",
              }}
            >
              คำแนะนำ
            </Typography>
          </Button>
        </Box>

        <BottomNavigationBar />
      </Box>
    </>
  );
};

export default Page;
