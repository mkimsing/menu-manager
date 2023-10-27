"use client";
import React from "react";
import Sidebar from "./components/Sidebar";
import Box from "@mui/material/Box";
import DateRangePicker from "./components/DateRangePicker";
import useMediaQuery from "@mui/material/useMediaQuery";
import muiTheme from "@/theme/theme";
import { inherits } from "util";
const SIDEBAR_WIDTH = 240; // width in px
const SIDEBAR_BP_KEY = "sm";
const Page = () => {
  const matches = useMediaQuery(muiTheme.breakpoints.up(SIDEBAR_BP_KEY));
  return (
    <main
      className="flex min-h-screen flex-col items-center p-8 lg:p-24 "
      style={{
        marginLeft: matches ? SIDEBAR_WIDTH : "inherit", // Allow for sticky sidebar
      }}
    >
      <h1>Admin</h1>
      <Sidebar width={SIDEBAR_WIDTH} />
      <Box
        sx={{
          flexGrow: 1,
        }}
      >
        <DateRangePicker />
      </Box>
    </main>
  );
};
export default Page;
