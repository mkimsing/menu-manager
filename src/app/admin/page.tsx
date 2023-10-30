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
  DailyMealChoices,
  WeeklyMealChoices,
  AvailableWeeklyMenu,
} from "@/api/types";
import { useAllMeals, AllMealsQueryResult } from "@/api/hooks/useAllMeals";
import { Button } from "@mui/material";
const SIDEBAR_WIDTH = 240; // width in px
const SIDEBAR_BP_KEY = "sm";
const DAYS_OF_WEEK_ARR = Object.keys(DaysOfWeek);

const initialEmptyMenu: AvailableWeeklyMenu = {} as AvailableWeeklyMenu;
DAYS_OF_WEEK_ARR.forEach((day: string) => {
  initialEmptyMenu[day as keyof WeeklyMealChoices] = {
    breakfast: {},
    lunch: {},
    dinner: {},
  };
});

const Page = () => {
  const [weeklyMenu, setWeeklyMenu] = useState(initialEmptyMenu);
  //Fetch meal data
  const { data: allMealsData, isLoading } = useAllMeals();

  // Media query
  const matches = useMediaQuery(muiTheme.breakpoints.up(SIDEBAR_BP_KEY));

  const handleSelect = (
    dayKey: string,
    mealKey: string,
    selectedId: string,
    newValue: boolean
  ) => {
    // // Accept only keys and are selected/true
    // const filteredKeys = Object.keys(options).filter((key) => options[key]);
    // //Lookup mealoption from ID
    // const fullMealOptions = filteredKeys.map((mealID) => {
    //   return allMealsData?.find((meal) => String(meal.id) === mealID);
    // });

    // Set state
    setWeeklyMenu({
      ...weeklyMenu,
      [dayKey]: {
        ...weeklyMenu[dayKey as keyof WeeklyMealChoices],
        [mealKey as keyof DailyMealChoices]: {
          ...weeklyMenu[dayKey as keyof WeeklyMealChoices][
            mealKey as keyof DailyMealChoices
          ],
          [selectedId]: newValue,
        },
      },
    });
  };

  const handleDelete = () => {};

  const submitMenu = () => {
    console.log(weeklyMenu);
  };
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
        {Object.keys(weeklyMenu).map((weeklyMenuKey) => {
          return (
            <MenuCard
              day={weeklyMenuKey}
              key={weeklyMenuKey}
              availableDailyMenu={
                weeklyMenu[weeklyMenuKey as keyof WeeklyMealChoices]
              }
              handleDelete={handleDelete}
              handleSelect={handleSelect}
              allMealsData={allMealsData}
            />
          );
        })}

        <Button onClick={() => submitMenu()}>Submit</Button>
      </Box>
    </main>
  );
};

export default Page;
