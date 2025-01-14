"use client";
import { createTheme } from "@mui/material/styles";
import { Mitr } from "next/font/google";

const mitr = Mitr({
  subsets: ["thai"],
  weight: "400",
});

const MuiTheme = createTheme({
  typography: {
    fontFamily: mitr.style.fontFamily,
  },
  breakpoints: {
    values: {
      mobile: 0,
      tablet: 640,
      laptop: 1024,
      desktop: 1200,
    },
  },
});

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: false; // removes the `xs` breakpoint
    sm: false;
    md: false;
    lg: false;
    xl: false;
    mobile: true; // adds the `mobile` breakpoint
    tablet: true;
    laptop: true;
    desktop: true;
  }
}

export default MuiTheme;
