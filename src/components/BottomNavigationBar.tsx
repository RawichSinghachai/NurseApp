"use client";
import React, { useEffect, useState } from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Paper from "@mui/material/Paper";
import HomeIcon from "@mui/icons-material/Home";
import AddchartIcon from "@mui/icons-material/Addchart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useRouter, usePathname } from "next/navigation";
import { grey, pink } from "@mui/material/colors";

const navItems = [
  { label: "Device", icon: <HomeIcon />, path: "/home" },
  { label: "Results", icon: <AddchartIcon />, path: "/display" },
  { label: "Advice", icon: <FavoriteIcon />, path: "/advice" },
  { label: "Profile", icon: <AccountCircleIcon />, path: "/profile" },
];

export default function BottomNavigationBar() {
  const router = useRouter();
  const pathname = usePathname();
  const [value, setValue] = useState(0);

  useEffect(() => {
    const index = navItems.findIndex((item) => item.path === pathname);
    setValue(index !== -1 ? index : 0);
  }, [pathname]);

  const handleNavigation = (index: number) => {
    setValue(index);
    router.push(navItems[index].path);
  };

  return (
    <Paper sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }} elevation={3}>
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => handleNavigation(newValue)}
      >
        {navItems.map((item, index) => (
          <BottomNavigationAction
            key={item.label}
            label={item.label}
            icon={item.icon}
            sx={{
              color: value === index ? pink[500] : grey[600],
              "& .MuiBottomNavigationAction-label": {
                color: value === index ? pink[500] : grey[600],
              },
              "& svg": {
                color: value === index ? pink[500] : grey[600],
              },
            }}
            showLabel
          />
        ))}
      </BottomNavigation>
    </Paper>
  );
}
