"use client";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Image from "next/image";
import ButtonMotion from "../components/ButtonMotion";
import { SignUpButton, SignInButton, useUser } from "@clerk/nextjs";
import logo from "../../public/logo.png";
import Button from "@mui/material/Button";
import { pink } from "@mui/material/colors";
import { useRouter } from "next/navigation";

function Index() {
  const [isHovereSignIn, setIsHovereSignIn] = useState(false);
  const [isHovereSignUp, setIsHovereSignUp] = useState(false);
  const { isSignedIn } = useUser();
  const router = useRouter();

  return (
    <div
      style={{
        backgroundImage:
          "linear-gradient(180deg, rgb(119,33,214,0.33), rgb(238,18,190,0.24) ,rgb(215,94,218,0.15) ,rgb(193,77,234,0.37))",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box sx={{ display: "column", p: 2 }}>
        {/* Logo */}
        <Box sx={{ display: "flex", justifyContent: "center", my: 4 }}>
          <Image height={150} width={150} src={logo} alt="logo" priority />
        </Box>

        {/* Sign In Button */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            my: 4,
          }}
        >
          {isSignedIn ? (
            <Typography
              variant="h5"
              sx={{
                textAlign: "center",
                mb: 2,
                fontSize: {
                  desktop: "24px",
                  laptop: "24px",
                  tablet: "24px",
                  mobile: "20px",
                },
              }}
            >
              Already Sign In
            </Typography>
          ) : (
            <Typography
              sx={{
                textAlign: "center",
                mb: 2,
                fontSize: {
                  desktop: "24px",
                  laptop: "24px",
                  tablet: "24px",
                  mobile: "20px",
                },
              }}
            >
              Log In
            </Typography>
          )}
          {isSignedIn ? (
            <ButtonMotion>
              <Button
                variant="contained"
                sx={{
                  bgcolor: pink["A200"],
                  ":hover": { bgcolor: pink["A100"] },
                }}
                onClick={() => router.push("/home")}
              >
                Go to main
              </Button>
            </ButtonMotion>
          ) : (
            <ButtonMotion>
              <SignInButton mode="modal" fallbackRedirectUrl="/home">
                <button
                  style={{
                    boxShadow: isHovereSignIn
                      ? "0 4px 20px rgba(0, 0, 0, 0.2)"
                      : "0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12)",
                    fontSize: "16px",
                    padding: "6px 16px",
                    backgroundColor: isHovereSignIn ? "#f50057" : "#ff4081",
                    border: "none",
                    borderRadius: "4px",
                    color: "#ffffff",
                    cursor: "pointer",
                    transition:
                      "background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
                  }}
                  onMouseEnter={() => setIsHovereSignIn(true)}
                  onMouseLeave={() => setIsHovereSignIn(false)}
                >
                  <Typography sx={{ fontSize: "16px", fontWeight: "500" }}>
                    Sign In
                  </Typography>
                </button>
              </SignInButton>
            </ButtonMotion>
          )}
        </Box>

        <Typography
          variant="h5"
          sx={{
            textAlign: "center",
            mb: 2,
            fontSize: {
              desktop: "24px",
              laptop: "24px",
              tablet: "24px",
              mobile: "20px",
            },
          }}
        >
          ลงชื่อเข้าใช้งาน
        </Typography>

        {/* Register Button */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Stack
            direction="column"
            spacing={2}
            sx={{
              justifyContent: "center",
              alignItems: "center",
              p: 1,
            }}
          >
            <ButtonMotion>
              <SignUpButton mode="modal" fallbackRedirectUrl="/">
                <button
                  style={{
                    boxShadow: isHovereSignUp
                      ? "0 4px 20px rgba(0, 0, 0, 0.2)"
                      : "0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12)",
                    fontSize: "16px",
                    padding: "6px 16px",
                    backgroundColor: isHovereSignUp ? "#f50057" : "#ff4081",
                    border: "none",
                    borderRadius: "4px",
                    color: "#ffffff",
                    cursor: "pointer",
                    transition:
                      "background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
                  }}
                  onMouseEnter={() => setIsHovereSignUp(true)}
                  onMouseLeave={() => setIsHovereSignUp(false)}
                >
                  <Typography sx={{ fontSize: "16px", fontWeight: "500" }}>
                    Register
                  </Typography>
                </button>
              </SignUpButton>
            </ButtonMotion>
          </Stack>
        </Box>
      </Box>
    </div>
  );
}

export default Index;
