"use client";
import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Skeleton from "@mui/material/Skeleton";
import BottomNavigationBar from "../../components/BottomNavigationBar";
import { motion } from "motion/react";
import { SignOutButton, useUser } from "@clerk/nextjs";
import { grey, pink } from "@mui/material/colors";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import SettingsIcon from "@mui/icons-material/Settings";
import IconButton from "@mui/material/IconButton";
import { useRouter } from "next/navigation";
import { useParentStore } from "@/stores/store";
import EditNoteIcon from "@mui/icons-material/EditNote";
import DeleteIcon from "@mui/icons-material/Delete";
import DeleteBabyDialog from "@/components/profile/DeleteBabyDialog";
import { deleteBabyAction } from "@/action/action";
import ButtonMotion from "@/components/ButtonMotion";

const Page = () => {
  const router = useRouter();
  const { user } = useUser();
  const [numberTabs, setNumberTab] = useState(0);
  const [isHovereSignOut, setIsHovereSignOut] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogLoading, setDialogLoading] = useState(false);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setNumberTab(newValue);
  };
  const { parentName, phone, email, relation, fetchParent, baby } =
    useParentStore();

  const handleClickOpen = () => {
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  const handleDialogConfirm = async (_id: string) => {
    setDialogLoading(true);
    await deleteBabyAction(_id);
    setDialogOpen(false);
    setDialogLoading(false);
  };

  useEffect(() => {
    if (user?.id) {
      fetchParent(user.id);
    }
    setNumberTab(0);
  }, [user, dialogLoading, fetchParent]);

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
          p: 2,
        }}
      >
        <Box>
          <Stack direction="row" spacing={0.5} alignItems={"center"}>
            <Typography
              sx={{
                fontSize: {
                  desktop: "34px",
                  laptop: "34px",
                  tablet: "34px",
                  mobile: "24px",
                },
              }}
            >
              Profile
            </Typography>
            <IconButton onClick={() => router.push("/register")}>
              <SettingsIcon
                sx={{
                  fontSize: {
                    desktop: "40px",
                    laptop: "40px",
                    tablet: "40px",
                    mobile: "35px",
                  },
                  color: grey[900],
                }}
              />
            </IconButton>
          </Stack>

          <Paper
            sx={{
              bgcolor: "white",
              p: 2,
              borderRadius: 4,
              mt: 2,
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <Stack direction="row" spacing={2} alignItems={"center"}>
              <AccountCircleIcon
                sx={{
                  fontSize: {
                    desktop: "80px",
                    laptop: "80px",
                    tablet: "80px",
                    mobile: "60px",
                  },
                  mr: 2,
                }}
              />
              <Typography
                sx={{
                  fontSize: {
                    desktop: "24px",
                    laptop: "24px",
                    tablet: "24px",
                    mobile: "20px",
                  },
                }}
              >
                {parentName ? (
                  parentName
                ) : (
                  <Skeleton animation="wave" width={100} height={40} />
                )}
              </Typography>
            </Stack>

            <Typography
              sx={{
                fontSize: {
                  desktop: "20px",
                  laptop: "20px",
                  tablet: "20px",
                  mobile: "16px",
                },
              }}
            >
              Email : {email}
            </Typography>
            <Typography
              sx={{
                fontSize: {
                  desktop: "20px",
                  laptop: "20px",
                  tablet: "20px",
                  mobile: "16px",
                },
              }}
            >
              Phone : {phone}
            </Typography>
            <Typography
              sx={{
                fontSize: {
                  desktop: "20px",
                  laptop: "20px",
                  tablet: "20px",
                  mobile: "16px",
                },
              }}
            >
              Relation : {relation}
            </Typography>
          </Paper>
        </Box>

        <Box sx={{ display: "flex", justifyContent: "flex-end", pt: 4 }}>
          <ButtonMotion>
            <Typography
              variant="h6"
              sx={{ cursor: "pointer" }}
              onClick={() => router.push("./register/baby")}
            >
              +เพิ่มทารก
            </Typography>
          </ButtonMotion>
        </Box>
        {/* baby Table */}
        <Box
          sx={{
            bgcolor: "white",
            p: 1,
            mb: 4,
            borderRadius: 4,
            maxWidth: "1400px",
          }}
        >
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              variant="scrollable"
              scrollButtons
              allowScrollButtonsMobile
              value={numberTabs}
              onChange={handleChange}
              sx={{
                "& .MuiTabs-indicator": {
                  backgroundColor: pink[500], // Change the active tab indicator color
                },
              }}
            >
              {baby?.map((baby, index) => (
                <Tab
                  label={baby.babyName}
                  key={index}
                  sx={{
                    color: numberTabs === index ? pink[500] : grey[700], // Change tab color when active
                    "&.Mui-selected": {
                      color: pink[500], // Active tab color
                    },
                  }}
                />
              ))}
            </Tabs>
          </Box>
          <Stack
            direction="column"
            sx={{
              justifyContent: "flex-start",
              alignItems: "flex-start",
              ml: 2,
            }}
          >
            <Stack
              direction="row"
              sx={{
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
              }}
            >
              <Typography
                sx={{
                  fontSize: {
                    desktop: "34px",
                    laptop: "34px",
                    tablet: "34px",
                    mobile: "24px",
                  },
                  mr: 2,
                }}
              >
                {baby && baby[numberTabs]?.babyName}
              </Typography>
              <Box>
                <IconButton
                  onClick={() => {
                    if (baby) {
                      router.push(
                        `/edit?_id=${baby[numberTabs]._id}&indexBaby=${numberTabs}`
                      );
                    }
                  }}
                >
                  <EditNoteIcon sx={{ fontSize: "40px", color: grey[900] }} />
                </IconButton>

                <IconButton onClick={handleClickOpen}>
                  <DeleteIcon sx={{ fontSize: "40px", color: grey[900] }} />
                </IconButton>
              </Box>
              <DeleteBabyDialog
                open={dialogOpen}
                handleClose={handleDialogClose}
                handleConfirm={() =>
                  handleDialogConfirm(baby ? baby[numberTabs]?._id : "")
                }
                babyName={baby ? baby[numberTabs]?.babyName : ""}
              />
            </Stack>
            <Typography variant="subtitle1">
              {`Age : ${baby && baby[numberTabs]?.babyAge} yaer`}
            </Typography>

            <Typography variant="subtitle1">
              {`Gender : ${baby && baby[numberTabs]?.babyGender}`}
            </Typography>
          </Stack>
          <Divider sx={{ bgcolor: "black", mt: 2 }} />

          {baby &&
            baby[numberTabs]?.height.map((value, index) => {
              return (
                <Box key={index}>
                  <Stack
                    direction="row"
                    justifyContent="space-evenly"
                    sx={{ mt: 1 }}
                  >
                    <Stack direction="column" justifyContent="flex-start">
                      {baby[numberTabs]?.checkDate[index] ? (
                        <Box>
                          <Typography
                            sx={{
                              fontSize: {
                                desktop: "16px",
                                laptop: "16px",
                                tablet: "16px",
                                mobile: "14px",
                              },
                            }}
                          >
                            {`ตรวจครั้งที่ ${index + 1} `}
                          </Typography>
                          <Typography
                            sx={{
                              fontSize: {
                                desktop: "16px",
                                laptop: "16px",
                                tablet: "16px",
                                mobile: "14px",
                              },
                            }}
                          >
                            {`วันที่ ${new Date(
                              baby[numberTabs]?.checkDate[index]
                            ).toLocaleString()}`}
                          </Typography>
                        </Box>
                      ) : (
                        <Skeleton animation="wave" width={100} height={40} />
                      )}
                    </Stack>

                    <Stack direction="column" justifyContent="space-evenly">
                      <Typography
                        variant="subtitle1"
                        sx={{
                          fontSize: {
                            desktop: "16px",
                            laptop: "16px",
                            tablet: "16px",
                            mobile: "14px",
                          },
                        }}
                      >
                        ส่วนสูง {baby[numberTabs]?.height[index]} cm
                      </Typography>

                      <Typography
                        variant="subtitle1"
                        sx={{
                          fontSize: {
                            desktop: "16px",
                            laptop: "16px",
                            tablet: "16px",
                            mobile: "14px",
                          },
                        }}
                      >
                        น้ำหนัก {baby[numberTabs]?.weight[index]} kg
                      </Typography>
                    </Stack>
                  </Stack>

                  {index + 1 === baby[numberTabs]?.height.length ? (
                    <></>
                  ) : (
                    <Divider sx={{ bgcolor: "black", mt: 2 }} />
                  )}
                </Box>
              );
            })}
        </Box>

        <Box sx={{ display: "flex", justifyContent: "center", mb: 8 }}>
          <motion.div whileTap={{ scale: 0.9 }}>
            <SignOutButton redirectUrl="/">
              <button
                style={{
                  boxShadow: isHovereSignOut
                    ? "0 4px 20px rgba(0, 0, 0, 0.2)"
                    : "0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12)",
                  fontSize: "16px",
                  padding: "6px 16px",
                  backgroundColor: isHovereSignOut ? "#f50057" : "#ff4081",
                  border: "none",
                  borderRadius: "4px",
                  color: "#ffffff",
                  cursor: "pointer",
                  transition:
                    "background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
                }}
                onMouseEnter={() => setIsHovereSignOut(true)}
                onMouseLeave={() => setIsHovereSignOut(false)}
              >
                <Typography sx={{ fontSize: "16px", fontWeight: "500" }}>
                  Log out
                </Typography>
              </button>
            </SignOutButton>
          </motion.div>
        </Box>

        <BottomNavigationBar />
      </Box>
    </>
  );
};

export default Page;
