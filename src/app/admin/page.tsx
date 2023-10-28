"use client";
import React, { useState, useRef, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import Box from "@mui/material/Box";
import DateRangePicker from "./components/DateRangePicker";
import useMediaQuery from "@mui/material/useMediaQuery";
import muiTheme from "@/theme/theme";
import getDaysFromRange from "@/utils/getDaysFromRange";
import MenuCard from "./components/MenuCard";

type ValuePiece = Date | null;
type Value = [ValuePiece, ValuePiece];

const SIDEBAR_WIDTH = 240; // width in px
const SIDEBAR_BP_KEY = "sm";
const Page = () => {
  // Media query
  const matches = useMediaQuery(muiTheme.breakpoints.up(SIDEBAR_BP_KEY));

  // Handle the date range
  const [selectedRange, setSelectedRange] = useState<Value>([
    new Date(),
    new Date(new Date().getDate() + 1),
  ]);
  const onChange = (value: Value) => {
    setSelectedRange(value);
  };

  //Handle the rendering of the cards
  const [daysBetween, setDaysBetween] = useState<Date[]>([]);
  useEffect(() => {
    if (selectedRange[0] && selectedRange[1]) {
      setDaysBetween(getDaysFromRange(selectedRange[0], selectedRange[1]));
    }
  }, [selectedRange]);

  return (
    <main
      className="flex min-h-screen flex-col items-center p-8 lg:p-24 "
      style={{
        marginLeft: matches ? SIDEBAR_WIDTH : "inherit", // Allow space for sticky sidebar
      }}
    >
      <h1>Admin</h1>
      <Sidebar width={SIDEBAR_WIDTH} />
      <Box
        sx={{
          flexGrow: 1,
        }}
      >
        <DateRangePicker onChange={onChange} value={selectedRange} />
        {daysBetween.every((el) => el) &&
          daysBetween.map((day: Date, index: number) => {
            const nameOfDay = new Intl.DateTimeFormat("en-US", {
              weekday: "long",
            }).format(day);
            return (
              <MenuCard
                day={nameOfDay}
                key={nameOfDay + index}
                meals={{
                  breakfast: undefined,
                  lunch: undefined,
                  dinner: undefined,
                }}
              />
            );
          })}
      </Box>
    </main>
  );
};
export default Page;
