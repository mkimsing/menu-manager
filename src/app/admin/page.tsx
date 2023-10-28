"use client";
import React, { useState, useRef, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import Box from "@mui/material/Box";
import DateRangePicker from "./components/DateRangePicker";
import useMediaQuery from "@mui/material/useMediaQuery";
import muiTheme from "@/theme/theme";
import getDaysFromRange from "@/utils/getDaysFromRange";
import MenuCard from "./components/MenuCard";
import {
  DaysOfWeek,
  MealChoice,
  DailyMealChoices,
  WeeklyMealChoices,
} from "@/api/types";

const SIDEBAR_WIDTH = 240; // width in px
const SIDEBAR_BP_KEY = "sm";
const DAYS_OF_WEEK_ARR = Object.keys(DaysOfWeek);

const initialEmptyMenu: WeeklyMealChoices = {} as WeeklyMealChoices;
DAYS_OF_WEEK_ARR.forEach((day: string) => {
  initialEmptyMenu[day as keyof WeeklyMealChoices] = {
    breakfast: [],
    lunch: [],
    dinner: [],
  };
});

const Page = () => {
  const [selectedMenu, setSelectedMenu] = useState(initialEmptyMenu);
  // Media query
  const matches = useMediaQuery(muiTheme.breakpoints.up(SIDEBAR_BP_KEY));

  const handleSelect = (
    dayKey: string,
    mealKey: string,
    options: MealChoice[]
  ) => {
    setSelectedMenu({
      ...selectedMenu,
      [dayKey]: [
        ...selectedMenu[dayKey as keyof WeeklyMealChoices][
          mealKey as keyof DailyMealChoices
        ],
        ...options,
      ],
    });
  };
  const handleDelete = () => {};
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
        className="w-full"
      >
        {Object.keys(selectedMenu).map((key) => {
          return (
            <MenuCard
              day={key}
              key={key}
              meals={selectedMenu[key as keyof WeeklyMealChoices]}
              handleDelete={handleDelete}
              handleSelect={handleSelect}
            />
          );
        })}
      </Box>
    </main>
  );
};
export default Page;
